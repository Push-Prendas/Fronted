<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div id="contenedor" >
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" @getnombreRequirente="getnombreRequirente" 
			@getrutRequirente="getrutRequirente" @getCorreoRequirente="getCorreoRequirente"
			@getFechaRequirente="getFechaRequirente" @change="getPatentes()"/>
            <AntecedentesFormularioALZA :rol="rol" :esInsc="false" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria" @change="getPatentes()"/>
            <VehiculosFormulario :tipoSolicitud="Alzamiento" :items="patentes" />
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Bitacora/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" @click="alzar(false)">Guardar</button>
                <button class="col-2 titleButton" @click="alzar(true)">Enviar</button>
            </div>
        </div>
        
    </div>
</template>

<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc,updateDoc, doc,  query, where} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormularioALZA from '../components/AntecedentesFormularioMODIF-ALZA.vue'
import VehiculosFormulario from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import Bitacora from '../components/BitacoraFormulario.vue'
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

var my_rpsd

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
			fechaCambio: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
		})
	})
	
}


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

function Subir_archivos_en_oficina(contratos,archivos,id,tipo){//ESTA FUNCION PERMITE GUARDAR LOS ARCHIVOS EN NUESTRA BASE DE DATOS, LO IDEAL ES USARLO PARA OFICINA EN LA VISTA PARA SUBIR SUS ARCHIVOS
	var repertorio = null

    var INSCRIPCION = ""
    var MODIFICACION = ""
    var ALZAMIENTO = ""

    console.log("LOL FILES")

    if(tipo == 0){// INSCRIPCION
        INSCRIPCION = id
    }
    else if(tipo == 1){//MODIFICACION
        MODIFICACION = id
    }
    else if(tipo == 2){//ALZAMIENTO
        ALZAMIENTO = id
    }

    console.log("INSCRIPCION: " + INSCRIPCION)
    console.log("MODIFICACION: " + MODIFICACION)
    console.log("ALZAMIENTO: " + ALZAMIENTO)

	getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
		var id_inspeccion = pat_data.docs.length
		var pt = pat_data.docs[id_inspeccion-1]
		repertorio = pt.data().numero_repertorio_RPsD
		
	}).then(() => {

	getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
		var document_id = doc_data.docs.length
		console.log("Entro")
        console.log(contratos.length)
		//const storageRef = ref(storage); 					
		for(var i = 0; i<contratos.length; i++){
			const fileRef = ref(storage,contratos[i].name);
			await uploadBytes(fileRef,contratos[i]);
			const url_file = await getDownloadURL(fileRef)
            console.log("CONTRATO")
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
            console.log("ADJUNTO")
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
	alert("ALZAMIENTO SE ENVIO DE FORMA CORRECTA")


	//
})



}

function alzamiento(
    numero_requiriente,//
    tipo_de_documento,//
    fecha_de_otorgamiento,//
    fecha_de_suscripcion,//
    fecha_de_autorizacion,//
    fecha_de_protocolizacion,//
    notaria,//
    numero_repertorio_notaria,//
    nombre_requirente,//EL NOMBRE DEL REQUIRENTE LE CORRESPONDE EL GRUPO DE SERVICIOS
    correo,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
    fecha,//
    contratos=[],//
    archivos=[],//
    activo_fijo,//
    bienes_agropecuarios,//
    derechos_intangibles,
    vehiculos,
    año_repertorio_RPsD,//AGREGADO RECIENTMENTE FALTA PONER EN LA VISTA
    numero_repertorio_RPsD,
    send_flag,
    rol_oficina=false,
    name_oficina
    //AGREGADO RECIENTMENTE FALTA PONER EN LA VISTA
    ){
        var validate = true
        console.log("VERYFING...")
        console.log(name_oficina)
        

        //FILTRO
        //PARA FILTRAR EL AÑO SE PUEDE PONER UN MINIMO Y MAXIMO EN EL INPUT DE FECHAS

        /*
        var run_req_code = numero_requiriente.split('-');
        if(!validate_run(run_req_code[0],run_req_code[1])){
            validate = false
            console.log("RUN REQUIRIENTE INVALIDO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }*/
            
        //SE VERIFICA EL NUMERO DE REPERTORIO DONDE SU LARGO TIENE QUE SER 9
        console.log(numero_repertorio_notaria)
        if(numero_repertorio_notaria.length != 9 && !validate_number(numero_repertorio_notaria)){

            validate = false
            console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
            //FRONTEND => MOSTRAR ERROR
            alert("Numero repertorio notaria en formato incorrecto")
            //////////////////////////
        }

    if(validate){
    var estado_inicial = 0 //GUARDADO
    console.log("validate")
    if(send_flag){ ///VERIFICAR SI VIENE O NO DE OFICINA
        if(rol_oficina)
            estado_inicial = 3 //ENVIADO DESDE OFICINA
        else
            estado_inicial = 1 //ENVIADO DESDE NOTARIA

    
    }

    console.log("MY DATA")
    console.log(activo_fijo)
    console.log(estado_inicial)

    var ids = null
    getDocs(collection(db,"Solicitud_Alzamiento_Prenda")).then((pat_data) => {


        ids = pat_data.docs.length;


    }).then(() => {

        setDoc(doc(collection(db,"Solicitud_Alzamiento_Prenda"),localStorage.id_revisar.toString()),{//se le hace un camino extra, no pude acortar, pero es con el mismo id asi que no deberia haber problemas
            privacidadDocumento: tipo_de_documento,
            fechaOtorgamientoEscritura: fecha_de_otorgamiento,
            fechaSuscripcion: fecha_de_suscripcion,
            fecha_de_autorizacion: fecha_de_autorizacion,
            fechaProtocolizacionContratoPrivado: fecha_de_protocolizacion,
            nombre_notaria: notaria,
            numeroRepertorioNotario: numero_repertorio_notaria,
            runRequiriente: numero_requiriente,
            nombreRequiriente: nombre_requirente,
            correoRequiriente: correo,
            fechaRequirente: fecha,
            estadoPrimario: estado_inicial,
            estadoSecundario: 0,
            activoFijo: activo_fijo,
            bienesAgropecuarios: bienes_agropecuarios,
            prendaVehiculo: vehiculos,
            derechosIntangibles: derechos_intangibles,
            año_repertorio_RPsD: año_repertorio_RPsD,
            numeroRepertorioContratoPrenda: numero_repertorio_RPsD,
            oficina: "mi oficina",
            firma:false,
            usuarioCreador: localStorage.mail



    }).then(() => {
        console.log("PAGANDO EN CAJA")
		//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
        if (rol_oficina){
            modifySecondaryStatus("A",ids.toString(),1,localStorage.mail)
            setTimeout(() => {
                var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4033/api/checkout/pay'
                var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd + '", "monto":' + (parseInt(preciosGlobal[1]["precio"]) +  parseInt(costoTotalAutos)) +'}' //CORREGIR ESTA CUESTION
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
                        modifySecondaryStatus("A",ids.toString(),2,localStorage.mail)
                        this.redirect()					
                    })
                })
            }, 1500);
        }		
    })
    if(estado_inicial == 1){// 1 significa que esta en revision en la notaria

        Subir_archivos_en_oficina(contratos,archivos, ids.toString(), 2)   
    }
    })

    }
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

