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
                        <th scope="col">Fecha de Rechazo</th>
                        <th scope="col">Motivo</th>
                    </tr>
                </thead>
                <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
                    <tr>
                        <th scope="row">{{item.prenda}}</th>
                        <th scope="row">{{item.fecha}}</th>  
                        <th scope="row">{{item.motivo}}</th>
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

var rechazosGlobal = []
function buscar_rechazos(mes, year){
    getDocs(collection(db,"Inspeccion_inscripcion")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRevision.split("-")[0]
            var my_month = my_data.fechaRevision.split("-")[1]
            if(my_year == year && my_month == mes){
                getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
                    var all_insc = sol_data.docs
                    all_insc.forEach((doc) => {
                        var doc_data = doc.data();
                        if(my_data.solicitudId == doc.id){
                            rechazosGlobal.push([doc_data.numeroRepertorioContratoPrenda, my_data.fechaRevision, my_data.comment])
                        }
                    })
                })
            }          
        })
    })
    getDocs(collection(db,"Inspeccion_modificacion")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRevision.split("-")[0]
            var my_month = my_data.fechaRevision.split("-")[1]
            if(my_year == year && my_month == mes){
                getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((sol_data) => {
                    var all_insc = sol_data.docs
                    all_insc.forEach((doc) => {
                        var doc_data = doc.data();
                        if(my_data.solicitudId == doc.id){
                            rechazosGlobal.push([doc_data.numeroRepertorioContratoPrenda, my_data.fechaRevision, my_data.comment])
                        }
                    })
                })
            }          
        })
    })
    getDocs(collection(db,"Inspeccion_alzamiento")).then((sol) => { 
        var my_docs = sol.docs;
        my_docs.forEach(my_sol => {
            var my_data = my_sol.data();
            var my_year = my_data.fechaRevision.split("-")[0]
            var my_month = my_data.fechaRevision.split("-")[1]
            if(my_year == year && my_month == mes){
                getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((sol_data) => {
                    var all_insc = sol_data.docs
                    all_insc.forEach((doc) => {
                        var doc_data = doc.data();
                        if(my_data.solicitudId == doc.id){
                            rechazosGlobal.push([doc_data.numeroRepertorioContratoPrenda, my_data.fechaRevision, my_data.comment])
                        }
                    })
                })
            }          
        })
    })
}

export default ({
    
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
            console.log("xd")
            buscar_rechazos(month, year)
            setTimeout(() => {
                console.log(rechazosGlobal)
                rechazosGlobal.forEach((r)=>{
                    console.log("R: " + r)
                    let item={
                        "prenda": r[0],
                        "fecha": r[1],
                        "motivo": r[2]
                    }
                    this.items.push(item)
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
