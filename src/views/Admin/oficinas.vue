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
              <th scope="col">Region</th>
              <th scope="col">Comuna</th>
              <th scope="col">Encargado</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{index + 1}}</th>
              <th scope="row">{{item.nombre}}</th>
              <th scope="row">{{item.region}}</th>
              <th scope="row">{{item.comuna}}</th>
              <th scope="row">{{item.encargado}}</th>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary" style="background-color:green" v-b-modal.modal-3 @click="setIdtoUpdate(item.ID, item.nombre, item.rut, item.comuna, item.encargado, item.dir)">Editar</button>
                  <button type="button" class="btn btn-secondary" style="background-color:red" @click="erase(item.ID)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary" style="background-color:blue" v-b-modal.modal-2>Agregar Oficina</button>


        <b-modal id="modal-2"  hide-footer>
            <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
            <div class="d-flex justify-content-center titleModal">Agregar Oficina </div>
            <div class="row">            
                <div class="row">
                    <div class="col row">
                        <div class="titles d-flex justify-content-start" >
                            Nombre Oficina
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombreNot" type="text">
                        </div>
                        <div class="titles d-flex justify-content-start">
                            Comuna
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="comunaNot" class="form-select" v-model="comuna">      
                            <option :value="region.nombre" v-for="(region,index) in comunasP" :key="index">{{region.nombre}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Encargado
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="notarioNot" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Rut Encargado
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="rutNot" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Direccion
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="dirNot" type="text">
                        </div>                                                  
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        
                    </div>
                    
                </div>
            </div>
            
            <button id="ADDNOTARIA" @click="add()">Agregar Oficina</button>
        </b-modal>


        <b-modal id="modal-3"  hide-footer>
            <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
            <div class="d-flex justify-content-center titleModal">Editar Oficina </div>
            <div class="row">            
                <div class="row">
                    <div class="col row">
                        <div class="titles d-flex justify-content-start" >
                            Nombre Oficina
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombreNot2" type="text">
                        </div>
                        <div class="titles d-flex justify-content-start">
                            Comuna
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="comunaNot2" class="form-select" v-model="comuna">      
                            <option :value="region.nombre" v-for="(region,index) in comunasP" :key="index">{{region.nombre}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Nombre Encargado
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="notarioNot2" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Rut Encargado
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="rutNot2" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Direccion
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="dirNot2" type="text">
                        </div>                                                  
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        
                    </div>
                    
                </div>
            </div>
            
            <button id="ADDNOTARIA"  @click="update()">Editar Oficina</button>
          </b-modal>   

        </div>       
    </div>
</template>

<script>

import {db} from "@/main";
import { collection, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore";

var oficinaList = []
function see_oficinas(){
	getDocs(collection(db,"Oficina")).then((notariaData) => { 
		var my_notarias = notariaData.docs
		my_notarias.forEach((p) => {
			var p_data = p.data();
			oficinaList.push([p.id,p_data])
		})
	})
}

var id_to_modify;
var comunasGlobal = []
var regionesGlobal = []
function see_comunas_y_regiones(){
  getDocs(collection(db,"Comunas")).then((comData) => { 
		var mis_comunas = comData.docs
		mis_comunas.forEach((p) => {
			var p_data = p.data();
			comunasGlobal.push([p.id, p_data])
		})
	})
  getDocs(collection(db,"Regiones")).then((regData) => { 
		var mis_regiones = regData.docs
		mis_regiones.forEach((p) => {
			var p_data = p.data();
      console.log(p.id);
			regionesGlobal.push([p.id,p_data])
		})
	})
}

function addOficina(){
  const oficina = document.getElementById('nombreNot').value
  const rutEncargado = document.getElementById('rutNot').value
  const comuna = document.getElementById('comunaNot').value.toUpperCase()
  const encargado = document.getElementById('notarioNot').value
  const direccion = document.getElementById('dirNot').value
  var validate = false
  var comunaID;
  comunasGlobal.forEach((c)=>{
    if (c[1]["nombre"] == comuna){
      comunaID = c[0]
      validate = true
    }
  })
  if(validate){
      getDocs(collection(db,"Oficina")).then((notariaData) => { 
      var my_notarias = notariaData.docs
      var my_notarias_id = 0
      my_notarias.forEach((m)=>{
        var id_check = parseInt(m.id)
        if(id_check > my_notarias_id){
          my_notarias_id = id_check
        }
      })
      my_notarias_id += 1
      setDoc(doc(collection(db, "Oficina"),my_notarias_id.toString()),{
        direccion: direccion,
        id_comuna: comunaID.toString(),
        nombre_encargado: encargado,
        nombre_organizacion: oficina,
        run_encargado: rutEncargado
      })
    })
  }
  else{
    alert("Esta comuna no existe")
  }
}
  
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

export default {
  mounted(){
    this.rellenarTabla()
    see_comunas_y_regiones()
    setTimeout(() => {
      var my_list = []
      comunasGlobal.forEach((c)=>{
        console.log(c[1])
        my_list.push(c[1])
      })
      this.comunasP = my_list
    }, 1000);
  },
  name: 'Dashboard',
  data() {
      return {
          opcion: localStorage.my_opts.split(','),
          username: localStorage.user,
          items: []
      }
  },
  components: {
    Menu,
    Navbar
  },
  props:{
    regionesP:{
      type: Array,
    },
    comunasP:{
      type: Array,
    }
  },
  methods:{
      rellenarTabla(){
        this.items = []
        oficinaList = []
        see_oficinas()
        see_comunas_y_regiones()
        setTimeout(() => {
          oficinaList.forEach((n) => {
            var comuna, region
            var id_comuna = n[1]["id_comuna"]
            comunasGlobal.forEach((c)=>{
              if(c[0] == id_comuna){
                comuna = c[1]["nombre"]
                var id_region = c[1]["id_region"].split(' ').join('')
                regionesGlobal.forEach((r) => {
                  console.log(r[0])
                  if (r[0]==id_region){
                    region = r[1]["nombre"]
                  }
                })
              }
            })
            let item = {
                      "nombre": n[1]["nombre_organizacion"],
                      "region": region,
                      "comuna": comuna,
                      "encargado": n[1]["nombre_encargado"],
                      "dir": n[1]["direccion"],
                      "ID": n[0]
            }
            this.items.push(item)
          })   
        }, 2000);
    },

    add(){
      addOficina()
      setTimeout(() => {
        this.rellenarTabla()
      }, 1000);
    },

    setIdtoUpdate(id, nombre, rut, comuna, notario, dir){
      id_to_modify = id
      console.log(id_to_modify)
      setTimeout(() => {
        document.getElementById('nombreNot2').value = nombre
        document.getElementById('rutNot2').value = rut
        document.getElementById('comunaNot2').value = comuna
        document.getElementById('notarioNot2').value = notario
        document.getElementById('dirNot2').value = dir       
      }, 300);
    },

    update(){ 
      var comunaID;
      const comuna = document.getElementById('comunaNot2').value.toUpperCase()
      comunasGlobal.forEach((c)=>{
        if (c[1]["nombre"] == comuna){
          comunaID = c[0]
        }
      })
      setDoc(doc(collection(db, "Oficina"),id_to_modify.toString()),{
          direccion: document.getElementById('dirNot2').value,
          id_comuna: comunaID.toString(),
          nombre_encargado: document.getElementById('notarioNot2').value,
          nombre_organizacion: document.getElementById('nombreNot2').value,
          run_encargado: document.getElementById('rutNot2').value
        })
      setTimeout(() => {       
        this.rellenarTabla()
      }, 1000);
    },

    erase(id){
      deleteDoc(doc(db, "Oficina", id));
      setTimeout(() => {
        this.rellenarTabla()
      }, 1000);
    },





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
