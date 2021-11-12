<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo</th>
              <th scope="col">Usuario</th>
              <th scope="col">Rut</th>
              <th scope="col">Mail</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Rol</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{index + 1}}</th>
              <th scope="row">{{item.tipo}}</th>
              <th scope="row">{{item.username}}</th>
              <th scope="row">{{item.rut}}</th>
              <th scope="row">{{item.mail}}</th>
              <th scope="row">{{item.nombre}}</th>
              <th scope="row">{{item.apellido}}</th>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary" style="background-color:green">Editar</button>
                  <button type="button" class="btn btn-secondary" style="background-color:red">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary" style="background-color:blue">Agregar Usuario</button>
        </div>
       
    </div>
</template>

<script>

import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";


var userList = []
function see_users(){
	getDocs(collection(db,"Usuario")).then((user_Data) => { 
		var my_users = user_Data.docs
		my_users.forEach((p) => {
			var p_data = p.data();
			userList.push(p_data)
		})
    console.log("USER LIST")
		console.log(userList)
	})
}
  
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

export default {
   mounted(){
     this.items = []
     userList = []
     see_users()
     setTimeout(() => {
       userList.forEach((u) => {
         let item = {
									"tipo": u["rol"],
									"username": u["nombre"],
                  "rut": "21150234-6",
                  "mail": u["mail"],
                  "nombre": u["nombre"],
                  "apellido": "Rodriguez"}
         this.items.push(item)
       })
     }, 1500);
   },
   data() {
        return {
            opcion: localStorage.my_opts.split(','),
            items: []
        }
    },
  name: 'Dashboard',
  components: {
    Menu,
    Navbar,
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
