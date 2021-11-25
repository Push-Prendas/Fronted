<template>
    <div id="dashboard" >
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right" ref="content">
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" @getnombreRequirente="getnombreRequirente" 
			@getrutRequirente="getrutRequirente" @getCorreoRequirente="getCorreoRequirente"
			@getFechaRequirente="getFechaRequirente"/>
            <AntecedentesFormulario :rol="rol"  @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria"/>
            <AcreedorFormulario @gettipoPersona="gettipoPersona"  @getrun="getrun"
            @getid="getid" @getpais="getpais" @getrut="getrut" 
            @getrazonsocial="getrazonsocial" @getApaterno="getApaterno" @getAmaterno="getAmaterno" @getnombres="getnombres"/>
            <ConstituyentesFormulario :items="items_Constituyentes" @getConstituyentes="getConstituyentes" :modo="'Escribir'"/>
            <DeudoresFormulario :items="items_Deudores" @getDeudores="getDeudores" :modo="'Escribir'"/>
			<VehiculosFormulario @getVehiculos="getVehiculos" :items="total_itemsVehiculos"/>
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
			<ArchivosLectura :items="items_Contrato" :itemsAnexos="items_Anexos" />
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" @click="crearInscripcion(false)">Guardar</button>
                <button class="col-2 titleButton" @click="crearInscripcion(true)">Enviar</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import {db,storage} from "@/main";
import { collection, getDocs, setDoc, doc, query, where, updateDoc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import AcreedorFormulario from '../components/AcreedorFormulario.vue'
import ConstituyentesFormulario from '../components/ConstituyentesFormulario.vue'
import DeudoresFormulario from '../components/DeudoresFormulario.vue'
import VehiculosFormulario from '../components/VehiculosFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'
import Monto from '../components/Monto.vue'
import ArchivosLectura from '../components/ArchivosLectura.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
//import { getStorage } from "firebase/storage";
//import { getApp,initializeApp  } from "firebase/app";


  
//initializeApp()

//const storage2 = getStorage(firebaseApp);


  
//const app = initializeApp(firebaseConfig);



//const storage2 = getStorage();
var my_rpsd;

function validate_number(inputNumber){
        if(!inputNumber.includes("-")) return false;
        inputNumber = inputNumber.split("-");
        let number = inputNumber[0];
        let year = inputNumber[1];
        let curYear = new Date().getFullYear();
        if(isNaN(number) || number.includes("e") || number.length != 4) return false; //e counts as infinity
        if(year>curYear || isNaN(year) || year.length < 4) return false;
        return true;
}

var solicitud_relacionada;
var total_items = []
var total_itemsConstitutente = []
var total_itemsDeudores = []
var total_itemContraro = []
var total_itemsAnexos = []
function addVehiculo(patente,rvm,GoE,estado) {
        let item = {
            "patente": patente,
            "rvm": rvm,
            "GoE": GoE,
            "estado": estado}
        total_items.push(item);
}
function addConstituyente(tipo,run,nombre,pais){
	console.log("PASEEEE")
	var item = {
		"Tipo" : tipo,
		"Id" : run,
		"Name": nombre,
		"Pais" : pais
	}
	total_itemsConstitutente.push(item)
}
function addDeudores(tipo,run,nombre,pais){
	console.log("PASEEEE")
	var item = {
		"Tipo" : tipo,
		"Id" : run,
		"Name": nombre,
		"Pais" : pais
	}
	total_itemsDeudores.push(item)
}

function addContrato(href){
	var item = {
		"href": href
	}
	total_itemContraro.push(item)
}

function addAnexos(href){
	var item = {
		"href": href
	}
	total_itemsAnexos.push(item)
}

var acreedores_relacionados = []
var constituyentes_relacionados = []
var deudores_relacionados = []
var contratos_relacionados = []
var archivos_relacionados = []	
var patentes_relacionadas = []


function modifySecondaryStatus(tipo_de_solicitud, id_solicitud, estado_secundario, user_id){
	///FUNCION QUE PERMITE ACTUALIZAR UN ESTADO, EL ID VA COMO STRING

	////////OJO: REVISAR NUMERO REPERTORIO DE PRENDA/////////////////
	///GUARDAR EN UNA TABLA APARTE O EN ALGO EL NUMERO DE REPEROTRIO DE PRENDA ACTUAL Y ASIGNAR
	var change_message = ["El pago no se realizo", "Hubo intencion de pagar", "Pagado"]
	getDocs(collection(db, "Counter_N_RPsD")).then((n) => {
		var counter_data = n.docs[0].data();
		var counter = counter_data.counter;
		if(counter < 10){
			counter = "000" + counter.toString()
		}
		else if (counter < 100){
			counter = "00" + counter.toString()
		}
		else if (counter < 1000){
			counter = "0" + counter.toString()
		}
		else{
			counter = counter.toString()
		}
		var year = counter_data.year;
		my_rpsd = counter + "-" + year.toString()
		console.log("RPSD: " + my_rpsd)
		if(estado_secundario == 1){
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
		}
		else{
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
				});
			}
		}
		updateDoc(doc(db, "Counter_N_RPsD","0"),{
			counter: counter_data.counter + 1
		});

	})
    getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((n) => {
        var estado_primario = ""
        console.log("INSCRIPCION TEST")
          var myid = n.docs
          myid.forEach((p) => {
            console.log(p.id)
            if(p.id.toString() == id_solicitud.toString()){
                console.log("MISMO ID")
                estado_primario = p.data().estadoPrimario
                
            }

            var today = new Date();
            getDocs(collection(db, "Bitacora")).then((bit_data) => {
                var id_bit = bit_data.docs.length;
                var id_insc = ""
                var id_mod = ""
                var id_alz = ""
                if(tipo_de_solicitud == "I"){
                    id_insc = id_solicitud
                }
                else if(tipo_de_solicitud == "M"){
                    id_mod = id_solicitud
                }
                else if(tipo_de_solicitud == "A"){
                    id_alz = id_solicitud
                }
                setDoc(doc(collection(db, "Bitacora"),id_bit.toString()), {
                    idInscripcion: id_insc,
                    idModificacion: id_mod,
                    idAlzamiento: id_alz,
                    idUser: user_id,
                    comment: change_message[estado_secundario],
                    fechaCambio: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                    estadoPrimario: estado_primario
                })
            })
          })
     })
	
}

