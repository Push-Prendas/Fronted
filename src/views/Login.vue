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
                <p class="context-letter">Usuario</p>
                <input id="user" class="context-input" v-model="username">
                <p class="context-letter">Contraseña</p>
                <input id="contrasena" class="context-input" v-model="contrasena">
                <router-link class="btn entrar-button"  :to="{ path: `/HellowWorld/${Login(username,contrasena)}/${username}`, params: {username: this.username, rol: this.rol}}" >Entrar</router-link>
                <p>Para ayuda, favor contáctese con nuestro</p>
                <p>Call Center </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  props:{
      msg:String
  },
    data(){
        return{
            username:"",
            rol:"Admin",
            contrasena:""
        }
        
    },
    
    methods: {
        Login(user,password) {
            //const path = 'http://localhost:8003/api/v1/authuser'
            console.log(user,password),
            this.rol="Adm"
            console.log(this.rol)
            return this.rol
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
.context-input{
    text-align: left;
    width: 100%;
    margin-bottom: 1em;
}

.entrar-button{
    color: white;
    background-color: #514BD5;
}

</style>