<template>
    <div id="TablaRevisor">
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
          </thead>
          <tbody>
            <div class="titleFormulario">Deudores</div>
            <div class="row">
                <div class="col row">
                    <div class="titles d-flex justify-content-start">
                        Nombre
                    </div>
                </div>

                <div class="col row">
                    <div class="titles d-flex justify-content-start">
                        Nombre y Apellido
                    </div>
                </div>
            </div>

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

.nNotaria{
    margin-left: 1em;
    width:5em
}

</style>
