<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <h1 bold>ALZAMIENTO PARCIAL</h1>
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" />
            <AntecedentesFormularioALZA :rol="rol" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria"/> 
            <VehiculoLecturaFormularioALZAMIENTOPARCIAL :tipoSolicitud="Modificacion" :items="items" />
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Bitacora/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" @click="modificar(false)">Guardar</button>
                <button class="col-2 titleButton" @click="modificar(true)">Enviar</button>
            </div>
        </div>
        
        
    </div>
</template>
<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc,updateDoc, doc, query, where} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormularioALZA from '../components/AntecedentesFormularioMODIF-ALZA.vue'
import VehiculoLecturaFormularioALZAMIENTOPARCIAL from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'

import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import Bitacora from '../components/BitacoraFormulario.vue'
import jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
//VALIDA EL NUMERO DE REPERTORIO
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


var my_rpsd;


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

function Subir_archivos_en_oficina(contratos,archivos,id,tipo){//ESTA FUNCION PERMITE GUARDAR LOS ARCHIVOS EN NUESTRA BASE DE DATOS, LO IDEAL ES USARLO PARA OFICINA EN LA VISTA PARA SUBIR SUS ARCHIVOS
	var repertorio = null

    var INSCRIPCION = ""
    var MODIFICACION = ""
    var ALZAMIENTO = ""

    console.log("MOD DATA")
    console.log(id)
    console.log(tipo)

    if(tipo == 0){// INSCRIPCION
        INSCRIPCION = id
    }
    else if(tipo == 1){//MODIFICACION
        MODIFICACION = id
    }
    else if(tipo == 2){//ALZAMIENTO
        ALZAMIENTO = id
    }
    

	getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
		var id_inspeccion = pat_data.docs.length
		var pt = pat_data.docs[id_inspeccion-1]
		repertorio = pt.data().numero_repertorio_RPsD
		
	}).then(() => {

	getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
		var document_id = doc_data.docs.length
		console.log("Entro")
		//const storageRef = ref(storage); 					
		for(var i = 0; i<contratos.length; i++){
			const fileRef = ref(storage,contratos[i].name);
			await uploadBytes(fileRef,contratos[i]);
			const url_file = await getDownloadURL(fileRef)
			setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
				id_alzamiento: INSCRIPCION,
				id_modificacion: MODIFICACION,
				idInscripcion: ALZAMIENTO,
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
				idInscripcion: INSCRIPCION,
				id_alzamiento: ALZAMIENTO,
				id_modificacion: MODIFICACION,
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
	//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
	
    alert("Todo se envio de forma correcta")

	//
})
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
						console.log(archivos_relacionados)
					})
					getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", id_inscripcion))).then((persona_data) => {
						var all_personas = persona_data.docs;
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
						console.log("PERSONAS")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						console.log(deudores_relacionados)
					})
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", id_inscripcion))).then((patente_data) => {
						var all_patentes = patente_data.docs;
						all_patentes.forEach((p) => {
							var my_doc = p.data();
							patentes_relacionadas.push(my_doc)
						})

					}).then(() => {
						console.log("PATENTES")
						console.log(patentes_relacionadas)
					})
				}
			})
		}).then(() => {
			console.log("INSCRIPCION")
			console.log(solicitud_relacionada)
			///INSCRIPCION ENCONTRADA
			///FRONTEND -> MODIFICAR ACA




			///

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

function  inscripcion_modificacion(
    tipo_de_documento,//
    fecha_de_suscripcion,//
    fecha_de_otorgamiento,//
    fecha_de_protocolizacion,//
    fecha_de_autorizacion,//
    notaria="",//
    numero_repertorio_notaria,//
    parrafo_modificacion_generica,//EL PARRAFO ES PURO TEXTO Y FALTA AGREARLO A LAS VISTAS
    tipo_de_persona,//
    nombre_acreedor,//EL NOMBRE DEL ACREEDOR LE CORRESPONDE EL GRUPO DE SERVICIOS
    rut_acreedor,//""
    nombre_requirente="",//EL NOMBRE DEL REQUIRENTE  LE CORRESPONDE EL GRUPO DE SERVICIOS
    run_requiriente="",//
    estadoPrimario,//
    contratos=[],//
    archivos=[],//
    activo_fijo,//
    bienes_agropecuarios,//
    derechos_intangibles,//
    vehiculos,//EL VEHICULOS LE CORRESPONDE EL GRUPO DE SERVICIOS Y HAY BUSCAR LOS VEHICULOS QUE LE PERTENECE A LA MODIFICACION
    GrabarEnagenar,//
    correo_requirente="",//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
    fecha_requirente="",//
    send_flag,
    id_inscripcion,
    patentesAlzparcial
    ){


        



        var validate = true;


        //FILTRO
        //PARA FILTRAR EL AÑO SE PUEDE PONER UN MINIMO Y MAXIMO EN EL INPUT DE FECHAS


        console.log(numero_repertorio_notaria)
        if(numero_repertorio_notaria.length != 9 && !validate_number(numero_repertorio_notaria)){

            validate = false
            console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
            //FRONTEND => MOSTRAR ERROR
            alert("Numero repertorio notario formato incorrecto")
            //////////////////////////
        }




        if(validate){
        //SUBIR O GUARDAR LA SOLICITUD
        var ids = null
        getDocs(collection(db,"Solicitud_Modificacion_Prenda")).then((pat_data) => {
            ids = pat_data.docs.length;
            console.log(ids)
            console.log("submit")
            console.log(activo_fijo)
            console.log(bienes_agropecuarios)
            console.log(derechos_intangibles)
            console.log(vehiculos )
            
        }).then(() => {
            setDoc(doc(collection(db,"Solicitud_Modificacion_Prenda"),ids.toString()),{
                privacidadDocumento: tipo_de_documento,
                fechaSuscripcion: fecha_de_suscripcion,
                fechaOtorgamientoEscritura: fecha_de_otorgamiento,
                fechaProtocolizacionContratoPrivado: fecha_de_protocolizacion,
                fechaAutorizacionContratoPrivado: fecha_de_autorizacion,
                numeroRepertorioNotario: numero_repertorio_notaria,
                parrafo_modificacion_generica: parrafo_modificacion_generica,
                tipo_de_persona: tipo_de_persona,
                nombre_acreedor: nombre_acreedor,
                rut_acreedor: rut_acreedor,
                nombreRequiriente: nombre_requirente,
                runRequiriente: run_requiriente,
                estadoPrimario: estadoPrimario,
                estadoSecundario: 0,
                activoFijo: activo_fijo,
                bienesAgropecuarios: bienes_agropecuarios,
                derechosIntangibles: derechos_intangibles,
                prendaVehiculo: vehiculos,
                nombre_notaria: notaria,
                prohibicionGravarEnajenar: GrabarEnagenar,
                correoRequiriente: correo_requirente,
                fechaRequirente: fecha_requirente,
                revisorAsignado :-1,
                firma:false,
                tipoModificacion:1,
                usuarioCreador: localStorage.mail,
                id_transaccion: -1,
                id_inscripcion: id_inscripcion,
                patentesAlzparcial: patentesAlzparcial,
            }).then(() => {
            //PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
            if(send_flag){   
            if (localStorage.rol == "FUNCIONARIOOFICINA"){
                modifySecondaryStatus("M",ids.toString(),1,localStorage.mail)
                setTimeout(() => {
                    var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4033/api/checkout/pay'
                    var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd + '", "monto":' + (parseInt(preciosGlobal[2]["precio"]) +parseInt(costoTotalAutos)) +'}' //CORREGIR ESTA CUESTION
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
                            modifySecondaryStatus("M",ids.toString(),2,localStorage.mail)
                            this.redirect()					
                        })
                    })
                }, 1500);
            }
            
            alert("Solicitud Enviada Exitosamente")	

            }else{
                alert("Solicitud Guardada Exitosamente")
            }
	
        })
            
            console.log("entros")
            if(estadoPrimario == 1){// 1 significa que esta en revision en la notaria

                Subir_archivos_en_oficina(contratos,archivos,ids,1)
                console.log("enviado")
            }
        })
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

