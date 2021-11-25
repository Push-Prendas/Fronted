<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario" >Vehiculos </div> 
        
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">PATENTE</th>
                <th scope="col">RVM</th>
                <th scope="col">GRAVAR/ENAJENAR</th>
                <th scope="col">ESTADO</th>
                <th scope="col" v-if="tipoSolicitud != 'RevisionDoc'">COSTO</th>
                <th scope="col" v-if="tipoSolicitud == 'Modificacion'"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" id="tablapatenteslectura" :key="index">
                <td>{{item.patente}}</td>
                <td>{{item.rvm}}</td>
                <td>{{item.GoE}}</td>
                <td>{{item.estado}}</td>
                <td v-if="tipoSolicitud != 'RevisionDoc' && item.costo != null">

		
					{{item.costo}}
	

				</td>
                <td v-if="tipoSolicitud == 'Modificacion'"> 
                    <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" :id="index.toString()+'P'" >
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
            hola:''
        }
    },
    props: {
        opcion:Array,
        tipoSolicitud:{
            type: String,
            default: 'Modificacion'
        },
		tipoModificacion:{
			type: String,
			default: 'normal'
		},
		items:{
            type: Array,
            default: new Array,
        },
		patente:{
            type: String,
            default: ''
        },
		GoE:{
            type: Boolean,
            default: false,
        },
		rvm:{
            type: Boolean,
            default: false
        },
		estado:{
            type: String,
            default: ''
        },
    },
    methods:{
        getPatentes(){
            console.log("DATA")
            //buscador_especifico_solicitud(12,'I')
            //this.items=patentes_relacionadas
        
        },
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },

        clean(){
            console.log("limpiar campos aqui")

        },
        setData(){
            this.$emit("getVehiculos",this.items);
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