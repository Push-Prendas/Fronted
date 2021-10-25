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
                <td>${{item.monto}}</td>
                <td >
                    <p class="titleFormulario">{item.estado}} </p>
                </td>
                <td>
                    <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" id="ChecbboxPagos" >
                    </div>
                </td>
            </tbody>
 
        </table>
        <div class="d-flex justify-content-end">
            <p> $MONTO </p> <button class="col-2 titleButton ">Pagar</button> 
        </div>
        
         
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
console.log(usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal)

export default {
  name: 'PagosPendientes',
  data() {
        return {
            items: [{}],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Documento','Notaria', 'N° Notaria', 'Fecha','Monto', 'Estado'],
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
    width:10em;
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

.titleButton{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #CD0E1F;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
}
</style>