<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class ="right">
          <RepcionDocumentosBuscador v-if="rol == 'RECEPTOR'"/>
        </div>

    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import RepcionDocumentosBuscador from '../components/RecepcionDocumentosBuscador.vue'


export default {
  name: 'Buscador',
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
    //TablaRevisor,
    //TablaRevisor2,
    //TablaJefeServicioRechazadas,
    //TablaJefeServicio2,
    RepcionDocumentosBuscador,
  }
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