<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />

        <div style="padding:50px; margin-left:300px">
            <table class="table table-sm table-hover zui-table-rounded" >
                <thead style="color: black;">
                    <tr>
                        <th scope="col">
                            Mes
                            <div class="d-flex justify-content-center">
                                <div class="tamanoTipoDocumento">
                                    <select id="mespago" class="form-select">
                                        <option selected value="01">Enero</option>
                                        <option value="02">Febrero</option>
                                        <option value="03">Marzo</option>
                                        <option value="04">Abril</option>
                                        <option value="05">Mayo</option>
                                        <option value="06">Junio</option>
                                        <option value="07">Julio</option>
                                        <option value="08">Agosto</option>
                                        <option value="09">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                        <option value="12">Diciembre</option>
                                    </select>
                                </div> 
                            </div>
                        </th>

                        <th scope="col">
                            Año
                            <div class="d-flex justify-content-center">
                                <div class="tamanoTipoDocumento">
                                    <input type="number"  id="yearpago" placeholder="2021">
                                </div>
                            </div>
                        </th>

                        <th scope="col">
                            <div class="d-flex justify-content-center">
                                <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>   
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>

            <table class="table table-sm table-hover zui-table-rounded" >
                <thead style="color: white;background-color: #514BD5;">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
                    <tr>
                        <th scope="row">{{item.nombre}}</th>
                        <th scope="row">{{item.precio}}</th>  
                    </tr>
                </tbody>
            </table>

            <h4 id="totalres"><b>TOTAL: $0</b></h4>
        </div>

    </div>
</template>

<script>
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";


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

var precio_inscripciones = 0
var precio_modificaciones = 0
var precio_alzamientos = 0
var precio_anotaciones = 0
function resumir_pagos(mes, year){
    var ids_to_search_insc = []
    var ids_to_search_mod = []
    var ids_to_search_alz = []
    getDocs(collection(db,"Bitacora")).then((bit) => { 
        var my_docs = bit.docs;
        my_docs.forEach(my_bit => {
            var my_data = my_bit.data();
            var my_year = my_data.fechaCambio.split("-")[0]
            var my_month = my_data.fechaCambio.split("-")[1]
            if(my_data.comment == "Pagado" && my_year == year && my_month == mes){
                if(my_data.idInscripcion != "")
                    ids_to_search_insc.push(my_data.idInscripcion)
                if(my_data.idModificacion != "")
                    ids_to_search_mod.push(my_data.idModificacion)
                if(my_data.idAlzamiento != "")
                    ids_to_search_alz.push(my_data.idAlzamiento)
            }
        });
    }).then(()=>{
        console.log(ids_to_search_alz)
        getDocs(collection(db,"Solicitud_Inscripcion_Prenda")).then((sol) => { 
            var my_docs = sol.docs;
            my_docs.forEach(my_sol => {
                var my_data = my_sol.data();
                if(ids_to_search_insc.includes(my_sol.id)){
                    if(my_data.montoActuacion != null){
                        precio_inscripciones += my_data.montoActuacion
                        precio_anotaciones += my_data.montoTotal - my_data.montoActuacion
                    }
                    else{
                        precio_inscripciones += preciosGlobal[0]["precio"]
                        precio_anotaciones += my_data.montoTotal - preciosGlobal[0]["precio"]
                    }
                }       
            })
        })
        getDocs(collection(db,"Solicitud_Modificacion_Prenda")).then((sol) => { 
            var my_docs = sol.docs;
            my_docs.forEach(my_sol => {
                var my_data = my_sol.data();
                if(ids_to_search_mod.includes(my_sol.id)){
                    if(my_data.montoActuacion != null){
                        precio_modificaciones += my_data.montoTotal}
                    else{
                        precio_modificaciones += preciosGlobal[2]["precio"]
                    }
                }       
            })
        })
        getDocs(collection(db,"Solicitud_Alzamiento_Prenda")).then((sol) => { 
            var my_docs = sol.docs;
            my_docs.forEach(my_sol => {
                var my_data = my_sol.data();
                if(ids_to_search_alz.includes(my_sol.id)){
                    if(my_data.montoActuacion != null){
                        precio_alzamientos += my_data.montoTotal}
                    else{
                        precio_alzamientos += preciosGlobal[1]["precio"]
                    }
                }       
            })
        })
    })
    

}

export default ({
    mounted(){
        see_prices()
    },
    data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            items: []
        }
    },
    name: 'Dashboard',
    components: {
        Menu,
        Navbar,
    },
    methods: {
        busqueda(){
            this.items =[]
            document.getElementById('totalres').innerHTML = '<b>TOTAL: $0</b>'
            const month = document.getElementById('mespago').value
            const year = document.getElementById('yearpago').value
            resumir_pagos(month, year)
            setTimeout(() => {
                console.log(precio_alzamientos)
                let item_insc = {
					"nombre": "Inscripciones",
                    "precio": precio_inscripciones}
                let item_mod = {
					"nombre": "Modificaciones",
                    "precio": precio_modificaciones}
                let item_alz = {
					"nombre": "Alzamientos",
                    "precio": precio_alzamientos}
                let item_anot = {
					"nombre": "Anotaciones",
                    "precio": precio_anotaciones}
                this.items.push(item_insc)
                this.items.push(item_mod)
                this.items.push(item_alz)
                this.items.push(item_anot)
                document.getElementById('totalres').innerHTML = '<b>TOTAL: $' + (precio_inscripciones + precio_alzamientos + precio_modificaciones + precio_anotaciones) + '</b>'
            }, 1500);
        }
    }
})

</script>

<style scoped>
.zui-table-rounded thead th:first-child {
    border-radius: 10px 0 0 0;
}
.zui-table-rounded thead th:last-child {
    border-radius: 0 10px 0 0;
}

.zui-table-rounded tbody tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
}
.zui-table-rounded tbody tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
}

.tamanoTipoDocumento{
    width: 10em;
}

.status{
    padding-left: 5px; 
    padding-right: 5px; 
    background-color:#B9AA23;
    color: white;
    border-radius: 15px;

}

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
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
}
</style>

