<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <h1 style="color:#514BD5" class="d-flex justify-content-center">Revisión de documentos</h1>
            <AntecedentesFormulario :rol="rol" />
            <AcreedorLectura />
			<ConstituyenteLectura :items="items_Constituyentes" :modo="'leer'"/>
			<DeudoresLectura :items="items_Deudores" :modo="'leer'"/>
            <VehiculosLectura :tipoSolicitud="'RevisionDoc'" :items="total_itemsVehiculos" />
			<ArchivosLectura :items="items_Contrato" :itemsAnexos="items_Anexos" />
            <!-- FALTA COLOCALAR LOS ARCHIVOS -->
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton"  @click="rechazar()">Rechazar</button>
                <button class="col-2 titleButton" @click="aceptar()">Firmar FEA</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import VehiculosLectura from '../components/VehiculoLecturaFormulario.vue'
import ConstituyenteLectura from '../components/ConstituyentesFormulario.vue'
import AcreedorLectura from '../components/AcreedorFormulario.vue'
import DeudoresLectura from '../components/DeudoresFormulario.vue'
import ArchivosLectura from '../components/ArchivosLectura.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {db} from "@/main";

import { collection, getDocs, updateDoc,query,where, doc} from "firebase/firestore";


var username = localStorage.user
const VOLVER= "/Dashboard/" + localStorage.rol + "/" + username + "/MisSolicitudes"



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
		//ESTANDARIZAR ESTADO	
		if (item.estado == false) item.estado = "Sin alzar"
		else item.estado = "Alzado";
		//ESTANDARIZAR GRAVAR O ENAJENAR
		if (item.GoE == false) item.GoE = "No"
		else item.GoE = "Si"
		//ESTANDARIZAR RVM
		if (item.rvm == false) item.rvm = "No"
		else item.rvm ="Si"
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
var solicitud_relacionada;
var solicitud_relacionada_id;
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
					solicitud_relacionada_id = doc.id
			
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


//console.log(localStorage.my_opts.split(','))
export default {
  mounted() {
      this.clean()
    console.log("MOUNT hh")
    console.log(localStorage.id_judge+" "+localStorage.tipo_judge)

    buscador_especifico_solicitud(parseInt(localStorage.id_judge), localStorage.tipo_judge)
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
			console.log(this.items_Deudores)
			//VEHICULOS
			this.total_itemsVehiculos = total_items

			//CONTRATO
			this.items_Contrato = total_itemContraro

			//ANEXOS
			this.items_Anexos = total_itemsAnexos
           }, 2000)
  },
  name: 'RevisionDocNotario',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            rol: localStorage.rol,
            total_itemsVehiculos : new Array,
			items_Constituyentes : new Array,
			items_Deudores: new Array,
			items_Contrato: new Array,
			items_Anexos: new Array
        }
    },
  components: {
    AntecedentesFormulario,
    VehiculosLectura,
	ConstituyenteLectura,
	DeudoresLectura,
	ArchivosLectura,
	AcreedorLectura,
    Menu,
    Navbar,
  },
  methods:{
    aceptar(){

    if(localStorage.tipo_revisar.toString() == "I"){

            updateDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),solicitud_relacionada_id.toString()),{
            firma: true,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })



    }
    else if(localStorage.tipo_revisar.toString() == "M"){

            updateDoc(doc(collection(db, "Solicitud_Modificacion_Prenda"),solicitud_relacionada_id.toString()),{
            firma: true,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })

    }

    else if(localStorage.tipo_revisar.toString() == "A"){

            updateDoc(doc(collection(db, "Solicitud_Alzamiento_Prenda"),solicitud_relacionada_id.toString()),{
            firma: true,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })

    }


    },

    rechazar(){



    if(localStorage.tipo_revisar.toString() == "I"){
		alert("INSCRIPCION")

            updateDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),solicitud_relacionada_id.toString()),{
            estadoPrimario: 2,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })

    }
    else if(localStorage.tipo_revisar.toString() == "M"){

            updateDoc(doc(collection(db, "Solicitud_Modificacion_Prenda"),solicitud_relacionada_id.toString()),{
            estadoPrimario: 2,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })

    }

    else if(localStorage.tipo_revisar.toString() == "A"){

            updateDoc(doc(collection(db, "Solicitud_Alzamiento_Prenda"),solicitud_relacionada_id.toString()),{
            estadoPrimario: 2,
        }).then(() => {
            this.$router.push({path: VOLVER})
        })

    }


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
}
console.log(localStorage.my_opts)
</script>

<style scoped>


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

.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}
</style>