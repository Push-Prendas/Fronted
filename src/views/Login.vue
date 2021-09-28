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
                <input type="submit" class="fadeIn fourth" value="Entrar" >
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
import axios from "axios";
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
            const path = 'http://127.0.0.1:8000/api-token-auth/'
            console.log(this.user,this.password)
            let json = {
                "username" : this.username,
                "password" : this.password
            }
            console.log(json)
            axios.post(path,json).then( data => {
                
                this.rol= data.data.first_name
                this.username = "Admin"
                console.log(data.data.first_name)
                localStorage.setItem('name', this.username)
            
            if(this.username=="" || this.password==""){
                this.error = true
                this.error_msg="Debe llenar todos los campos"
            }else{
                console.log(this.rol)
                
                this.$router.push({path: `/Dashboard/${this.rol}/${this.username}`, params: {username: this.username, rol: this.rol}})
                

            }

            })


            //console.log(this.rol)
            //return this.rol
        }
    }
    
}
</script>

<style scoped>
.contenedor {
    width: 40em;
    height: 40em;
    border: 0.2em gray outset;
    margin-left: 34%;
    margin-top: 10%;
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