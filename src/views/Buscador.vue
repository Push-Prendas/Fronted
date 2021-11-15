<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class ="right">
          <BuscadorJefeDeServicios v-if="rol == 'JEFEDESERVICIO'"/>
          <BuscadorReceptor v-if="rol == 'RECEPTOR'"/>
          <BuscadorRevisor v-if="rol == 'REVISOR'"/>
          <BuscadorFuncionarioNotaria v-if="rol == 'FUNCIONARIONOTARIA'"/>
          <BuscadorNotario v-if="rol == 'NOTARIO'"/>
        </div>

    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import BuscadorReceptor from '../components/BuscadorReceptor.vue'
import BuscadorJefeDeServicios from '../components/BuscadorJefeDeServicios.vue'
import BuscadorRevisor from '../components/BuscadorRevisor.vue'
import BuscadorFuncionarioNotaria from '../components/BuscadorFuncionarioNotaria.vue'
import BuscadorNotario from '../components/BuscadorNotario.vue'



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
    BuscadorReceptor,
    BuscadorJefeDeServicios,
    BuscadorRevisor,
    BuscadorFuncionarioNotaria,
    BuscadorNotario
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