var costoTotalAutos = 0

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

export default {
 mounted(){
        console.log("STARTER DATA")
        console.log(localStorage.id_revisar)
        console.log(localStorage.tipo_revisar)
        pendiente()
        buscador_especifico_solicitud(localStorage.id_revisar,localStorage.tipo_revisar)
        load_rpsd(localStorage.idSol)
        see_prices()
        load_vehicles(localStorage.idSol)
      setTimeout(() => {

        this.items = []
        console.log(autoGlobal)
        const monto = document.getElementById('monto')


        console.log("Enviando REQUEST")

        costoTotalAutos = 0

        autoGlobal.forEach((data) => {

        costoTotalAutos += parseInt(preciosGlobal[9]["precio"]) + parseInt(preciosGlobal[8]["precio"])

        if(data.inscripcionPrendaRVM == true){

        var oReq = new XMLHttpRequest();
        var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/API/vehicles/licensePlates?patente=' + data.patente
        oReq.open("GET", url);
        oReq.send();
        oReq.onload = ()=>{
                if(oReq.status == 200){

                    var reqResult = JSON.parse(oReq.response);
                    console.log("MENSAJE RECIVIDO")
                    console.log(reqResult)
                    solicitudPendiente = false
                    reqResult.solicitudes.forEach((mensaje)=>{

                        console.log(mensaje.numero_repertorio)
                        console.log((repertorio_contrato_global.split("-")[1] + "-" + repertorio_contrato_global.split("-")[0]))

                        if(mensaje.numero_repertorio == (repertorio_contrato_global.split("-")[1] + "-" + repertorio_contrato_global.split("-")[0])){
                                console.log("ENTRO EN PENDIENTE")
                                solicitudPendiente = true
                         }

                    })
                    console.log("LARGO")
                    console.log(reqResult.solicitudes.length)
                    console.log(solicitudPendiente)


                }
            
        }


        }


        let item = {
            "patente": data.patente,
            "rvm": data.inscripcionPrendaRVM,
            "GoE": data.inscripcionProhibicionGravarEnajenar,
            "costo": "-"}
        this.items.push(item);




        })


        monto.innerHTML = "$" + (parseInt(preciosGlobal[1]["precio"]) + parseInt(costoTotalAutos) )






      }, 1500);
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
            fechaRequirente: this.currentDateTime(),
            Bienes: [],
            constituyentes: [],
            deudores: [],
			vehiculos: [],
			contrato: null,
			anexos: null,
			notaria:'',
        }
    },
  props: {
        rol :  {
            type: String,
            default: localStorage.rol
        },

  },
  components: {
    AntecedentesFormularioALZA,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar,
    RequirenteFormulario,
    Bitacora
  },
  methods:{
       
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
        alzar(flags){
            console.log("MIS BIENES")
            console.log(this.Bienes[0])
            console.log(this.Bienes[1])
            console.log(this.Bienes[2])
            console.log(this.Bienes[3])

            if(!solicitudPendiente){
            alzamiento(
                this.nDocRequirente,//
                this.tipoDoc.toString(),//
                this.FOtorgamiento.toString(),//
                this.FSuscripcion.toString(),//
                this.FAutorizacion.toString(),//
                this.FProtocolizacion.toString(),//
                this.notaria,//
                (this.RepNotaria+"-"+this.anioRepNotaria).toString(),////
                this.nombreRequirente,//EL NOMBRE DEL REQUIRENTE LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.correoRequirente,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
                this.fechaRequirente,//
                this.contrato,//
                this.anexos, 
                this.Bienes[0],
                this.Bienes[1], 
                this.Bienes[2], 
                this.Bienes[3],
                -1,-1,
                flags,
                localStorage.rol == 'FUNCIONARIOOFICINA',
                "Mi oficina"
            )
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
    margin-left: 18%;
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