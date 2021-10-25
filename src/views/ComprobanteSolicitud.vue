<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <AntecedentesComprobante />
            <AcreedorComprobante />
            <ConstituyentesComprobante />
            <DeudoresComprobante />
            <RequirientesComprobante />
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Imprimir</button>
            </div>
        </div>
        
        
    </div>
</template>
<script scoped>
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import AntecedentesComprobante from '../components/AntecedentesComprobante.vue'
import AcreedorComprobante from '../components/AcreedorComprobante.vue'
import ConstituyentesComprobante from '../components/ConstituyentesComprobante.vue'
import DeudoresComprobante from '../components/DeudoresComprobante.vue'
import RequirientesComprobante from '../components/RequirentesComprobante.vue'
import {opciones} from "@/views/Dashboard"
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"


export default {
  name: 'formularioModificacion',
  data() {
        return {
            opcion: opciones,
            username: usernameGlobal,
        }
    },
  components: {
      Menu,
      Navbar,
      AntecedentesComprobante,
      AcreedorComprobante,
      ConstituyentesComprobante,
      DeudoresComprobante,
      RequirientesComprobante
  },
  
}
</script>

<style scoped>
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
}
.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}


.titleButton{
    color: #514BD5;
    font-family: Roboto;
    font-weight: bold;
    background: #CEF1FF;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
}
</style>