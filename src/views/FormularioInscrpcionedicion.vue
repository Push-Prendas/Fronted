<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
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
            <ConstituyentesFormulario :items="constituyentes" @getConstituyentes="getConstituyentes" />
            <DeudoresFormulario :items="deudores" @getDeudores="getDeudores"/>
			<VehiculosFormulario :items="vehiculos" @getVehiculos="getVehiculos"/>
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
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
import { collection, getDocs, setDoc, doc, query, where} from "firebase/firestore";
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
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
//import { getStorage } from "firebase/storage";
//import { getApp,initializeApp  } from "firebase/app";


  
//initializeApp()

//const storage2 = getStorage(firebaseApp);


  
//const app = initializeApp(firebaseConfig);



//const storage2 = getStorage();

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
var acreedores_relacionados = []
var constituyentes_relacionados = []
var deudores_relacionados = []
var contratos_relacionados = []
var archivos_relacionados = []	
var patentes_relacionadas = []


function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS
    console.log("ENTREEEEEEEE")
	if(tipo_de_solicitud == "I"){
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();					
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", parseInt(id_inscripcion)))).then((file_data) => {
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
						console.log(archivos_relacionados)
					})
					getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", parseInt(id_inscripcion)))).then((persona_data) => {
						var all_personas = persona_data.docs;
						console.log("PERSONA ---->")
						console.log(id_inscripcion)
						all_personas.forEach((d) => {
							var my_doc = d.data();
							console.log(my_doc)
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
						console.log(acreedores_relacionados)
					}).then(() => {
						console.log("PERSONAS")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						console.log(deudores_relacionados)
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
                                //add(data.patente,data.inscripcionPrendaRVM,data.inscripcionProhibicionGravarEnajenar,data.alzamiento)
                                //this.option
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
						console.log(archivos_relacionados)
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
						console.log(archivos_relacionados)
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
	constituyentes=[], deudores=[], vehiculos=[], contratos=[], archivos=[], rol_oficina=false, Oficina, userid
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
			setDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),id.toString()), {
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
				fechaRequiriente: fecha_requiriente,
				activoFijo: activo_fijo,
				bienesAgropecuarios: bienes_agropecuarios,
				derechosIntangibles: derechos_intangibles,
				prendaVehiculo: prenda_vehiculo,
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
						setDoc(doc(collection(db, "Patente_por_Inscripcion"),id.toString()),{
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
				console.log("EVERYTHING ITS SEND SUCCESFULLY")
				if (send_flag==false){
					alert("Solicitud Guardada Exitosamente")
				}else{
					alert("Solicitud Enviada Exitosamente")
					this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/MisSolicitudes`})

				}
				
				//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
				


				//
			})

		})
		});
	}

}

export default {
  mounted(){
		console.log("STARTER DATA")
		console.log(localStorage.id_revisar)
		console.log(localStorage.tipo_revisar)
		buscador_especifico_solicitud(localStorage.id_revisar,localStorage.tipo_revisar)
		setTimeout(() => {
		console.log(solicitud_relacionada)
		console.log(acreedores_relacionados)
		console.log(constituyentes_relacionados)
		console.log(deudores_relacionados)
		console.log(contratos_relacionados)
		console.log(archivos_relacionados)
		console.log(patentes_relacionadas)

		//CARGAR DATOS
		//Requiriente
		if(localStorage.rol == "FUNCIONARIOOFICINA"){
			document.getElementById('nombrecompletorequirente').value = solicitud_relacionada.nombreRequiriente
			document.getElementById('ndedocumentorequirente').value = solicitud_relacionada.runRequiriente
			document.getElementById('correorequirente').value = solicitud_relacionada.correoRequiriente
			document.getElementById('fecharequirente').value = solicitud_relacionada.fechaRequiriente
		}

		//Antecedentes
		document.getElementById('tipoDeDocumento').value = solicitud_relacionada.privacidadDocumento
		if(solicitud_relacionada.privacidadDocumento == "Publico"){
			document.getElementById('FechaOtorgamiento').value = solicitud_relacionada.fechaOtorgamientoEscritura
			document.getElementById('FechaSubscripcion').value = solicitud_relacionada.fechaSuscripcion
		}
		else{
			document.getElementById('FechaAutorizacion').value = solicitud_relacionada.fechaAutorizacionContratoPrivado
			document.getElementById('FechaProtocolizacion').value = solicitud_relacionada.fechaProtocolizacionContratoPrivado
		}	
		document.getElementById('foliorepnontaria').value = solicitud_relacionada.numeroRepertorioNotario.split('-')[0]
		document.getElementById('anorepnotaria').value = solicitud_relacionada.numeroRepertorioNotario.split('-')[1]
		document.getElementById('gravaroenajenar').checked = solicitud_relacionada.prohibicionGravarEnajenar
		if(localStorage.rol == "FUNCIONARIOOFICINA"){
			document.getElementById('notaria').value = solicitud_relacionada.notaria
		}
		document.getElementById('checkinscactfijo').checked = solicitud_relacionada.activoFijo
		document.getElementById('checkinscbagropec').checked = solicitud_relacionada.bienesAgropecuarios
		document.getElementById('checkinscderecheint').checked = solicitud_relacionada.derechosIntangibles
		document.getElementById('checkinscvehic').checked = solicitud_relacionada.vehiculos

		//Acreedor
		document.getElementById('tipodepersona').value = acreedores_relacionados[0].tipoAcreedor
		try{
			document.getElementById('runacreedor').value = acreedores_relacionados[0].runPersona
			var nombre_list = acreedores_relacionados[0].nombrePersona.split(' ')
			if(nombre_list.length == 1){
				document.getElementById('nombresacreedor').value = acreedores_relacionados[0].nombrePersona
			}
			else if (nombre_list.length == 2){
				document.getElementById('nombresacreedor').value = nombre_list[0]
				document.getElementById('apellidopaterno').value = nombre_list[1]
			}
			else{
				var mi_nombre = ""
				for(var i = 0; i < nombre_list.length - 2; i++){
					mi_nombre += nombre_list[i] + " "
				}
				document.getElementById('nombresacreedor').value = mi_nombre
				document.getElementById('apellidopaterno').value = nombre_list[nombre_list.length - 2]
				document.getElementById('apellidomaterno').value = nombre_list[nombre_list.length - 1]
			}		
		
		}
		catch{
			console.log(" CATCH FORM EDICIONINSCRIP")
		}

		try{
			document.getElementById('nombresacreedor').value = acreedores_relacionados[0].nombrePersona
			document.getElementById('runacreedor').value = acreedores_relacionados[0].runPersona
		}
		catch{
			console.log(" CATCH FORM EDICIONINSCRIP")

		}

		try{
			document.getElementById('runacreedor').value = acreedores_relacionados[0].runPersona
			document.getElementById('paisacreedor').value = acreedores_relacionados[0].paisPersona
		}
		catch{
			console.log(" CATCH FORM EDICIONINSCRIP")

		}


		//Constituyentes
		constituyentes_relacionados.forEach((c) => {
			let item = {
                    "Tipo": c.tipoAcreedor,
                    "Id": c.runPersona,
                    "Name": c.nombrePersona}
			this.constituyentes.push(item)	
		})

		//Deudores
		deudores_relacionados.forEach((d) => {
			let item = {
                    "Tipo": d.tipoAcreedor,
                    "Id": d.runPersona,
                    "Name": d.nombrePersona}
			this.deudores.push(item)		
		})


		//Vehiculos
		patentes_relacionadas.forEach((p) => {
			let item = {
                    "patente": p.patente,
                    "rvm": p.inscripcionPrendaRVM,
                    "GoE": p.inscripcionProhibicionGravarEnajenar,
					"estado":p.alzamiento}
			this.vehiculos.push(item)			
		})


		//Monto
		document.getElementById('monto').value = solicitud_relacionada.montoTotal

		}, 2500)
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
            fechaRequirente: '',
            Bienes: [false, false, false, false],
            constituyentes: [],
            deudores: [],
			vehiculos: [],
			contrato: null,
			anexos: null,
			notaria:'',
			rol:localStorage.rol
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
				nombreacreedor = this.nombres
			}else if(this.tipoPersona == "Juridica"){
				runacreedor = this.rut
				nombreacreedor = this.razonsocial
			}else{
				runacreedor = this.id
				nombreacreedor = this.nombres
			}
			console.log(this.Bienes)
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
                100, 
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
                localStorage.esoficina,
				"mi oficina",
				localStorage.mail
                )
			
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
    Monto
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