function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS
	if(tipo_de_solicitud == "I"){
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();	
			
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						var all_docs = file_data.docs;
						all_docs.forEach((d) => {
							var my_doc = d.data();
							
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
						
					}).then(() => {
						console.log("ARCHIVOS")
						
						console.log(contratos_relacionados)
						contratos_relacionados.forEach((data) => {
							addContrato(data.url)
				
						})
						console.log(archivos_relacionados)
						archivos_relacionados.forEach((data) => {
							addAnexos(data.url)
				
						})
					})
					getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", id_inscripcion))).then((persona_data) => {
						var all_personas = persona_data.docs;
						console.log("per")
						console.log(persona_data.docs)
						all_personas.forEach((d) => {
							var my_doc = d.data();
							if (my_doc.tipoContratante == 0){
								acreedores_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 1){
								constituyentes_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 2){
								deudores_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("PERSONASs")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						constituyentes_relacionados.forEach((data) => {
							addConstituyente(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
						console.log(deudores_relacionados)
						deudores_relacionados.forEach((data) => {
							addDeudores(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
					})
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", parseInt(id_inscripcion)))).then((patente_data) => {
						var all_patentes = patente_data.docs;
						all_patentes.forEach((p) => {
							var my_doc = p.data();
							patentes_relacionadas.push(my_doc)
						})

					}).then(() => {
						console.log("PATENTES")
						console.log(patentes_relacionadas)

                        patentes_relacionadas.forEach((data) =>{
                                console.log(data.patente)
                                console.log(data.inscripcionPrendaRVM)
                                console.log(data.inscripcionProhibicionGravarEnajenar)
                                console.log(data.alzamiento)
                                addVehiculo(data.patente,data.inscripcionPrendaRVM,data.inscripcionProhibicionGravarEnajenar,data.alzamiento)
                            })
					})
				}
			})
		}).then(() => {
			console.log("INSCRIPCION")
			console.log(patentes_relacionadas)
            //add(patente,rvm,GoE,estado)
			///INSCRIPCION ENCONTRADA
			///FRONTEND -> MODIFICAR ACA	///

		})
	}
	else if(tipo_de_solicitud == "M"){
		getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						var all_docs = file_data.docs;
						all_docs.forEach((d) => {
							var my_doc = d.data();
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("ARCHIVOS")
						console.log(contratos_relacionados)
                        contratos_relacionados.forEach((data) => {
							addContrato(data.url)
				
						})
						console.log(archivos_relacionados)
						archivos_relacionados.forEach((data) => {
							addAnexos(data.url)
				
						})
					})
                    getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", id_inscripcion))).then((persona_data) => {
						var all_personas = persona_data.docs;
						console.log("per")
						console.log(persona_data.docs)
						all_personas.forEach((d) => {
							var my_doc = d.data();
							if (my_doc.tipoContratante == 0){
								acreedores_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 1){
								constituyentes_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 2){
								deudores_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("PERSONASs")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						constituyentes_relacionados.forEach((data) => {
							addConstituyente(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
						console.log(deudores_relacionados)
						deudores_relacionados.forEach((data) => {
							addDeudores(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
					})
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", parseInt(id_inscripcion)))).then((patente_data) => {
						var all_patentes = patente_data.docs;
						all_patentes.forEach((p) => {
							var my_doc = p.data();
							patentes_relacionadas.push(my_doc)
						})

					}).then(() => {
						console.log("PATENTES")
						console.log(patentes_relacionadas)

                        patentes_relacionadas.forEach((data) =>{
                                console.log(data.patente)
                                console.log(data.inscripcionPrendaRVM)
                                console.log(data.inscripcionProhibicionGravarEnajenar)
                                console.log(data.alzamiento)
                                addVehiculo(data.patente,data.inscripcionPrendaRVM,data.inscripcionProhibicionGravarEnajenar,data.alzamiento)
                            })
					})
				}
			})
		}).then(() => {
			console.log("MODIFICACION")
			console.log(solicitud_relacionada)
			///MODIFICACION ENCONTRADA
			///FRONTEND MODIFICAR ACA



			///

		})
		
	}
	else if (tipo_de_solicitud == "A"){
		//VER COMO ESTA CONSTITUIDO ALZAMIENTO
		getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						var all_docs = file_data.docs;
						all_docs.forEach((d) => {
							var my_doc = d.data();
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("ARCHIVOS")
						console.log(contratos_relacionados)
                        contratos_relacionados.forEach((data) => {
							addContrato(data.url)
				
						})
						console.log(archivos_relacionados)
						archivos_relacionados.forEach((data) => {
							addAnexos(data.url)
				
						})
					})
                    getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", id_inscripcion))).then((persona_data) => {
						var all_personas = persona_data.docs;
						console.log("per")
						console.log(persona_data.docs)
						all_personas.forEach((d) => {
							var my_doc = d.data();
							if (my_doc.tipoContratante == 0){
								acreedores_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 1){
								constituyentes_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 2){
								deudores_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("PERSONASs")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						constituyentes_relacionados.forEach((data) => {
							addConstituyente(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
						console.log(deudores_relacionados)
						deudores_relacionados.forEach((data) => {
							addDeudores(data.tipoAcreedor, data.runPersona, data.nombrePersona, data.paisPersona)
				
						})
					})
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", parseInt(id_inscripcion)))).then((patente_data) => {
						var all_patentes = patente_data.docs;
						all_patentes.forEach((p) => {
							var my_doc = p.data();
							patentes_relacionadas.push(my_doc)
						})

					}).then(() => {
						console.log("PATENTES")
						console.log(patentes_relacionadas)

                        patentes_relacionadas.forEach((data) =>{
                                console.log(data.patente)
                                console.log(data.inscripcionPrendaRVM)
                                console.log(data.inscripcionProhibicionGravarEnajenar)
                                console.log(data.alzamiento)
                                addVehiculo(data.patente,data.inscripcionPrendaRVM,data.inscripcionProhibicionGravarEnajenar,data.alzamiento)
                            })
					})
				}
			})
		}).then(() => {
			console.log("ALZAMIENTO")
			console.log(solicitud_relacionada)

			///ALZAMIENTO ENCONTRADO
			///FRONTEND MODIFICAR DE ACA


			//////////////////////
		})
	}
}

