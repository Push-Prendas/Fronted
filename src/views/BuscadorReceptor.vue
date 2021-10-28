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
export default {
  name: 'BuscadorReceptor',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            rol: localStorage.rol
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