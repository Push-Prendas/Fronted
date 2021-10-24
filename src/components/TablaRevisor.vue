<template>
    <div id="TablaRevisor">
        <h1 class="title" style="color:#514BD5">Solicitudes No Asignadas</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">N° Documento</th>
              <th scope="col">Oficina</th>
              <th scope="col">N° Oficina</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Asignada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th scope="row">Oficina L</th>
              <th scope="row">10</th>
              <th scope="row">19/08/2021</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" style="padding-left: 5px; padding-right: 5px; background-color:grey">Esperando Pago</th>
                  </div>
              </td>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" type="button" style="padding-left: 5px; padding-right: 5px; background-color:grey">Sin Asignar</th>
                      <th></th>
                      <th></th>
                      <th class="rounded-circle" type="button" style="padding-left: 10px; padding-right: 10px; background-color:yellow">+</th>
                  </div>
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <th scope="row">Oficina SS</th>
              <th scope="row">100</th>
              <th scope="row">03/02/2020</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" style="padding-left: 5px; padding-right: 5px; background-color:#23B928">Pagado</th>
                  </div>
              </td>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" type="button" style="padding-left: 5px; padding-right: 5px; background-color:grey">Sin Asignar</th>
                      <th></th>
                      <th></th>
                      <th class="rounded-circle" type="button" style="padding-left: 10px; padding-right: 10px; background-color:yellow">+</th>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>
export default {
  name: 'TablaRevisor',
  props: {
        opcion:Array,
        username:{
            type: String,
            default: 'Hola!'
        },
        rol :  {
            type: String,
            default: "REVISOR"
        }
  },
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
