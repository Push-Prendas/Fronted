<template>
    <div id="TablaTipo">
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo</th>
              <th scope="col">Usuario</th>
              <th scope="col">Rut</th>
              <th scope="col">Mail</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Rol</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{index}}</th>
              <th scope="row">{{item.tipo}}</th>
              <th scope="row">{{item.username}}</th>
              <th scope="row">{{item.rut}}</th>
              <th scope="row">{{item.mail}}</th>
              <th scope="row">{{item.nombre}}</th>
              <th scope="row">{{item.apellido}}</th>
              <th scope="row">{{item.rol}}</th>
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
