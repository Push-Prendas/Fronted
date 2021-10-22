<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
    </div>
</template>
<script>
  
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'

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
            default: "Admin"
        }
  },
  components: {
    Menu,
    Navbar
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
          this.opcion = ['Usuarios','Notarias', 'Oficinas', 'Parametros']
          break
        case "FUNCIONARIONOTARIA":
          this.opcion = ['Mis Solicitudes','Inscripción de contrato de prendas', 'Modificacion de contrato de prendas', 'Alzamiento de contrato de prendas', "Buscador"]
          break
        case "NOTARIO":
          this.opcion = ['Mis Solicitudes','Buscador']
          break
        case "PAGADOR":
          this.opcion = ['Pagos Pendientes','Resumen de Pagos']
          break
        case "REVISOR":
          this.opcion = ['Tareas','Buscador'] 
          break
        case "JEFEDESERVICIO":
          this.opcion = ['Tareas','Buscador', 'Informes']
          break
        case "FUNCIONARIOOFICINA":
          this.opcion = ['Mis Solicitudes','Inscripción de contrato de prendas', 'Modificacion de contrato de prendas', 'Alzamiento de contrato de prendas', "Buscador"]
          break
        case "RECEPTOR":
          this.opcion = ['Tareas', 'Recepcion Solicitudes', 'Busqueda']
          break

      }
  }
  
}
</script>