var autoGlobal = []
function load_vehicles(id_inscripcion){
    autoGlobal = []
    getDocs(collection(db,"Patente_por_Inscripcion")).then((car_Data) => { 
		var my_cars = car_Data.docs
		my_cars.forEach((p) => {
			var p_data = p.data();
            if(p_data.idInscripcion == id_inscripcion)
                autoGlobal.push(p_data)
		})
        console.log("AUTOS: ")
		console.log(autoGlobal)
	})
}


var repertorio_contrato_global;
function load_rpsd(id_inscripcion){
    getDocs(collection(db,"Solicitud_Inscripcion_Prenda")).then((info_Data) => { 
        var myid = info_Data.docs
        myid.forEach((p) => {
            var p_data = p.data();
            console.log(p.id)
            if(p.id == id_inscripcion){
                repertorio_contrato_global = p_data.numeroRepertorioContratoPrenda
            }
        })
    })
}

var solicitudPendiente = false // se verifica se existen solicitudes pendientes de autos en el RVM

function pendiente(){
    solicitudPendiente = false 
}

var costoTotalAutos = 0
export default {
  name: 'formularioModificacion',
  mounted(){
      pendiente()
      console.log("ROL")
      console.log(localStorage.rol)
      buscador_especifico_solicitud(localStorage.mod_want,"I")
      see_prices()
      load_vehicles(localStorage.idSol)
      load_rpsd(localStorage.idSol)
      setTimeout(() => {
        this.items = []
        const monto = document.getElementById('monto')
        costoTotalAutos = 0
        autoGlobal.forEach((data) => {
        costoTotalAutos += parseInt(preciosGlobal[9]["precio"])
        var alzamiento = "No Alzado"
        if(data.alzamiento){
            alzamiento = "Alzado"
        }
        let item = {
            "patente": data.patente,
            "rvm": data.inscripcionPrendaRVM,
            "GoE": data.inscripcionProhibicionGravarEnajenar,
            "estado": alzamiento,
            "costo": preciosGlobal[9]["precio"]}
        this.items.push(item);
        })

        
        load_rpsd(localStorage.idSol)
        var oReq = new XMLHttpRequest();
        var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/API/vehicles/currentAnotations?numero_repertorio=' + repertorio_contrato_global
        oReq.open("GET", url);
        oReq.send();
        oReq.onload = ()=>{
                if(oReq.status == 200){
                    var reqResult = JSON.parse(oReq.response);
                    solicitudPendiente = false
                    reqResult.vehicles.forEach((ve)=>{
                        this.items.forEach((data) => {
                            if(data.patente==ve[0]){
                                if(ve[1]){
                                    data.estado = "Alzado"
                                }else{
                                    data.estado = "No Alzado"
                                }
                            }
                        })
                    })
                }           
        }
        

        monto.innerHTML = "$" + (parseInt(preciosGlobal[2]["precio"]) + parseInt(costoTotalAutos) )
        const monto2 = document.getElementById('monto2')
        monto2.innerHTML = "$" + parseInt(preciosGlobal[2]["precio"])//ACTUACION
		const monto3 = document.getElementById('monto3')
        monto3.innerHTML = "$" + parseInt(costoTotalAutos)////ANOTACION

      },1000)
      
      
  },
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
            fechaRequirente: this.currentDateTime(),
            Bienes: [],
            constituyentes: [{}],
            deudores: [{}],
			vehiculos: [{}],
			contrato: null,
			anexos: null,
        }
    },

  props:{
      rol: {
          type: String,
          default: localStorage.rol
      },
    items:{
            type: Array,
            default: new Array,
        },

    },
  components: {
    AntecedentesFormularioALZA,
    VehiculoLecturaFormularioALZAMIENTOPARCIAL,
    ContratoFormulario,
    RequirenteFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar,
    Bitacora
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
        downloadWithCSS() {
            const doc = new jsPDF();
            /** WITH CSS */
            var canvasElement = document.createElement('canvas');
                html2canvas(this.$refs.content,{scale:1}, { canvas: canvasElement 
                }).then(function (canvas) {
                const img = canvas.toDataURL("image/jpeg",1);
                doc.addImage(img,'JPEG',20,20,120,120);
                doc.save("ModificacionPrenda.pdf");
            });
        },
        modificar(flag){//agregar flags
            var est_p = 0
            if(flag){
               if(localStorage.rol == "FUNCIONARIONOTARIA"){
                   est_p = 1
               } 
               else{
                   est_p = 3
               }
            }

            var patentesAlzparcial = []
            for (let index = 0; index < this.items.length; index++) {
                if (document.getElementById(index.toString()+'P').checked == true){
                    patentesAlzparcial.push(this.items[index])
                }	
            }

            if(!solicitudPendiente){
                inscripcion_modificacion(
                this.tipoDoc.toString(),//
                this.FSuscripcion.toString(),//
                this.FOtorgamiento.toString(),//
                this.FProtocolizacion.toString(),//
                this.FAutorizacion.toString(),//
                this.notaria,//
                (this.RepNotaria+"-"+this.anioRepNotaria).toString(),////
                "parrafo_modificacion_generica",//EL PARRAFO ES PURO TEXTO Y FALTA AGREARLO A LAS VISTAS
                this.tipoPersona,//
                this.nombres,//EL NOMBRE DEL ACREEDOR LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.run,//
                this.nombreRequirente,//EL NOMBRE DEL REQUIRENTE  LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.nDocRequirente,//
                est_p,
                this.contrato,//
                this.anexos, 
                this.Bienes[0],
                this.Bienes[1], 
                this.Bienes[2], 
                this.Bienes[3],//EL VEHICULOS LE CORRESPONDE EL GRUPO DE SERVICIOS Y HAY BUSCAR LOS VEHICULOS QUE LE PERTENECE A LA MODIFICACION
                this.ProhibGravEnajenar,//
                this.correoRequirente,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
                this.fechaRequirente,//,
                flag,
                localStorage.idSol,
                patentesAlzparcial
            )
                this.downloadWithCSS()
                this.$router.push({path: `/Dashboard/${localStorage.rol}/${localStorage.user}/MisSolicitudes`, params: {username: localStorage.user, rol: localStorage.rol}})
            }else{
                alert("Existen patentes con solicitudes pendientes")
                console.log("NO ESTA PERMITIDO")
            }
  }
  
}
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