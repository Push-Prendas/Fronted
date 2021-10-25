<template>
    <div id="contenedor" class="row">     
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col" v-for="(thead,index) in thread" :key="index">{{thead}}</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index">
                <td>{{item.documento}}</td>
                <td>{{item.nNotaria}}</td>
                <td>{{item.funcionario}}</td>
                <td>{{item.fecha}}</td>
                <td >
                    <p class="titleFormulario">{item.estado}} </p>
                </td>
                <td>
                    <a class="logout" :href="'/Dashboard/NOTARIO/'+username+'/RevisionDoc'"><font-awesome-icon style= "margin-right:5px" icon="file-download" /> </A>
                </td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
export default {
  name: 'MisSolicitudesNotario',
  data() {
        return {
            items: [{}],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Documento', 'N° Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: usernameGlobal
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
    background: #23B928;
    border-radius: 15em;
}


.encabezadoTabla{
    background:#CEF1FF;
    color: #514BD5;
    border-top-left-radius: 5em;
    border-radius: 15em 0em 0em 15em;
}

.bodyTabla{
    background: #E5E5E5;
    margin:0.5em;
}

.SpaceItems{
    margin-top: 2em;
}
</style>