function enviar_solicitud_de_inscripcion_prenda(tipo_documento, fecha_suscripcion, fecha_otorgamiento_escritura, fecha_protocolizacion_contrato_privado, fecha_autorizada,
	numero_repertorio_notario, prohibicion_gravar_enajenar, notaria, nombre_requirente,
	run_requiriente,correo_requiriente, fecha_requiriente, activo_fijo, bienes_agropecuarios, derechos_intangibles, prenda_vehiculo, monto_total, send_flag,
	tipo_persona_acreedor, run_acreedor, nombres_acreedor,  pais_persona,
	constituyentes=[], deudores=[], vehiculos=[], contratos=[], archivos=[], rol_oficina=false, Oficina, userid, monto_act
	){

	//Manejar estado de solicitud primario y secundario"
	console.log("loading")
	//VALIDACION DE DATOS
	var validate = true;
	///Personas es una lista de listas, cada sublista se compone de
	///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
	///3->pais persona
	///[["Natural","20000000-K","Juanito Perez","Chile"],["Juridico","50000000-K","Empresa","Chile"]]

	vehiculos.forEach((v) => {
		if(v[0]){
			console.log("VALIDANDO PATENTES")
			//INVOCAR SERVICIO DEL PATENTE


			//RESULTADOS DEL SERVICIO DE PATENTE
		}
	})

	if(!prenda_vehiculo && vehiculos.length > 0){
		prenda_vehiculo = true;
	}

	//NUMERO REPERTORIO NOTARIO: FOLIO-YEAR
	console.log(numero_repertorio_notario)
	if((numero_repertorio_notario).length != 9 || !validate_number(numero_repertorio_notario)){

		validate = false
		console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
		//FRONTEND => MOSTRAR ERROR
		alert("Numero repertorio notario formato incorrecto")
		//////////////////////////
	}

	if(!rol_oficina && contratos.length == 0){
		validate = false
		console.log("NO HAY CONTRATO")
		alert("No hay contrato")
	}

	//ADEMAS DE VER TODAS LAS VALIDACIONES DE TIPO VER CON GRUPO DE SERVICIOS LO DE VERIFICADOR DE PATENTES

	//SUBIR A LA BASE DE DATOS
	if(validate){
		var estado_inicial = 0 //GUARDADO
		console.log("validate")
		if(send_flag){ ///VERIFICAR SI VIENE O NO DE OFICINA
			if(rol_oficina)
				estado_inicial = 3 //ENVIADO DESDE OFICINA
			else
				estado_inicial = 1 //ENVIADO DESDE NOTARIA
		
		}
		//Contar elementos en la lista para dar una ID
		//En este caso funciona porque nosotros NUNCA borramos algo de la base de datos REALMENTE
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var id = sol_data.docs.length + 1;
			console.log(id)
			//INSCRIPCION
			setDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),localStorage.id_revisar.toString()), {
				privacidadDocumento: tipo_documento,
				fechaSuscripcion: fecha_suscripcion,
				fechaOtorgamientoEscritura: fecha_otorgamiento_escritura,
				fechaProtocolizacionContratoPrivado: fecha_protocolizacion_contrato_privado,
				fechaAutorizacionContratoPrivado: fecha_autorizada,
				numeroRepertorioNotario: numero_repertorio_notario,
				numeroRepertorioContratoPrenda: -1,
				prohibicionGravarEnajenar: prohibicion_gravar_enajenar,
				nombre_notaria: notaria,
				nombreRequiriente: nombre_requirente,
				runRequiriente: run_requiriente,
				correoRequiriente: correo_requiriente,
				fechaRequirente: fecha_requiriente,
				activoFijo: activo_fijo,
				bienesAgropecuarios: bienes_agropecuarios,
				derechosIntangibles: derechos_intangibles,
				prendaVehiculo: prenda_vehiculo,
				montoActuacion: monto_act,
				montoTotal: monto_total,
				estadoPrimario: estado_inicial,
				estadoSecundario: 0,
				usuarioCreador: userid,
				oficina: Oficina,
				firma: false
			}).then(() => {
				//TABLAS RELACIONADAS
				getDocs(collection(db, "Patente_por_Inscripcion")).then((pat_data) => {
					var patente_id = pat_data.docs.length + 1;
					console.log(patente_id)
					vehiculos.forEach((ve) => {
						///Vehiculos es una lista de listas que guarda vehiculos
						///cada indice de la sublista es 0->PPU, 1->InscripcionPrendaRVM, 2->Prohibicion, 3->alzamiento
						setDoc(doc(collection(db, "Patente_por_Inscripcion"),patente_id.toString()),{
							patente: ve["patente"],
							inscripcionPrendaRVM: ve["rvm"],
							inscripcionProhibicionGravarEnajenar: ve["GoE"],
							alzamiento: false,
							idInscripcion: id
						});
						patente_id+=1;
					})
					
				});
				getDocs(collection(db, "Persona_Solicitud")).then((per_data) => {
					var persona_id = per_data.docs.length + 1;
					console.log(persona_id)
					setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
						tipoContratante: 0, //Acreedor
						tipoAcreedor: tipo_persona_acreedor,
						runPersona: run_acreedor,
						nombrePersona: nombres_acreedor,
						idInscripcion: id,
						paisPersona: pais_persona
					});
					persona_id+=1;
					constituyentes.forEach((con) => {
						let pais = con["pais"]
						if(pais == ""){
							pais = "Chile"
						}
						setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
							///Constituyentes es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
							///3->pais persona
							
							tipoContratante: 1, //Constituyente
							tipoAcreedor: con["Tipo"],
							runPersona: con["Id"],
							nombrePersona: con["Name"],//EN JURIDICA ES RAZON SOCIAL 
							idInscripcion: id,
							paisPersona: pais
						});
						persona_id+=1;
					})
					deudores.forEach((de) => {
						let pais = de["pais"]
						if(pais == ""){
							pais = "Chile"
						}
						setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
							///Deudores es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
							///3->pais persona
							tipoContratante: 2, //Deudores
							tipoAcreedor: de["Tipo"],
							runPersona: de["Id"],
							nombrePersona: de["Name"],
							idInscripcion: id,
							paisPersona: pais
						});
						persona_id+=1;
					})


				});
				var today = new Date();
				getDocs(collection(db, "Bitacora")).then((bit_data) => {
					var id_bit = bit_data.docs.length;
					var id_insc = id;
					setDoc(doc(collection(db, "Bitacora"),id_bit.toString()), {
						idInscripcion: id_insc,
						idModificacion: "",
						idAlzamiento: "",
						idUser: localStorage.mail,
						comment: "Solicitud de Inscricpion Creada",
						fechaCambio: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
					})
				})
				//REVISAR DOCUMENTOS
				var repertorio = null
				getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
					var id_inspeccion = pat_data.docs.length
					var pt = pat_data.docs[id_inspeccion-1]
					repertorio = pt.data().numero_repertorio_RPsD
					
				}).then(() => {

				getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
					var document_id = doc_data.docs.length
					console.log("Entro")

					console.log(contratos)
					console.log(archivos)



					console.log("---------------------")
					//const storageRef = ref(storage); 	
					//console.log(storageRef.id)				
					for(var i = 0; i<contratos.length; i++){

						const fileRef = ref(storage,contratos[i].name);
						await uploadBytes(fileRef,contratos[i]);
						const url_file = await getDownloadURL(fileRef)
						console.log("MY URL")
						console.log(url_file)
						console.log(document_id.toString())
						console.log("---------------------")
						setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
							id_alzamiento: "",
							id_modificacion: document_id.toString(),
							idInscripcion: id,
							año_repertorio_del_contrato: new Date().getFullYear(),
							numero_repertorio_RPsD: repertorio + 1,
							url: url_file,
							contrato: true
						});
						document_id+=1;
					}
					for(i = 0; i<archivos.length; i++){
						const fileRef = ref(storage,archivos[i].name);
						await uploadBytes(fileRef,archivos[i]);
						const url_file = await getDownloadURL(fileRef)
						setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
							idInscripcion: id,
							id_alzamiento: "",
							id_modificacion: document_id.toString(),
							año_repertorio_del_contrato: new Date().getFullYear(),
							numero_repertorio_RPsD: repertorio + 1,
							url: url_file,
							contrato: false
						});
						document_id+=1;
					}

				});

			}).then(() => {
				const doc = new jsPDF();
				/** WITH CSS */
				var canvasElement = document.createElement('canvas');
					html2canvas(this.$refs.content,{scale:1}, { canvas: canvasElement 
					}).then(function (canvas) {
					const img = canvas.toDataURL("image/jpeg",1);
					doc.addImage(img,'JPEG',20,20,120,120);
					doc.save("InscripcionPrenda.pdf");
				});
				console.log("EVERYTHING ITS SEND SUCCESFULLY")
				if (send_flag==false){
					alert("Solicitud Guardada Exitosamente")
				}else{
					alert("Solicitud Enviada Exitosamente")
					this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/MisSolicitudes`})

				}
				
				//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
				
				console.log("PAGANDO EN CAJA")
				//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
				
				if (rol_oficina){
					modifySecondaryStatus("I",id.toString(),1,userid)
					setTimeout(() => {
						var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4033/api/checkout/pay'
						var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd + '", "monto":' + monto_total +'}'
						fetch(url, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: params
						}).then((response)=>{
							response.json().then((reqResult) => {
								alert(reqResult.msg)
								console.log("PAGADO")
								modifySecondaryStatus("I",id.toString(),2,userid)
								this.redirect()					
							})
						})
					}, 1500);
				}		

				//
			})

		})
		});
	}

}

var preciosGlobal = []
function see_prices(){
	getDocs(collection(db,"Precios")).then((price_Data) => { 
		var my_prices = price_Data.docs
		my_prices.forEach((p) => {
			var p_data = p.data();
			preciosGlobal.push(p_data)
		})
		console.log(preciosGlobal)
	})
}

export default {
  mounted() {
	this.clean()
    console.log("MOUNT")
	see_prices()
	setTimeout(() => {
		console.log("DINERO")
		const monto = document.getElementById('monto')
		monto.innerHTML = "$" + preciosGlobal[0]["precio"]
		const monto2 = document.getElementById('monto2')
        monto2.innerHTML = "$" + preciosGlobal[0]["precio"]
		const monto3 = document.getElementById('monto3')
        monto3.innerHTML = "$" + 0
	}, 1500);


    console.log(localStorage.id_revisar+" "+localStorage.tipo_revisar)

    buscador_especifico_solicitud(parseInt(localStorage.id_revisar), localStorage.tipo_revisar)
    setTimeout(() => { 

            console.log("SOLICITUD2")
            console.log(solicitud_relacionada)	
			//Antecedentes
            var tipo = document.getElementById("tipoDeDocumento");
            tipo.value = solicitud_relacionada.privacidadDocumento
            var event = new Event('change');
            tipo.dispatchEvent(event);
			tipo.disabled = true
            setTimeout(() => {

			
            if(solicitud_relacionada.privacidadDocumento == "Publico"){
                var FechaOtorgamiento =  document.getElementById("FechaOtorgamiento");
                var FechaSubscripcion = document.getElementById("FechaSubscripcion");
                FechaOtorgamiento.value = solicitud_relacionada.fechaOtorgamientoEscritura
                FechaSubscripcion.value = solicitud_relacionada.fechaSuscripcion
				FechaOtorgamiento.disabled = true
				FechaSubscripcion.disabled = true
            }
            else if(solicitud_relacionada.privacidadDocumento == "Privado"){
                var FechaAutorizacion = document.getElementById("FechaAutorizacion");
                var FechaProtocolizacion = document.getElementById("FechaProtocolizacion");
                FechaAutorizacion.value = solicitud_relacionada.fechaAutorizacionContratoPrivado
                FechaProtocolizacion.value = solicitud_relacionada.fechaProtocolizacionContratoPrivado
				FechaAutorizacion.disabled = true
				FechaProtocolizacion.disabled = true
            }
            },500)

            
    
            setTimeout(() => {
			var numero_repertorio        = solicitud_relacionada.numeroRepertorioNotario.split('-')
            var left                     = document.getElementById("foliorepnontaria");
            var right                    = document.getElementById("anorepnotaria");
			const gravaroenajenar        = document.getElementById("gravaroenajenar")
			const act_fijo               = document.getElementById('checkinscactfijo')
            const bien_agro              = document.getElementById('checkinscbagropec')
            const derechos_intangibles   = document.getElementById('checkinscderecheint')
            const vehiculos              = document.getElementById('checkinscvehic')


			gravaroenajenar.checked      = solicitud_relacionada.prohibicionGravarEnajenar
            act_fijo.checked             = solicitud_relacionada.activoFijo
            bien_agro.checked            = solicitud_relacionada.bienesAgropecuarios
            derechos_intangibles.checked = solicitud_relacionada.derechosIntangibles
            vehiculos.checked            = solicitud_relacionada.prendaVehiculo
			left.value                   = numero_repertorio[0]
            right.value                  = numero_repertorio[1]

			gravaroenajenar.disabled = true
            act_fijo.disabled = true
            bien_agro.disabled = true
            derechos_intangibles.disabled = true
            vehiculos.disabled = true
			left.disabled = true
			right.disabled = true
            
            },500)
			//FIN ANTECENDENTES

			//ACREEDOR
			const tipoPersona = document.getElementById("tipodepersona");
			const run =  document.getElementById("runacreedor");
			const nombre =  document.getElementById("nombresacreedor");
			const apPaterno =  document.getElementById("apellidopaterno");
			const apMaterno =  document.getElementById("apellidomaterno");
			const nombreCompleto = acreedores_relacionados[0].nombrePersona.split(" ");
			
			//VALUES
			tipoPersona.value = acreedores_relacionados[0].tipoAcreedor;
			run.value = acreedores_relacionados[0].runPersona;
			nombre.value = nombreCompleto[0];
			apPaterno.value = nombreCompleto[1];
			apMaterno.value = nombreCompleto[2];

			//DISABLED
			tipoPersona.disabled = true;
			run.disabled = true;
			nombre.disabled = true;
			apMaterno.disabled = true;
			apPaterno.disabled = true;

			//FIN ACREEDOR

			//CONSTITUTENTES
			this.items_Constituyentes = total_itemsConstitutente

			// DEUDORES
			this.items_Deudores = total_itemsDeudores
			console.log("deudores")
			console.log(this.items_Deudores)
			//VEHICULOS
			this.total_itemsVehiculos = total_items

			//CONTRATO
			this.items_Contrato = total_itemContraro
			console.log("estoy aqui en contratos, lo que esta abajo")
			console.log(this.items_Contrato)

			//ANEXOS
			this.items_Anexos = total_itemsAnexos

           }, 2000)
  },
  name: 'Dashboard',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            tipoDoc:'',
            FOtorgamiento: '',
            FSuscripcion: '',
            FAutorizacion: '',
            FProtocolizacion: '',
            RepNotaria: '',
            anioRepNotaria: '',
            ProhibGravEnajenar: false,
            tipoPersona:'Natural',
            run: '',
            id: '',
            pais: '',
            rut: '',
            razonsocial: '',
            Apaterno: '',
            Amaterno: '',
            nombres: '',
			nombreRequirente: '',
            nDocRequirente: '',
            correoRequirente: '',
            fechaRequirente: this.currentDateTime,
            Bienes: [false, false, false, false],
            constituyentes: [],
            deudores: [],
			vehiculos: [],
			contrato: null,
			anexos: null,
			notaria:'',
			rol:localStorage.rol,
			total_itemsVehiculos : new Array,
			items_Constituyentes : new Array,
			items_Deudores: new Array,
			items_Contrato: new Array,
			items_Anexos: new Array
        }
    },
  props: {

  },
  methods: {
		getNotaria(data){
		this.notaria=data
		},
        gettipoDoc(data) { 
        this.tipoDoc = data
        },
        getFOtorgamiento(data) {
        this.FOtorgamiento = data
        },
        getFSuscripcion(data) {
        this.FSuscripcion = data
        },
        getFAutorizacion(data) {
        this.FAutorizacion = data
        },
        getFProtocolizacion(data) {
        this.FProtocolizacion = data
        },
        getRepNotaria(data) {
        this.RepNotaria = data
        },
        getanioRepNotaria(data) {
        this.anioRepNotaria = data
        },
        getProhibGravEnajenar(data) {
        this.ProhibGravEnajenar = data
        },
        gettipoPersona(data) { 
            this.tipoPersona = data
        },
        getrun(data) {
        this.run = data
        },
        getid(data) {
        this.id = data
        },
        getpais(data) {
        this.pais = data
        },
        getrut(data) {
        this.rut = data
        },
        getrazonsocial(data) {
        this.razonsocial = data
        },
        getApaterno(data) {
        this.Apaterno = data
        },
        getAmaterno(data) {
        this.Amaterno = data
        },
		getnombreRequirente(data) {
        this.nombreRequirente = data
        },
        getrutRequirente(data) {
        this.nDocRequirente = data
        },
        getCorreoRequirente(data) {
        this.correoRequirente = data
        },
		currentDateTime() {
		const current = new Date();
		const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
		return date;
		},
        getFechaRequirente(data) {
        this.fechaRequirente = data
        },
        getnombres(data) {
        this.nombres = data
        },
        getBienes(data) {
			this.Bienes = data        
        },
        getConstituyentes(data) {
        this.constituyentes = data
        console.log("Constituyentes:"+this.constituyentes)
        },
        getDeudores(data) {
        this.deudores = data
        console.log("Deudores:"+this.deudores)
        },
		getVehiculos(data) {
        this.vehiculos = data
        //console.log("Vehiculos:"+this.vehiculos[0]["patente"],)
        },
		getContrato(data) {
        this.contrato = data
        console.log("Contrato:"+this.contrato)
        },
		getAnexos(data) {
        this.anexos = data
        console.log("Anexos:"+this.anexos)
        },
        crearInscripcion(flags){
			var runacreedor;
			var nombreacreedor;
			if(this.tipoPersona == "Natural"){
				runacreedor = this.run
				nombreacreedor = this.nombres + " " + this.Apaterno + " " + this.Amaterno
			}else if(this.tipoPersona == "Juridica"){
				runacreedor = this.rut
				nombreacreedor = this.razonsocial
			}else{
				runacreedor = this.id
				nombreacreedor = this.nombres
			}
			console.log(this.Bienes)
			var oReq = new XMLHttpRequest();
			var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + runacreedor  
			oReq.open("GET", url);
			oReq.send();
			oReq.onload = ()=>{
				if(oReq.status == 200){
					var reqResult = JSON.parse(oReq.response);
					if (reqResult.valid){
						enviar_solicitud_de_inscripcion_prenda(this.tipoDoc.toString(),
							this.FSuscripcion.toString(),
							this.FOtorgamiento.toString(),
							this.FProtocolizacion.toString(),
							this.FAutorizacion.toString(), 
							solicitud_relacionada.numeroRepertorioNotario,
							this.ProhibGravEnajenar,
							this.notaria, 
							this.nombreRequirente, 
							this.nDocRequirente, 
							this.correoRequirente,
							this.fechaRequirente,
							this.Bienes[0],
							this.Bienes[1], 
							this.Bienes[2], 
							this.Bienes[3], 
							this.monto, 
							flags, 
							this.tipoPersona, 
							runacreedor.toString(), //id , rut y run
							nombreacreedor, 
							this.pais, 
							this.constituyentes, 
							this.deudores, 
							this.vehiculos, 
							this.contrato, 
							this.anexos, 
							localStorage.rol == 'FUNCIONARIOOFICINA',
							"mi oficina",
							localStorage.mail,
							preciosGlobal[0]["precio"]
							)
					}
					else{
						alert(reqResult.msg)
					}
				}
				this.downloadWithCSS()
			}

		},
		downloadWithCSS() {
            const doc = new jsPDF();
            /** WITH CSS */
            var canvasElement = document.createElement('canvas');
                html2canvas(this.$refs.content,{scale:1}, { canvas: canvasElement 
                }).then(function (canvas) {
                const img = canvas.toDataURL("image/jpeg",0.8);
                doc.addImage(img,'JPEG',20,20,120,120);
                doc.save("sample.pdf");
            });
        },
		clean(){
		patentes_relacionadas.length = 0
		acreedores_relacionados.length = 0
		constituyentes_relacionados.length = 0
		deudores_relacionados.length = 0
		contratos_relacionados.length = 0
		archivos_relacionados.length = 0	
		total_items.length = 0
		total_itemsDeudores.length = 0
		total_itemsConstitutente.length = 0
		total_itemsAnexos.length = 0
		total_itemContraro.length = 0
	}
  },
  components: {
    AntecedentesFormulario,
    AcreedorFormulario,
    ConstituyentesFormulario,
    DeudoresFormulario,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Menu,
    Navbar,
    RequirenteFormulario,
    Monto,
	ArchivosLectura
  },
  
}

</script>

<style scoped>
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
}
.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}

.titleButton{
    color: #514BD5;
    font-family: Roboto;
    font-weight: bold;
    background: #CEF1FF;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
}
</style>