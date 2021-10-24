<template>
    <div id="TablaRevisor">
        
        

        <div style="padding:50px; margin-left:300px">
        <table class="table table-sm table-hover zui-table-rounded" >
               
          <thead style="color: black;">
            <tr>
                <th scope="col">
                    N° Documento
                    <div class="d-flex justify-content-center">
                        
                        <input type="text"  placeholder="N° Documento">      
                    </div>
                </th>
                <th scope="col">
                    Año
                    <div class="d-flex justify-content-center">
                        <input type="text"  placeholder="Año">      
                    </div>
                </th>
                <th scope="col">
                    Tipo de actuación
                    <div class="d-flex justify-content-center">
                        <input type="text"  placeholder="Tipo de actuación">      
                    </div>
                </th>
                    <th scope="col">
                    <div class="d-flex justify-content-center">
                        <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>   
                    </div>
                </th>
            </tr>
          </thead>
            </table>    
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
              <th scope="row">N° Documento</th>
              <th scope="row">Oficina SA</th>
              <th scope="row">N° Oficina</th>
              <th scope="row">10/08/2021</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="status">En Revision</th>
                  </div>
              </td>
              <td> 
                  <div class="tamanoTipoDocumento">
                      <select id="asignado" class="form-select" v-model="tipoDoc" @change="changeOption()">
                          <option selected value="Revisor #1">Revisor #1</option>
                          <option value="revisor #2">Revisor #2</option>
                      </select>
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

.status{
    padding-left: 5px; 
    padding-right: 5px; 
    background-color:#B9AA23;
    color: white;
    border-radius: 15px;

}

.contenedor{
    margin-top: 2em;
    color: #514BD5;
    width: 80%;

}
.right {
    margin-right: 10px;
    float: right;
    width: 80%;
    height: auto;
}

.item{
    margin-top: 5em;
    margin-bottom: 0em;
    font-family: Roboto;
    font-weight: bold;
}

.button{
    width: 20em;
    margin-top: 2em;
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
}
</style>
