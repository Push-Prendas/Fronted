<template>
    <div id="TablaTipo">
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">N° Repertorio de Prenda</th>
              <th scope="col">Oficina</th>
              <th scope="col">N° Oficina</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Adjuntar doc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">N° Repertorio de Prenda</th>
              <th scope="row">Oficina</th>
              <th scope="row">N° Oficina</th>
              <th scope="row">Fecha</th>
              <th scope="row">Estado</th>
              <th scope="row">*ICON*</th>
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>
export default {
  name: 'TablaTipo',
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
