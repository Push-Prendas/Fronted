  <template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class ="right">
          <TablaRevisor v-if="rol == 'REVISOR'"/>
          <TablaRevisor2 v-if="rol == 'REVISOR'"/>
          <TablaJefeServicioRechazadas v-if="rol == 'JEFEDESERVICIO'" />
          <TablaJefeServicio2 v-if="rol == 'JEFEDESERVICIO'"/>
          <TablaRecepcionDocumento v-if="rol == 'RECEPTOR'"/>
          <MisSolicitudesNotario v-if = "rol == 'NOTARIO'"/>
          <PagosPendientes v-if = "rol == 'PAGADOR'"/>
        </div>

    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import TablaRevisor from '../components/TablaRevisor.vue'
import TablaRevisor2 from '../components/TablaRevisor2.vue'
import TablaJefeServicioRechazadas from '../components/TablaJefeServicioRechazadas.vue'
import TablaJefeServicio2 from '../components/TablaJefeServicio2.vue'
import TablaRecepcionDocumento from '../components/RecepcionDocumentosTabla.vue'
import MisSolicitudesNotario from '../components/MisSolicitudesNotario.vue'
import PagosPendientes from '../components/PagosPendientes.vue'
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
console.log(usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal)
var opciones;
export default {
  name: 'Dashboard',
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
    TablaRevisor,
    TablaRevisor2,
    TablaJefeServicioRechazadas,
    TablaJefeServicio2,
    TablaRecepcionDocumento,
    MisSolicitudesNotario,
    PagosPendientes
  },
  mounted() {
      //console.log("Entro")
      //console.log(this.rol)
      /*
	TIPOS DE USUARIO/ROL
		0 -> ADMIN
		1 -> FUNCIONARIONOTARIA
		2 -> NOTARIO
		3 -> PAGADOR
		4 -> REVISOR
		5 -> JEFEDESERVICIO
		6 -> FUNCIONARIOOFICINA
		7 -> RECEPTOR
*/    
      switch (this.rol){
        case "ADMIN":
          opciones = ['Usuarios','Notarias', 'Oficinas', 'Parametros']
          break
        case "FUNCIONARIONOTARIA":
          opciones = ['Mis Solicitudes','Inscripcion de contrato de prendas', 'Modificacion de contrato de prendas', 'Alzamiento de contrato de prendas', "Buscador"]
          break
        case "NOTARIO":
          opciones = ['Mis Solicitudes','Buscador']
          break
        case "PAGADOR":
          opciones = ['Pagos Pendientes','Resumen de Pagos']
          break
        case "REVISOR":
          opciones = ['Tareas','Buscador'] 
          break
        case "JEFEDESERVICIO":
          opciones = ['Tareas','Buscador', 'Informes']
          break
        case "FUNCIONARIOOFICINA":
          opciones = ['Mis Solicitudes','Inscripcion de contrato de prendas', 'Modificacion de contrato de prendas', 'Alzamiento de contrato de prendas', "Buscador"]
          break
        case "RECEPTOR":
          opciones = ['Tareas', 'Recepcion Solicitudes', 'Busqueda']
          break

      }
      
      this.opcion = opciones
  },
}
export {opciones}
localStorage.setItem("opciones", opciones)
</script>


<style scoped>

.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}

</style>