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
                  <button type="button" class="btn btn-secondary" style="background-color:green">Editar</button>
                  <button type="button" class="btn btn-secondary" style="background-color:red">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary" style="background-color:blue">Agregar Oficina</button>
        </div>
       
    </div>
</template>

<script>

import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";

var oficinaList = []
function see_oficinas(){
	getDocs(collection(db,"Oficina")).then((notariaData) => { 
		var my_notarias = notariaData.docs
		my_notarias.forEach((p) => {
			var p_data = p.data();
			oficinaList.push(p_data)
		})
	})
}

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
  
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

export default {
  mounted(){
    this.items = []
    oficinaList = []
    see_oficinas()
    see_comunas_y_regiones()
    setTimeout(() => {
      oficinaList.forEach((n) => {
        var comuna, region
        var id_comuna = n["id_comuna"]
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
									"nombre": n["nombre_organizacion"],
									"region": region,
                  "comuna": comuna,
                  "encargado": "Juan Perez"
        }
        this.items.push(item)
      })
      
    }, 2000);
  },
  name: 'Dashboard',
  data() {
      return {
          opcion: localStorage.my_opts.split(','),
          items: []
      }
  },
  components: {
    Menu,
    Navbar
  },
  
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
</style>
