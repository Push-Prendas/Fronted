<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col" @click="getPatentes()" >Vehiculos  </div > 
            <b-button v-b-modal.modal-2 class="col buttonAdd">+</b-button>

            <b-modal id="modal-2"  hide-footer>
                <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
                <div class="row">
                    <div class="d-flex justify-content-center titleModal">Vehiculos </div> 
                    <div class="row">
                        <div class="col row">
                            <div class="titles d-flex justify-content-start" >
                                PATENTE
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="textPatente" type="text" v-model="patente" @input="patente=patente.toUpperCase()">
                            </div>
                        </div>
                        <div class="d-flex justify-content-center SpaceItems">
                            <div class="form-check ">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheckrvm" v-model="rvm">
                                <label class="form-check-label d-flex align-items-start" for="defaultCheckrvm">
                                    RVM
                                </label>
                            </div>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-center SpaceItems" v-if="this.rvm">
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheckGE" v-model="GoE">
                            <label class="form-check-label d-flex align-items-start" for="defaultCheckGE">
                                PROHIBICIÓN DE GRAVAR O ENAJENAR
                            </label>
                        </div>
                    </div>
                </div>
                
                <b-button id="ADDVEHICULO" @click="add(), setData()">Agregar Vehículo</b-button>
            </b-modal>   
        </div>
        <table class="table" >
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">PATENTE</th>
                <th scope="col">RVM</th>
                <th scope="col">GRAVAR/ENAJENAR</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" id="tablapatentesinscripcion" :key="index">
                <td>{{item.patente}}</td>
                <td >
                    <div v-if="item.rvm == true">SI</div>
                    <div v-if="item.rvm == false">NO</div>
                </td>
                <td >
                    <div v-if="item.GoE == true">GRAVAR</div>
                    <div v-if="item.GoE == false">NO</div>
                </td>
                <td><p type="button" @click="borrar(index), setData()">X</p></td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
