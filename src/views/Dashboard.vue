<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <TablaRevisor />
    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import TablaRevisor from '../components/TablaRevisor.vue'
var opciones;
export default {
  name: 'Dashboard',
  props: {
        opcion:Array,
        username:{
            type: String,
            default: 'Hola!'
        },
        rol :  {
            type: String,
            default: "ADMIN"
        }
  },
  components: {
    Menu,
    Navbar,
    TablaRevisor
  },
  mounted() {
      console.log("Entro")
      console.log(this.rol)
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
