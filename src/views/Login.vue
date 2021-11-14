<template>
    <div class="contenedor">
        <div class="row navbar">
            <div class="col-3">
                <img src="../assets/LogoDelRegistroCivil.png" alt="dog" width="100px" height="100px">
            </div>
            <div class="col row navbar-letter">
                <div class="bienvenida-navbar">
                    Bienvenido (a)
                </div>
                <div class="title-navbar">
                    REGISTRO DE PRENDAS
                </div>
                <div class="title-navbar">
                    SIN DESPLAZAMIENTO
                </div>
                
            </div>
            
        </div>

        <div class="user-title-letter">
            Ingrese Usuario y Contraseña
        </div>

        <div id="inputs">
            <div class="row">
            <form v-on:submit.prevent="Login">
                <input type="text" id="username" class="fadeIn second" name="login" placeholder="Usuario" v-model="username">
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña" v-model="password">
                <input type="submit" class="fadeIn fourth" value="Entrar" @click="getNotarias(), getRegiones(), getComunas(), getOficinas()">
            </form>              
            <p>Para ayuda, favor contáctese con nuestro</p>
            <p>Call Center </p>
            <div class="alert alert-danger" role="alert" v-if="error">
            {{error_msg}}
            </div> 
            </div>
        </div>
    </div>
</template>

<script>
import {auth, db} from "@/main";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

var usernameGlobal;
var emailGlobal;
var rolGlobal;
var notarias = [];
var regiones = [];
var comunas = [];
var oficina = [];
var notariaGlobal;
export default {
  name: 'App',
  components: {
    },
  props:{
      msg:String
  },
    data(){
        return{
            username:"",
            password:"",
            error: false,
            error_msg: "",
        }
    },
    
    methods: {
        Login() {
            var username = this.username;
            var password = this.password;
            if(this.username=="" || this.password==""){
                this.error = true
                this.error_msg="Debe llenar todos los campos"
            }else{
                signInWithEmailAndPassword(auth, username, password).then(() => {
                    getDocs(collection(db, "Usuario")).then((docs)=>
                    docs.forEach((doc) => {
                            const user = doc.data();
                            if(user.mail == username){
                                //Usuario:{abogado_activo,mail,nombre,rol}
                                //TEST SAVE
                                this.username = user.username
                                this.rol = user.rol
                                emailGlobal = user.mail
                                usernameGlobal = user.nombre
                                rolGlobal = user.rol
                                notariaGlobal = user.NotariaID
                                switch(rolGlobal){
                                    case "FUNCIONARIONOTARIA":
                                        localStorage.esoficina= 0;
                                        break;
                                    case "NOTARIO":
                                        localStorage.esoficina= 0;
                                        break;
                                    case "PAGADOR":
                                        localStorage.esoficina= 0;
                                        break;
                                    case "FUNCIONARIOOFICINA":
                                        localStorage.esoficina= 1;
                                        break;
                                    default:
                                        localStorage.esoficina= 0;
                                        break;
                                 }
                                localStorage.mail = emailGlobal
                                localStorage.user = usernameGlobal
                                localStorage.rol = rolGlobal
                                localStorage.rutLog = user.rut
                                localStorage.notaria = notariaGlobal
                                localStorage.mis_regiones = JSON.stringify(regiones);
                                localStorage.mis_comunas = JSON.stringify(comunas);
                                localStorage.mis_notarias = JSON.stringify(notarias);
                                localStorage.mis_oficinas = JSON.stringify(oficina);
                                console.log("MIS OFICINAS")
                                console.log(oficina)
                                //TEST LOAD
                                //const rol_load = localStorage.getItem('user_rol')
                                //console.log(rol_load)
                                this.username=user.nombre
                                this.$router.push({path: `/Dashboard/${rolGlobal}/${usernameGlobal}`, params: {username: usernameGlobal, rol: rolGlobal}})

                                //loginForm.reset();
                                //Logeado
                                
                            }
                        }));
                    
                   
                }).catch((err) => {
                    this.error = true
                    var msg;
                    switch (err.message){
                        case "Firebase: Error (auth/invalid-email).":
                            msg ="Email Invalido"
                            break
                        case "Firebase: Error (auth/user-not-found).":
                            msg ="Email Invalido"
                            break
                        case "Firebase: Error (auth/wrong-password).":
                            msg = "Contraseña Invalida"
                            break
                        case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
                            msg = "Tu cuenta ha sido bloqueada temporalmente por muchos intentos de ingreso fallidos."
                            break
                    }
                    //console.log(msg)
                    this.error_msg= msg
                });}
            
            


            //console.log(this.rol)
            //return this.rol
        },
        getNotarias(){
            getDocs(collection(db, "Notarias")).then((users_data) => {
            var data = users_data.docs
            data.forEach((doc) => {
                    var not = doc.data();
                    let item = {
                        "direccion": not["direccion"],
                        "id_comuna": not["id_comuna"],
                        "notario": not["nombre_notario"],
                        "rut": not["rut_notario"],
                        "organizacion": not["nombre_organizacion"]
                    }
                    notarias.push(item)
                })
            })
            
        },
        getOficinas(){
            getDocs(collection(db, "Oficina")).then((users_data) => {
            var data = users_data.docs
            data.forEach((doc) => {
                    var not = doc.data();
                    let item = {
                        "direccion": not["direccion"],
                        "id_comuna": not["id_comuna"],
                        "encargado": not["nombre_encargado"],
                        "rut": not["rut_encargado"],
                        "organizacion": not["nombre_organizacion"]
                    }
                    oficina.push(item)
                })
            }) 
        },
        getRegiones(){
            getDocs(collection(db, "Regiones")).then((users_data) => {
                var data = users_data.docs
                data.forEach((doc) => {
                        var not = doc.data();
                        console.log("REGIONXD")
                        let item = {
                            "nombre": not["nombre"],
                        }
                        regiones.push(item)
                    })
                console.log("MIS REGIONES")
                console.log(regiones)
            })
            

        },
        getComunas(){
            getDocs(collection(db, "Comunas")).then((users_data) => {
                var data = users_data.docs
                data.forEach((doc) => {
                        var not = doc.data();
                        let item = {
                            "nombre": not["nombre"],
                        }
                        comunas.push(item)
                })
            })
            
        },
    }
}
export{notarias, regiones, comunas}

