<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Vehiculos </div> 
        
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">PATENTE</th>
                <th scope="col">RVM</th>
                <th scope="col">GRAVAR/ENAJENAR</th>
                <th scope="col">ESTADO</th>
                <th scope="col">COSTO</th>
                <th scope="col" v-if="tipoSolicitud == 'Moficacion'"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.patente}}</td>
                <td>{{item.rvm}}</td>
                <td>{{item.GoE}}</td>
                <td>{{item.estado}}</td>
                <td>{{item.costo}}</td>
                <td v-if="tipoSolicitud == 'Moficacion'"> 
                    <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck" >
                    </div>
                </td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
export default {
  name: 'AcreedorFormularios',
  data() {
        return {
            items: [{}],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
        }
    },
    props: {
        opcion:Array,
        tipoSolicitud:{
            type: String,
            default: 'Modificacion'
        },
        
  },

}

</script>

<style scoped>

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

.titleModal{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
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

.encabezadoTabla{
    background:#CEF1FF;
    color: #514BD5;
    border-top-left-radius: 5em;
    border-radius: 15em 0em 0em 15em;
}

.bodyTabla{
    background: #E5E5E5;
}


.buttonAdd{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    width: 1em;
    padding: 0em;
    margin-left: 10em;
    margin-right: 30em;
    height: 2em;
}

.SpaceItems{
    margin-top: 2em;
}

#ADDVEHICULO{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    margin-top: 2em;
}
</style>