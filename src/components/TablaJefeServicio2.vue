<template>
    <div id="TablaRevisor">
        <h1 class="title" style="color:#514BD5">Rechazadas</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">N° Repertorio Prenda</th>
              <th scope="col">N° Notaria</th>
              <th scope="col">Tipo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12</th>
              <th scope="row">19</th>
              <th scope="row">Inscripcion</th>
              <th scope="row">2/03/2019</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" style="padding-left: 5px; padding-right: 5px; background-color:#EF242F">Rechazada</th>
                      <th></th>
                      <th></th>
                      <button type="button" class="rounded"><img src="../assets/attachLogo.png" alt="dog" width="20px" height="20px"></button>
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

.tamanoTipoDocumento{
    width: 10em;
}
</style>
