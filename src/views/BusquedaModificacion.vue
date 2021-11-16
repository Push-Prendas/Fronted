<template>
    <div id="BusquedaAlzamiento">
        <Navbar :username= username />
        <Menu :opciones= opcion />
        <div  class="d-flex justify-content-center contenedor right row">
            <h1 class="title">Solicitud de <strong>Modificaión </strong> de Contrato de Prendas</h1>
            <div class="row d-flex justify-content-center item">
                <div class="col-3">
                        FOLIO REP. PRENDA
                        <input type="text"  placeholder="Folio" v-model="folio">
                </div>
                <div class="col-4">
                    <div class="titles d-flex justify-content-center">
                        AÑO REPERTORIO
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="text" placeholder="Año" v-model="anio">
                        
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center item">
                <div class="col-3">
                    <div class="titles d-flex justify-content-center">
                        IDENTIFICADOR DE ALGUN CONSTITUYENTE
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="text" class="nrepertorioleft" placeholder="ID de constituyente" v-model="id">
                        
                    </div>
                </div>
            </div>
            <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>
        </div >
        <div v-if="id_sol2!==-1" class="row d-flex justify-content-center item" id="tipomodific">
            <div class="col row">
                <div class="titles d-flex justify-content-start item">
                    TIPO DE MODIFICACION
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipoDeDocumento" class="form-select"  v-model="tipomodificacion"  @change ="elegirSolicitud()">
                        <option selected value="Alzamiento Parcial">Alzamiento Parcial</option>
                        <option value="Cambio Acreedor">Cambio Acreedor</option>
                        <option  value="Prohibicion de acto">Prohibicion de acto</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
            </div>

        </div>
    </div>

    
</template>

<script>
import {db} from "@/main";
import { collection, getDocs, query, where} from "firebase/firestore";
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'


function buscar_y_validar_solicitud(repertorio_prenda, identificador_algun_constituyente){
	//DEVUELVE EL ID DE LA SOLICITUD QUE CUMPLA CON LOS REQUISITOS ANTES MENCIONADOS

    

	//DEVOLVER ULTIMA VERSION DE LA PRENDA
	getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
		var data = sol_data.docs;
		data.forEach((d) => {
			var my_data = d.data();
			//console.log(my_data_id)
			// console.log(my_data.numeroRepertorioContratoPrenda + "|" + repertorio_prenda + "-" + year)
			if(my_data.numeroRepertorioContratoPrenda == repertorio_prenda){
                console.log("Se encontro numero de repertorio igual")
				var my_data_id = d.id;
                console.log(my_data_id)
				getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", parseInt(my_data_id)))).then((per_data) => {
                    console.log(per_data.docs)

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
								getDocs(query(collection(db, "Solicitud_Modificacion_Prenda"), where("numero_repertorio_notaria", "==", repertorio_prenda))).then((mod_data) => {
									var my_mod_data = mod_data.docs;
									my_mod_data.forEach((m) => {
										var my_doc = m.id;
										modificaciones_hechas.push(my_doc)
									})
                                
								
                                if(modificaciones_hechas.length>0){

                                    console.log("1")
                                    id_sol = modificaciones_hechas.pop()
                                    return 

                                }else{
                                    console.log("2")
                                    id_sol = persona.idInscripcion
                                    return
                                }
                                
                                
                                })

								//MODIFICACIONES HECHAS
								///////////////////////////////////////////////
							}
						}
					})
					
				})
			}			
		})
	}).then(()=>{
        console.log("3")
        id_sol = -1
        //return -1
    })
    
    
}
var id_sol=-1;
export default {
    name: 'BusquedaAlzamiento',
    data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            folio: '',
            anio: '',
            id:'',
            id_sol2: id_sol,
            tipomodificacion: '',
        }
    },
    props:{
    rol: {
        type: String,
        default: localStorage.rol
    }

    },
    methods:{
        busqueda(){
            buscar_y_validar_solicitud((this.folio+"-"+this.anio).toString(), this.id)
            //this.loadUsers(this.folio,this.anio, this.id)
            console.log("DATA")
            console.log(this.folio)
            console.log(this.anio)
            console.log(this.id)
           
            
            console.log("this.id_sol2")
            console.log(this.id_sol2)
            console.log("id_sol")
            console.log(id_sol)
            setTimeout(() => { 
            console.log("TIMEOUT")
            console.log(id_sol)
            this.id_sol2 = id_sol
            if(id_sol==-1){
                alert("No se encontraron Coincidencias")
            }
            },3000)
            
        
        },
        elegirSolicitud(){
            setTimeout(() => { 
            console.log("TIMEOUT")
            console.log(id_sol)
            localStorage.idSol = id_sol
            if(this.tipomodificacion=="Alzamiento Parcial"){
                console.log("Alzamiento Parcial")
                this.id_sol2=-1
                id_sol=-1
                this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/FormularioModificacionALZPARCIAL`, params: {username: localStorage.user, rol: localStorage.rol}})
            }else if(this.tipomodificacion=="Cambio Acreedor"){
                console.log("Cambio Acreedor")
                this.id_sol2=-1
                id_sol=-1
                this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/FormularioModificacionCAMBIOACREEDOR`, params: {username: localStorage.user, rol: localStorage.rol}})
            }else if(this.tipomodificacion=="Prohibicion de acto"){
                console.log("Prohibicion de acto")
                this.id_sol2=-1
                id_sol=-1
                this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/FormularioModificacionPROHIBACTO`, params: {username: localStorage.user, rol: localStorage.rol}})
            }else if(this.tipomodificacion=="Otros"){
                console.log("Otros")
                this.id_sol2=-1
                id_sol=-1
                this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/FormularioModificacionOTRO`, params: {username: localStorage.user, rol: localStorage.rol}})

            }
            },1000)
        }

    },
    components: {
        Menu,
        Navbar
    },
}

setTimeout(() => { 

console.log("ME ID")
console.log(id_sol)
console.log("ME ID")

},1000)

export{id_sol}
</script>

<style scoped>
#tipomodific{
    width: 20rem;
    margin-right: 30%;
    float: right;}
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
    margin-top: 2em;
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