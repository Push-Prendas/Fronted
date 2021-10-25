<template>
    <div id="BusquedaAlzamiento">
        <Navbar :username= username />
        <Menu :opciones= opcion />
        <div  class="d-flex justify-content-center contenedor right row">
        <h1 class="title">Solicitud de alzamiento de contrato de prendas</h1>
        <div class="row d-flex justify-content-center item">
            <div class="col-2">
                <div class="titles d-flex justify-content-center">
                    Folio REPERTORIO DE PRENDA
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text"  placeholder="Folio" v-model="folio">
                    
                </div>
            </div>
            <div class="col-2">
                <div class="titles d-flex justify-content-center">
                    Año REPERTORIO
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text" placeholder="Año" v-model="anio">
                    
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center item">
            <div class="col-4">
                <div class="titles d-flex justify-content-center">
                    IDENTIFICADOR DE ALGUN CONSTITUYENTE
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text" class="nrepertorioleft" placeholder="ID DE CONSTITUYENTE" v-model="id">
                    
                </div>
            </div>
        </div>
        <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>
    </div>
</div>

    
</template>

<script>
import {db} from "@/main";
import { collection, getDocs, query, where} from "firebase/firestore";
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {opciones} from "@/views/Dashboard"
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal)
function buscar_y_validar_solicitud(repertorio_prenda, identificador_algun_constituyente){
	//DEVUELVE EL ID DE LA SOLICITUD QUE CUMPLA CON LOS REQUISITOS ANTES MENCIONADOS

	//DEVOLVER ULTIMA VERSION DE LA PRENDA
	getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
		var data = sol_data.docs;
		data.forEach((d) => {
			var my_data = d.data();			
			//console.log(my_data_id)
			//console.log(my_data.numeroRepertorioContratoPrenda + "|" + repertorio_prenda + "-" + year)
			if(my_data.numeroRepertorioContratoPrenda == repertorio_prenda){
				var my_data_id = d.id;
				getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", my_data_id))).then((per_data) => {

					var my_person_data = per_data.docs;
					var ver = false
					my_person_data.forEach((p) => {
						var persona = p.data();
						if (persona.tipoContratante == 1){
							if (identificador_algun_constituyente == persona.runPersona && !ver){
								console.log("SE ENCONTRO UNA SOLICITUD")
								console.log("ID SOLICITUD: " + persona.idInscripcion)
								///FRONTEND PUEDE GUARDAR EL ID DE LA SOLICITUD Y USARLO PARA LLAMAR
								//buscador_especifico_solicitud(persona.idInscripcion,"I")
								var modificaciones_hechas = []
								getDocs(query(collection(db, "Solicitud_Modificacion_Prenda"), where("numero_repertorio_RPsD", "==", repertorio_prenda))).then((mod_data) => {
									var my_mod_data = mod_data.docs;
									my_mod_data.forEach((m) => {
										var my_doc = m.id;
										modificaciones_hechas.push(my_doc)
									})
								})
                                if(modificaciones_hechas.length>0){
                                    return modificaciones_hechas.pop()
                                }else{
                                    return persona.idInscripcion
                                }
								//MODIFICACIONES HECHAS
								///////////////////////////////////////////////
							}
						}
					})
					
				})
			}			
		})
	})
    return -1
}
var id_sol;
export default {
    name: 'BusquedaAlzamiento',
    data() {
        return {
            opcion: opciones,
            username: usernameGlobal,
            folio: '',
            anio: '',
            id:'',
        }
    },
    methods:{
        busqueda(){
            id_sol = buscar_y_validar_solicitud((this.folio+"-"+this.anio).toString(), this.id).toString()
            if(id_sol=='-1'){
                alert("No se encontraron Coincidencias")
            }else{
                this.$router.push({path: `/SolicitudAlzamientoario`})
            }
        }
    },
    components: {
        Menu,
        Navbar
    },
}
export{id_sol}
</script>

<style scoped>
.contenedor{
    margin-top: 2em;
    color: #514BD5;
    width: 80%;

}
.right {
    margin-right: 10px;
    float: right;
    width: 80%;
    height: auto;
}

.item{
    margin-top: 5em;
    margin-bottom: 0em;
    font-family: Roboto;
    font-weight: bold;
}

.button{
    width: 20em;
    margin-top: 2em;
    color: #514BD5;
    font-family: Roboto;
    font-weight: bold;
    background: #CEF1FF;
    border-radius: 15em;
}
</style>