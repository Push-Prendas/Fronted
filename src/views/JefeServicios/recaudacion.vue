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
                        <th scope="col">N Repertorio de Prenda</th>
                        <th scope="col">Monto Actuacion</th>
                        <th scope="col">Monto Anotacion</th>
                        <th scope="col">Monto Total</th>
                    </tr>
                </thead>
                <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
                    <tr>
                        <th scope="row">{{item.prenda}}</th>
                        <th scope="row">{{item.monto_act}}</th>  
                        <th scope="row">{{item.monto_anot}}</th>
                        <th scope="row">{{item.monto_tot}}</th>  
                    </tr>
                </tbody>
            </table>
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

var inscripciones_encontradas = []
var modificaciones_encontradas = []
var alzamientos_encontrados = []
function buscar_detalle_pago(month, year){
    getDocs(collection(db,"Solicitud_Inscripcion_Prenda")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRequirente.split("-")[2]
            var my_month = my_data.fechaRequirente.split("-")[1]
            if(my_data.estadoSecundario > 0 && my_year == year && my_month == month){
                inscripciones_encontradas.push(my_data)
            }
        })
    })
    getDocs(collection(db,"Solicitud_Modificacion_Prenda")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRequirente.split("-")[2]
            var my_month = my_data.fechaRequirente.split("-")[1]
            if(my_data.estadoSecundario > 0 && my_year == year && my_month == month){
                modificaciones_encontradas.push(my_data)
            }
        })
    })
    getDocs(collection(db,"Solicitud_Alzamiento_Prenda")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRequirente.split("-")[2]
            var my_month = my_data.fechaRequirente.split("-")[1]
            if(my_data.estadoSecundario > 0 && my_year == year && my_month == month){
                alzamientos_encontrados.push(my_data)
            }
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
    methods:{
        busqueda(){
            this.items =[]
            const month = document.getElementById('mespago').value
            const year = document.getElementById('yearpago').value
            buscar_detalle_pago(month, year)
            setTimeout(() => {
                inscripciones_encontradas.forEach((s)=> {
                    var montoTotal = 0
                    var montoSolicitud = 0
                    var montoAnotacion = 0
                    if(s["montoActuacion"] != null){
                        montoTotal = s["montoTotal"]
                        montoSolicitud = s["montoActuacion"]
                    }
                    else{
                        montoTotal = preciosGlobal[0]["precio"]
                        montoSolicitud = preciosGlobal[0]["precio"]
                    }
                    montoAnotacion = montoTotal - montoSolicitud
                    let item_insc = {
                        "prenda": s["numeroRepertorioContratoPrenda"],
                        "monto_act": montoSolicitud,
                        "monto_anot":montoAnotacion,
                        "monto_tot":montoTotal
                    }
                    this.items.push(item_insc)
                })
                modificaciones_encontradas.forEach((s)=> {
                    var montoTotal = 0
                    var montoSolicitud = 0
                    var montoAnotacion = 0
                    if(s["montoActuacion"] != null){
                        montoTotal = s["montoTotal"]
                        montoSolicitud = s["montoActuacion"]
                    }
                    else{
                        montoTotal = preciosGlobal[2]["precio"]
                        montoSolicitud = preciosGlobal[2]["precio"]
                    }
                    montoAnotacion = montoTotal - montoSolicitud
                    let item_insc = {
                        "prenda": s["numeroRepertorioContratoPrenda"],
                        "monto_act": montoTotal,
                        "monto_anot":montoAnotacion,
                        "monto_sol":montoSolicitud
                    }
                    this.items.push(item_insc)
                })
                alzamientos_encontrados.forEach((s)=> {
                    var montoTotal = 0
                    var montoSolicitud = 0
                    var montoAnotacion = 0
                    if(s["montoActuacion"] != null){
                        montoTotal = s["montoTotal"]
                        montoSolicitud = s["montoActuacion"]
                    }
                    else{
                        montoTotal = preciosGlobal[1]["precio"]
                        montoSolicitud = preciosGlobal[1]["precio"]
                    }
                    montoAnotacion = montoTotal - montoSolicitud
                    let item_insc = {
                        "prenda": s["numeroRepertorioContratoPrenda"],
                        "monto_act": montoTotal,
                        "monto_anot":montoAnotacion,
                        "monto_sol":montoSolicitud
                    }
                    this.items.push(item_insc)
                })
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
