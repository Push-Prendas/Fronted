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
            default: "User"
        }
  },
  components: {
    Menu,
    Navbar
  },
  mounted() {
      if (this.rol == "Admin"){
          this.opcion = ['Mis solicitudes','Solicitud de inscripción de contrato de prendas', 'Solicitud de modificación de contrato de prendas', 'Solicitud de alzamiento de contrato de prendas', 'Solicitud de rectificación contraro de prendas', 'Consultar estado de una solicutud', 'Emision de certificados']
      }
      else{
           this.opcion = ['Usuarios','Notarias', 'Oficinas', 'Parametros']
           //this.opcion = ['Prendas vigentes','Asignación de solicitudes','Solicitudes rechazadas', 'Informes']
           //this.opcion = ['Mis solicitudes','Buscar solicitudes']
           //this.opcion = ['Mis solicitudes','Solicitud de inscripción de contrato de prendas', 'Solicitud de modificación de contrato de prendas', 'Solicitud de alzamiento de contrato de prendas', 'Buscador']
           //this.opcion = ['Pagos pendientes','Resumen de Pagos']
           //this.opcion = ['Mis solicitudes']
           //this.opcion = ['Usuarios', 'Parametros', 'Tipo de contratante', 'Funcionarios Examinadores', 'Causales de rechazo', 'Tipo de modificaciones', 'Valor Arancel', 'Plazos']
      }
  }
  
}
</script>
