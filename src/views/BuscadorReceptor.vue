<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class ="right">
          <RepcionDocumentosBuscador/>
        </div>

    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import RepcionDocumentosBuscador from '../components/RecepcionDocumentosBuscador.vue'
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
import {opciones} from "@/views/Dashboard"
console.log(emailGlobal)
export default {
  name: 'BuscadorReceptor',
  data() {
        return {
            opcion: opciones,
            username: usernameGlobal,
            rol: rolGlobal
        }
    },
  components: {
    Menu,
    Navbar,
    RepcionDocumentosBuscador
  },
  
}
</script>


<style scoped>

.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}

</style>