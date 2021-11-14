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
                  <button type="button" class="btn btn-secondary" style="background-color:green" v-b-modal.modal-3 @click="setIdtoUpdate(item.ID, item.nombre, item.apellido, item.rut, item.tipo, item.mail, item.oficina, item.notaria)">Editar</button>
                  <button type="button" class="btn btn-secondary" style="background-color:red">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary" style="background-color:blue" v-b-modal.modal-2>Agregar Usuario</button>

        <b-modal id="modal-2"  hide-footer>
            <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
            <div class="d-flex justify-content-center titleModal">Crear Usuario </div>
            <div class="row">            
                <div class="row">
                    <div class="col row">
                        <div class="titles d-flex justify-content-start" >
                            Nombre Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombreUsu" type="text">
                        </div>
                        <div class="titles d-flex justify-content-start" >
                            Apellido Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="apellidoUsu" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Run Notario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="rutUsu" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Tipo Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="tipoUsu" class="form-select">
                            <option value="ADMIN">Administrador</option>
                            <option value="FUNCIONARIONOTARIA">Funcionario de Notaria</option>
                            <option value="JEFEDESERVICIO">Jefe de Servicio</option>
                            <option value="NOTARIO">Notario</option>
                            <option value="PAGADOR">Pagador</option>
                            <option value="RECEPTOR">Receptor</option>
                            <option value="REVISOR">Revisor</option>
                          </select>
                        </div>
                        <div class="titles d-flex justify-content-start">
                            Oficina
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="oficinaUsu" class="form-select" v-model="comuna">      
                            <option :value="oficina.nombre_organizacion" v-for="(oficina,index) in oficinasP" :key="index">{{oficina.nombre_organizacion}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start">
                            Notaria
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="notariaUsu" class="form-select" v-model="comuna">      
                            <option :value="oficina.nombre_organizacion" v-for="(oficina,index) in notariasP" :key="index">{{oficina.nombre_organizacion}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Correo Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="mailUsu" type="mail">
                        </div>
                        <div class="titles d-flex justify-content-start" >
                            Contraseña Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="claveUsu" type="password">
                        </div>                                                 
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        
                    </div>
                    
                </div>
            </div>
            
            <button id="ADDNOTARIA" @click="add()">Agregar Usuario</button>
        </b-modal>


        <b-modal id="modal-3"  hide-footer>
            <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
            <div class="d-flex justify-content-center titleModal">Editar Usuario </div>
            <div class="row">            
                <div class="row">
                    <div class="col row">
                        <div class="titles d-flex justify-content-start" >
                            Nombre Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombreUsu2" type="text">
                        </div>
                        <div class="titles d-flex justify-content-start" >
                            Apellido Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="apellidoUsu2" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Run Notario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="rutUsu2" type="text">
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Tipo Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="tipoUsu2" class="form-select">
                            <option value="ADMIN">Administrador</option>
                            <option value="FUNCIONARIONOTARIA">Funcionario de Notaria</option>
                            <option value="JEFEDESERVICIO">Jefe de Servicio</option>
                            <option value="NOTARIO">Notario</option>
                            <option value="PAGADOR">Pagador</option>
                            <option value="RECEPTOR">Receptor</option>
                            <option value="REVISOR">Revisor</option>
                          </select>
                        </div>
                        <div class="titles d-flex justify-content-start">
                            Oficina
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="oficinaUsu2" class="form-select" v-model="comuna">      
                            <option :value="oficina.nombre_organizacion" v-for="(oficina,index) in oficinasP" :key="index">{{oficina.organizacion}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start">
                            Notaria
                        </div>
                        <div class="tamanoTipoDocumento">
                          <select id="notariaUsu2" class="form-select" v-model="comuna">      
                            <option :value="oficina.nombre_organizacion" v-for="(oficina,index) in notariasP" :key="index">{{oficina.organizacion}}</option>            
                          </select>
                        </div> 
                        <div class="titles d-flex justify-content-start" >
                            Correo Usuario
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="mailUsu2" type="mail">
                        </div>                                       
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        
                    </div>
                    
                </div>
            </div>
            
            <button id="ADDNOTARIA" @click="update()">Editar Usuario</button>
        </b-modal>

        </div>
       
    </div>
</template>

<script>

import {db, auth} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";

var notariaList = []
var id_to_modify = 0
function see_notarias(){
	getDocs(collection(db,"Notarias")).then((notariaData) => { 
		var my_notarias = notariaData.docs
		my_notarias.forEach((p) => {
			var p_data = p.data();
			notariaList.push([p.id,p_data])
		})
	})
}
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

var userList = []
function see_users(){
	getDocs(collection(db,"Usuario")).then((user_Data) => { 
		var my_users = user_Data.docs
		my_users.forEach((p) => {
			var p_data = p.data();
			userList.push([p.id,p_data])
		})
    console.log("USER LIST")
		console.log(userList)
	})
}
  
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
   mounted(){
     console.log("LA OFICINA LOL")
     console.log(JSON.parse(localStorage.mis_oficinas))
     console.log(this.oficinasP)
     this.rellenarTabla()
     see_notarias()
     see_oficinas()
     setTimeout(() => {
        var my_list = []
        console.log("MIS NOTARIAS")
        notariaList.forEach((c)=>{
          console.log(c[1])
          my_list.push(c[1])
        })
        this.notariasP = my_list
        var my_list2 = []
        console.log("MIS OFICINAS")
        oficinaList.forEach((c)=>{
          console.log(c[1])
          my_list2.push(c[1])
        })
        this.oficinasP = my_list2
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
  props:{
    notariasP:{
      type: Array,
    },
    oficinasP:{
      type: Array,
    }
  },
  methods:{
    rellenarTabla(){
      this.items = []
      userList = []
      see_users()
      setTimeout(() => {
        userList.forEach((u) => {
          let item = {
            "tipo": u[1]["rol"],
            "username": u[1]["nombre"],
            "rut": u[1]["rut"],
            "mail": u[1]["mail"],
            "nombre": u[1]["nombre"],
            "apellido": u[1]["apellido"],
            "ID:": u[0],
            "oficina": u[1]["OficinaID"],
            "notaria": u[1]["NotariaID"]
            }
          this.items.push(item)
        })
      }, 1500);
    },

    add(){
      console.log("DATA")
      const username = document.getElementById('nombreUsu').value
      console.log(username)
      const apellido = document.getElementById('apellidoUsu').value
      console.log(apellido)
      const rut = document.getElementById('rutUsu').value
      console.log(rut)
      const tipo = document.getElementById('tipoUsu').value
      console.log(tipo)
      const mail = document.getElementById('mailUsu').value
      console.log(mail)
      const password = document.getElementById('claveUsu').value
      console.log(password)
      const oficina = document.getElementById('oficinaUsu').value
      console.log(oficina)
      const notaria = document.getElementById('notariaUsu').value
      console.log(notaria)
      var oficinaID = -1;
      var notariaID = -1;
      notariaList.forEach((n)=>{
        if (n[1]["nombre_organizacion"] == notaria){
          notariaID = parseInt(n[0])
        }
      })
      oficinaList.forEach((o)=>{
        if (o[1]["nombre_organizacion"] == oficina){
          oficinaID = parseInt(o[0])
        }
      })
      createUserWithEmailAndPassword(auth, mail, password).then(() => {
        setDoc(doc(collection(db, "Usuario"),mail.toString()),{
          NotariaID: notariaID,
          OficinaID: oficinaID,
          nombre: username,
          apellido: apellido,
          mail: mail,
          rut: rut,
          rol: tipo,
          abogado_activo: (tipo == "OFICINA")
        })
      })
      setTimeout(() => {
        this.rellenarTabla()
      }, 1500);

    },

    setIdtoUpdate(id, nombre, apellido, rut, tipo, mail, oficina, notaria){
      id_to_modify = id
      console.log(id_to_modify)
      var la_oficina, la_notaria;
      console.log(oficina)
      console.log(notaria)
      notariaList.forEach((n)=>{
        if (n[0] == notaria){
          la_notaria = n[1]["nombre_organizacion"]
        }
      })
      oficinaList.forEach((o)=>{
        if (o[0] == oficina){
          la_oficina = o[1]["nombre_organizacion"]
        }
      })
      setTimeout(() => {
        document.getElementById('nombreUsu2').value = nombre
        document.getElementById('rutUsu2').value = rut
        document.getElementById('apellidoUsu2').value = apellido
        document.getElementById('tipoUsu2').value = tipo
        document.getElementById('mailUsu2').value = mail  
        document.getElementById('oficinaUsu2').value = la_oficina 
        document.getElementById('notariaUsu2').value = la_notaria      
      }, 300);
    },

    update(){
      console.log("DATA")
      const username = document.getElementById('nombreUsu2').value
      console.log(username)
      const apellido = document.getElementById('apellidoUsu2').value
      console.log(apellido)
      const rut = document.getElementById('rutUsu2').value
      console.log(rut)
      const tipo = document.getElementById('tipoUsu2').value
      console.log(tipo)
      const mail = document.getElementById('mailUsu2').value
      console.log(mail)
      const oficina = document.getElementById('oficinaUsu2').value
      console.log(oficina)
      const notaria = document.getElementById('notariaUsu2').value
      console.log(notaria)

      var oficinaID = -1;
      var notariaID = -1;
      notariaList.forEach((n)=>{
        if (n[1]["nombre_organizacion"] == notaria){
          notariaID = parseInt(n[0])
        }
      })
      oficinaList.forEach((o)=>{
        if (o[1]["nombre_organizacion"] == oficina){
          oficinaID = parseInt(o[0])
        }
      })
      setDoc(doc(collection(db, "Usuario"),id_to_modify),{
          NotariaID: notariaID,
          OficinaID: oficinaID,
          nombre: username,
          apellido: apellido,
          mail: mail,
          rut: rut,
          rol: tipo,
          abogado_activo: (tipo == "OFICINA")
        })

      setTimeout(() => {
        this.rellenarTabla()
      }, 1500);
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
