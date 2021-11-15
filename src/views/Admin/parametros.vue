<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{index + 1}}</th>
              <th scope="row">{{item.name}}</th>
              <th scope="row">{{item.price}}</th>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary" style="background-color:green" v-b-modal.modal-2 @click="setIdtoUpdate(item.ID, item.price, item.name)">Editar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <b-modal id="modal-2"  hide-footer>
            <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
            <div class="d-flex justify-content-center titleModal">Modificar Precio </div>
            <div class="titles d-flex justify-content-start" ><h6 id="titlePrecio"></h6></div>
            <div class="row">            
                <div class="row">
                    <div class="col row">
                        <div class="titles d-flex justify-content-start" >
                            Precio
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="precio" type="number">
                        </div>                 
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        
                    </div>
                    
                </div>
            </div>
            
            <button id="ADDNOTARIA" @click="update()">Modificar Precio</button>
        </b-modal>
        </div>
    </div>
</template>

<script>

import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'
import {db} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";

var preciosGlobal = []
function see_prices(){
	getDocs(collection(db,"Precios")).then((price_Data) => { 
		var my_prices = price_Data.docs
		my_prices.forEach((p) => {
			var p_data = p.data();
			preciosGlobal.push([p.id, p_data])
		})
		console.log(preciosGlobal)
	})
}

var id_to_update;
export default{
    mounted(){
        this.rellenarTabla()   
    },
    data(){
        return{
            opcion: localStorage.my_opts.split(','),
            items: []
        }
    },
    name: 'Dashboard',
    components:{
        Menu,
        Navbar,
    },
    methods:{
        rellenarTabla(){
            this.items = []
            preciosGlobal = []
            see_prices()
            setTimeout(() => {
                preciosGlobal.forEach((p)=>{
                     let item = {
                        "name": p[1]["nombre"],
                        "price": p[1]["precio"],
                        "ID": p[0],
                        }
                    this.items.push(item)
                })
            }, 1000);
        },

        setIdtoUpdate(id, price, name){
            id_to_update = id;
            setTimeout(() => {
                document.getElementById('titlePrecio').innerHTML = name;
                document.getElementById('precio').value = price;
            }, 300);
            
        },

        update(){
            const precio_mod = document.getElementById('precio').value
            const update_mod = document.getElementById('titlePrecio').innerHTML
            setDoc(doc(collection(db, "Precios"),id_to_update),{
                nombre: update_mod,
                precio: precio_mod
            })
            setTimeout(() => {
                this.rellenarTabla()
            }, 1500);
        }

    }
}
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

#ADDNOTARIA{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    margin-top: 2em;
}
</style>