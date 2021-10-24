<template>
    <div id="TablaRevisor">
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
          </thead>
          <tbody>
            <div class="titleFormulario">Requirientes</div>
            <div class="row">
                <div class="col row">
                    <div class="titles d-flex justify-content-center">
                        Nombre
                    </div>
                </div>

                <div class="col row">
                    <div class="titles d-flex justify-content-center">
                        Nombre y Apellido
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col row">
                    <div class="titles d-flex justify-content-center">
                        Rut
                    </div>
                </div>

                <div class="col row">
                    <div class="titles d-flex justify-content-center">
                        Nombre y apellido
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

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
}

.titleFormulario{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
}

.tamanoTipoDocumento{
    width: 10em;
}

.titles{
    margin-bottom: 0.5em;
    margin-top: 1em;
    font-weight: bold;
}

.nrepertorioright{
    margin-left: 1em;
    width:5em
}

.nrepertorioleft{
    margin-right: 1em;
    width:6.5em
}

</style>
