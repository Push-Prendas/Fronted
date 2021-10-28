<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <h1> Revisión de documentos </h1>
            <AntecedentesFormulario :rol="rol" />
            <VehiculosLectura :tipoSolicitud="Alzamiento" />
            <!-- FALTA COLOCALAR LOS ARCHIVOS -->
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Rechazar</button>
                <button class="col-2 titleButton">Firmar FEA</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import VehiculosLectura from '../components/VehiculoLecturaFormulario.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {db} from "@/main";
import { collection, getDocs,query,where} from "firebase/firestore";



var total_items = []
function add(patente,rvm,GoE,estado) {
        let item = {
            "patente": patente,
            "rvm": rvm,
            "GoE": GoE,
            "estado": estado}

        total_items.push(item);
    }
var solicitud_relacionada;
var patentes_relacionadas = []

function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS

    
    var acreedores_relacionados = []
    var constituyentes_relacionados = []
    var deudores_relacionados = []
    var contratos_relacionados = []
    var archivos_relacionados = []	
    
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
                                add(data.patente,data.inscripcionPrendaRVM,data.inscripcionProhibicionGravarEnajenar,data.alzamiento)
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

console.log("MY OPTS")
//console.log(localStorage.my_opts.split(','))
export default {
  mounted() {
      console.log("MOUNT")
      console.log(localStorage.id_revisar)

      buscador_especifico_solicitud(localStorage.id_revisar, localStorage.tipo_revisar)
    setTimeout(() => { 

            console.log("SOLICITUD2")
            console.log(solicitud_relacionada)	

            var tipo = document.getElementById("tipoDeDocumento");

            tipo.value = solicitud_relacionada.privacidadDocumento


            var now = new Date();

            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);

            var today = now.getFullYear()+"-"+(month)+"-"+(day);
			console.log(today)

            if(solicitud_relacionada.privacidadDocumento == "publico"){
                var FechaOtorgamiento =  document.getElementById("FechaOtorgamiento");
                var FechaSubscripcion = document.getElementById("FechaSubscripcion");


                FechaOtorgamiento.value = solicitud_relacionada.fechaOtorgamientoEscritura


                FechaSubscripcion.value = solicitud_relacionada.fechaSuscripcion


                

            }
            else if(solicitud_relacionada.privacidadDocumento == "privado"){
                var FechaAutorizacion = document.getElementById("FechaAutorizacion");
                var FechaProtocolizacion = document.getElementById("FechaProtocolizacion");
				console.log(FechaAutorizacion, FechaProtocolizacion)
            }


            var check = document.getElementById("defaultCheck1")

            check.checked =  solicitud_relacionada.prohibicionGravarEnajenar

            



            


            var numero_repertorio = solicitud_relacionada.numeroRepertorioNotario.split('-')


            var left = document.querySelector(".nrepertorioleft");

            var right = document.querySelector(".nrepertorioright");

            left.value = numero_repertorio[0]
            right.value = numero_repertorio[1]

            console.log("PATENTE")

            console.log(patentes_relacionadas)

            //console.log(fecha)
          
           }, 2000)
  },
  name: 'RevisionDoc',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            rol: localStorage.rol
        }
    },
  components: {
    AntecedentesFormulario,
    VehiculosLectura,
    Menu,
    Navbar,
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