<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div>
            <AntecedentesFormulario :rol="rolGlobal" />
            <RequirenteFormulario  v-if="rol == 'Oficina'"/>
            <VehiculosFormulario :tipoSolicitud="Alzamiento" />
            <ContratoFormulario />
            <AnexosFormulario/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Guardar</button>
                <button class="col-2 titleButton">Enviar</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import VehiculosFormulario from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {opciones} from "@/views/Dashboard"
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal)
export default {
  name: 'Dashboard',
  data() {
        return {
            opcion: opciones,
            username: usernameGlobal,
        }
    },
  props: {
        
        
        rol :  {
            type: String,
            default: rolGlobal
        },

  },
  components: {
    AntecedentesFormulario,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar,
    RequirenteFormulario,
  },
  
}
</script>

<style scoped>
#contenedor{
    width: 60em;
    margin-left: 29%;
    margin-top: 2%;
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