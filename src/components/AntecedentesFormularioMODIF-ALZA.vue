<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Antecedentes</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    TIPO DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipoDeDocumento" class="form-select"  v-model="tipoDoc"  @change ="changeOption(), setData()">
                        <option selected value="Publico">Público</option>
                        <option value="Privado">Privado</option>
                    </select>
                </div>
            </div>

            <!--V-if Publico-->
            <div class="col row" v-if="option == 'Publico'">
                <div class="titles d-flex justify-content-start" >
                    FECHA DE OTORGAMIENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FOtorgamiento" @change ="setData()">
                </div>
            </div>
            <div class="col row" v-if="option == 'Publico'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE SUSCRIPCIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FSuscripcion" placeholder="FSuscripcion" @change ="setData()">
                </div>
            </div>

            <!--V-if Privado-->

            <div class="col row" v-if="option == 'Privado'" >
                <div class="titles d-flex justify-content-start" >
                    FECHA DE AUTORIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FAutorizacion" placeholder="FAutorizacion" @change ="setData()">
                </div>
            </div>
            <div class="col row" v-if="option == 'Privado'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE PROTOCOLIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FProtocolizacion" placeholder="FProtocolizacion" @change ="setData()">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    N DE REPERTORIO DE NOTARIA
                </div>
                <div class="d-flex justify-content-start">
                    <input type="text" class="nrepertorioleft" placeholder="Folio" @change =" setData()" v-model="RepNotaria">-<input type="text" class="nrepertorioright" placeholder="Ano" @change =" setData()" v-model="anioRepNotaria">
                    
                </div>
            </div>
            
        </div>
        <div class="row right">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    BIENES PRENDADOS
                </div>
                <div class="form-check"  >
                    <input class="form-check-input" type="checkbox" value="ACTIVO FIJO" id="actfijo" disabled :checked="true">
                    <label class="form-check-label d-flex justify-content-start" for="actfijo">ACTIVO FIJO</label>
                    
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="BIENES AGROPECUARIOS"  id="bagropec" disabled :checked="true">
                    <label class="form-check-label d-flex justify-content-start" for="bagropec">BIENES AGROPECUARIOS</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="DERECHIS E INTANGIBLES"  id="derecheint" disabled :checked="true">
                    <label class="form-check-label d-flex justify-content-start" for="derecheint">DERECHIS E INTANGIBLES</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="VEHICULOS"  id="vehic" disabled :checked="false">
                    <label class="form-check-label d-flex justify-content-start" for="vehic">VEHICULOS</label>
                </div>
            </div>
            <div class="col row" v-if="rol == 'FUNCIONARIOOFICINA'">
                <div class="titles d-flex justify-content-start">
                    NOTARIAS
                </div>
                <select id="notaria" class="form-select" v-model="notaria"  @change ="changeOption(), setData()" >
                        
                    <option :value="notaria.organizacion" v-for="(notaria,index) in notariasP" :key="index">{{notaria.organizacion}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                        
                </select>
            </div>
        </div>

       
    </div>
</template>

<script>
import { notarias } from '@/views/Login'
import {db} from "@/main";
import { collection, getDocs, query, where} from "firebase/firestore";

var solicitud_relacionada;

function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS	
	var acreedores_relacionados = []
	var constituyentes_relacionados = []
	var deudores_relacionados = []
	var contratos_relacionados = []
	var archivos_relacionados = []
	var patentes_relacionadas = []
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
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", id_inscripcion))).then((patente_data) => {
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

export default {

    mounted(){
        console.log("ID FORMULARIO")
        console.log(localStorage.idSol)
        buscador_especifico_solicitud(localStorage.idSol, "I")
        setTimeout(() => { 

        console.log("LA SOLICITUD ES:")
        console.log(solicitud_relacionada)
        const a_fijo = document.getElementById("actfijo")
        const b_agrop = document.getElementById("bagropec")
        const d_int = document.getElementById("derecheint")
        const vehic = document.getElementById("vehic")
        console.log("PRENDAS A DAR: " + solicitud_relacionada.activoFijo + "," + solicitud_relacionada.bienesAgropecuarios
        + "," + solicitud_relacionada.derechosIntangibles + "," + solicitud_relacionada.prendaVehiculo)
        a_fijo.checked = solicitud_relacionada.activoFijo
        b_agrop.checked = solicitud_relacionada.bienesAgropecuarios
        d_int.checked = solicitud_relacionada.derechosIntangibles
        vehic.checked = solicitud_relacionada.prendaVehiculo




        }, 1000)

    },

  name: 'AntecedentesFormularioMODIF-ALZA',
  data() {
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            option:'Publico',
            
        }
    },
    props:{
        esInsc:{
            trype: Boolean,
            default: false
        },
        rol: {
            type: String,
            default: "FUNCIONARIONOTARIA",
        },
        notariasP:{
            type: Array,
            default: notarias
        },
        tipoDoc:{
            type: String,
            default: 'Público'
        },
        FOtorgamiento:{
            type: String,
            default: ''
        },
        FSuscripcion:{
            type: String,
            default: ''
        },
        FAutorizacion:{
            type: String,
            default: ''
        },
        FProtocolizacion:{
            type: String,
            default: ''
        },
        RepNotaria:{
            type: String,
            default: ''
        },
        anioRepNotaria:{
            type: String,
            default: ''
        },
        ProhibGravEnajenar:{
            type: Boolean,
            default: false
        },
        notaria:{
            type: String,
            default: ''
        },
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDeDocumento");
            this.option = selectBox.options[selectBox.selectedIndex].value; 

        },
        setData(){
            this.$emit("getNotaria",this.notaria);
            this.$emit("gettipoDoc",this.tipoDoc);
            this.$emit("getFOtorgamiento",this.FOtorgamiento);
            this.$emit("getFSuscripcion",this.FSuscripcion);
            this.$emit("getFAutorizacion",this.FAutorizacion);
            this.$emit("getFProtocolizacion",this.FProtocolizacion);
            this.$emit("getRepNotaria",this.RepNotaria);
            this.$emit("getanioRepNotaria",this.anioRepNotaria);
            this.$emit("getProhibGravEnajenar",this.ProhibGravEnajenar);
            this.$emit("getBienes", [solicitud_relacionada.activoFijo, solicitud_relacionada.bienesAgropecuarios, 
            solicitud_relacionada.derechosIntangibles, solicitud_relacionada.prendaVehiculo])
        }
    }

}
//export{tipoDoc,FOtorgamiento, FSuscripcion, FAutorizacion, FProtocolizacion, RepNotaria, anioRepNotaria, ProhibGravEnajenar}

</script>


<style scoped>

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 10%;
}
.right{
    margin-right: 4%;
    margin-left: 64%;

}
.titleFormulario{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
}

.tamanoTipoDocumento{
    width: 10em;
}

.titles{
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    font-weight: bold;
}

.nrepertorioright{
    margin-left: 1em;
    width:5em
}

.nrepertorioleft{
    margin-right: 1em;
    width:6.5em
}

.Space{
    margin-top: 2em;
}
</style>