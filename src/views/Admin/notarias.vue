<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Region</th>
              <th scope="col">Comuna</th>
              <th scope="col">Notario</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th scope="row">Not567</th>
              <th scope="row">Maule</th>
              <th scope="row">Talca</th>
              <th scope="row">Juan Perez</th>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary" style="background-color:green">Editar</button>
                  <button type="button" class="btn btn-secondary" style="background-color:red">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>
  
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

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
      if (this.rol == "Admin"){
        this.opcion = ['Usuarios','Notarias', 'Oficinas', 'Parametros']

      }
      else{
        this.opcion = ['Mis solicitudes','Solicitud de inscripción de contrato de prendas', 'Solicitud de modificación de contrato de prendas', 'Solicitud de alzamiento de contrato de prendas', 'Solicitud de rectificación contraro de prendas', 'Consultar estado de una solicutud', 'Emision de certificados']

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

<style scoped>
.zui-table-rounded thead th:first-child {
    border-radius: 10px 0 0 0;
}
.zui-table-rounded thead th:last-child {
    border-radius: 0 10px 0 0;
}

.zui-table-rounded tbody tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
}
.zui-table-rounded tbody tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
}
</style>