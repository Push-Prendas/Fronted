<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class ="right">
          <BuscadorJefeDeServicios v-if="rol == 'JEFEDESERVICIO'"/>
        </div>

    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
//import TablaRevisor from '../components/TablaRevisor.vue'
//import TablaRevisor2 from '../components/TablaRevisor2.vue'
//import TablaJefeServicioRechazadas from '../components/TablaJefeServicioRechazadas.vue'
//import TablaJefeServicio2 from '../components/TablaJefeServicio2.vue'
import BuscadorJefeDeServicios from '../components/BuscadorJefeDeServicios.vue'


export default {
  name: 'Dashboard',
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
    BuscadorJefeDeServicios
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