import {db} from "@/main";
import { collection, getDocs, query, where} from "firebase/firestore";
function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS
	var solicitud_relacionada;
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
  mounted(){
      see_prices()
      this.items.length=0;
  },
  name: 'AcreedorFormularios',
  data() {
        return {
            option:'Natural',

        }
    },props:{

        items:{
            type: Array,
            default: new Array,
        },
		patente:{
            type: String,
            default: ''
        },
		GoE:{
            type: Boolean,
            default: false,
        },
		rvm:{
            type: Boolean,
            default: false
        },
		estado:{
            type: String,
            default: ''
        },

    },
    methods:{
        getPatentes(){
            //console.log("DATA")
            buscador_especifico_solicitud(12,'I')
            //this.items=patentes_relacionadas
        
        },
        borrar(index){
            this.items.splice(index,1);

            const monto = document.getElementById('monto')
            var valor1 = parseInt(monto.innerHTML.substring(1))
            valor1 -= preciosGlobal[7]["precio"]
            valor1 -= preciosGlobal[8]["precio"]
            monto.innerHTML = "$" + valor1
            const monto3 = document.getElementById('monto3')
            var valor2 = parseInt(monto3.innerHTML.substring(1))
            valor2 -= (preciosGlobal[7]["precio"] + preciosGlobal[8]["precio"])
            monto3.innerHTML = "$" + valor2
            
        },
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },
        add() {
            if(this.rvm){
                var patValida = false
                var patPerteneceaContr = false
                var partSinProces = false 

                var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/API/vehicles/licensePlates'
                var params = '{"patente": "' + this.patente + '"}'
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: params
                }).then((response)=>{
                    response.json().then((reqResult) => {
                        if(reqResult.valid){
                            //alert(reqResult.valid)
                            patValida=true
                            console.log(patValida)
                            
                        }
                        else{
                            alert("PATENTE INVALIDA o este vehiculo no esta registrado en el RVM")
                        }
                    })
                })
                url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/api/vehicles/check_ownership'
                var persons = localStorage.constituyentes
                console.log(typeof(persons.split(',')))
                console.log(persons.split(','))
                params = '{"plate": "' + this.patente + '","owners": [' + persons.split(',') + ']}'
                console.log(params)
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: params
                    
                }).then((response)=>{
                    console.log(response)
                    response.json().then((reqResult) => {
                        console.log(reqResult)
                        if(reqResult.valid){
                            //alert(reqResult.valid)
                            patPerteneceaContr = true 
                            console.log(patPerteneceaContr)
                        }
                        else{
                            alert("Patente NO pertenece a constituyentes")
                        }
                    })
                })
                url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/API/vehicles/licensePlates?patente='+this.patente+''
                params = '{}'
                console.log(params)
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    
                }).then((response)=>{
                    console.log(response)
                    response.json().then((reqResult) => {
                        console.log(reqResult)
                        if(reqResult.success){
                            //alert(reqResult.success)
                            partSinProces = true 
                            console.log(partSinProces)
                        }
                        else{
                            alert("La Patente tiene Solicitudes pendientes")
                        }
                    })
                })

                console.log(patValida, patPerteneceaContr , partSinProces)
                setTimeout(() => {
                    if(patValida && patPerteneceaContr && partSinProces){
                    console.log("entre...09")
                    let item = {
                                    "patente": this.patente,
                                    "rvm": this.rvm,
                                    "GoE": this.GoE}
                                this.items.push(item);  
                    const monto = document.getElementById('monto')
                    var valor1 = parseInt(monto.innerHTML.substring(1))
                    valor1 += preciosGlobal[7]["precio"]
                    valor1 += preciosGlobal[8]["precio"]
                    monto.innerHTML = "$" + valor1
                    const monto3 = document.getElementById('monto3')
                    console.log("MY MONTO")
                console.log(monto3.innerHTML.substring(1))
                    var valor2 = parseInt(monto3.innerHTML.substring(1))
                    valor2 += (preciosGlobal[7]["precio"] + preciosGlobal[8]["precio"])
                    monto3.innerHTML = "$" + valor2

      



                    this.patente ="";
                    this.rvm =false;
                    this.GoE=false;
                }
                }, 1500);
                
                
            }
            else{
                let item = {
                    "patente": this.patente,
                    "rvm": this.rvm,
                    "GoE": this.GoE}

                this.items.push(item);
                const monto = document.getElementById('monto')

                var valor = parseInt(monto.innerHTML.substring(1))
                valor += preciosGlobal[7]["precio"]
                monto.innerHTML = "$" + valor
                const monto3 = document.getElementById('monto3')
                console.log("MY MONTO")
                console.log(monto3.innerHTML.substring(1))
                var valor2 = parseInt(monto3.innerHTML.substring(1))
                valor2 += (preciosGlobal[7]["precio"] + preciosGlobal[8]["precio"])
                monto3.innerHTML = "$" + valor2
                
                this.patente ="";
                this.rvm =false;
                this.GoE=false;
            }            
        },
        clean(){
            console.log("limpiar campos aqui")

        },
        setData(){
            this.$emit("getVehiculos",this.items);
        }
    }

}

</script>


<style scoped>

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
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

.titleModal{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    margin-bottom: 2em;
}
.tamanoTipoDocumento{
    width: 10em;
}

.titles{
    margin-bottom: 0.5em;
    margin-top: 1em;
    font-weight: bold;
}

.encabezadoTabla{
    background:#CEF1FF;
    color: #514BD5;
    border-top-left-radius: 5em;
    border-radius: 15em 0em 0em 15em;
}

.bodyTabla{
    background: #E5E5E5;
}


.buttonAdd{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    width: 1em;
    padding: 0em;
    margin-left: 10em;
    margin-right: 30em;
    height: 2em;
}

.SpaceItems{
    margin-top: 2em;
}

#ADDVEHICULO{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    margin-top: 2em;
}
</style>