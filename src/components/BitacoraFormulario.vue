<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col" @change ="setData()">Bitacora</div> 
            <table class="table" >
                <thead class="encabezadoTabla">
                    <tr>
                    <th scope="col">Comentario</th>
                    <th scope="col">Fecha de Cambio</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">estadoPrimario</th>
                    </tr>
                </thead>
                <tbody class="bodyTabla" v-if="items.length == 0">
                    <td>No data</td>
                </tbody>
                <tbody class="bodyTabla" v-else v-for="(item,index) in items" id="tablapatentesinscripcion" :key="index">
                    <td>{{item.comment}}</td>
                    <td>{{item.fechaCambio}}</td>

                    <td v-if="item.idInscripcion != ''">I</td>
                    <td v-if="item.idAlzamiento != '' ">A</td>
                    <td v-if="item.idModificacion != ''" >M</td>




                    <td v-if="item.estadoPrimario == 0" >Guardado</td>
                    <td v-if="item.estadoPrimario == 1" >Enviado desde notaria</td>
                    <td v-if="item.estadoPrimario == 2" >Rechazado de notaria</td>
                    <td v-if="item.estadoPrimario == 3" >Enviado desde oficina </td>
                    <td v-if="item.estadoPrimario == 4" >En revision </td>
                    <td v-if="item.estadoPrimario == 5" >Aceptado</td>
                    <td v-if="item.estadoPrimario == 6" >Rechazo de Revisor</td>
                    <td v-if="item.estadoPrimario == 7" >Rechazo de Jefe de Unidad de Prenda</td>
                    <td v-if="item.estadoPrimario == 8" >Rechazo notificado</td>


                </tbody>
    
            </table> 
        </div>

    </div>
</template>

<script>
import { collection, getDocs} from "firebase/firestore";
import {db} from "@/main";
export default {
  name: 'AcreedorFormularios',
  data() {
        return {
            headers: ['Tipo', 'Id', 'Name'],
        }
    },props:{

        items:{
            type: Array,
            default: new Array,
        },
		comentario:{
            type: String,
            default: ''
        },
		fecha:{
            type: Boolean,
            default: false,
        },

    },
    mounted(){
        this.items = []

        
        getDocs(collection(db,"Bitacora")).then((bit) => { 

            console.log("BITACORA")

            bit.docs.forEach(element => {
                if(element.data().idInscripcion == localStorage.idSol || element.data().idAlzamiento == localStorage.idSol || element.data().idModificacion == localStorage.idSol){
                    this.items.push(element.data())
                }
                
                
            });

        })
        console.log("MY ITEMS")
        console.log(this.items)


    },

    methods:{
        setData(){
            //this.$emit("getAnexos", document.getElementById("anexos").files)

        }
    }

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