</script>

<style scoped>
.contenedor {
    width: 40em;
    height: 40em;
    border: 0.2em gray outset;
    margin-left: 29%;
    margin-top: 5%;
    padding: 2em;
}
.title-navbar{
    color: #514BD5;
    font-family: 'Times New Roman';
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
    height: 5px;
}
.bienvenida-navbar{
    color: #514BD5;
    font-family: 'Times New Roman';
    font-size: 1em;
    font-weight: bold;
    text-align: left;
    height: 0em;
}
.navbar-letter{
    height: 7em;
}
.navbar{
    border-bottom: 0.1em solid black;
}

.user-title-letter{
    color: #514BD5;
    font-family: 'Times New Roman';
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    height: 0em;
    padding-bottom: 2em;
    border-bottom: 0.01em solid black;
}

#inputs{
    padding: 2em 4em;
}

.context-letter{
    color: #514BD5;
    font-family: 'Times New Roman';
    font-size: 1em;
    font-weight: bold;
    text-align: left;
    height: 1em;
    padding: 0em;
}
.form-control{
    text-align: left;
    width: 100%;
    margin-bottom: 1em;
}

.entrar-button{
    margin-bottom:10px;
    color: white;
    background-color: #514BD5;
}
input[type=button], input[type=submit], input[type=reset]  {
  background-color:  #514BD5;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color:  #514BD5;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid  #514BD5;
}

input[type=text]:placeholder {
  color: #cccccc;
}

input[type=password] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=password]:focus {
  background-color: #fff;
  border-bottom: 2px solid  #514BD5;
}

input[type=password]:placeholder {
  color: #cccccc;
}
</style>