<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col">Vehiculos </div> 
            <b-button v-b-modal.modal-2 class="col buttonAdd">+</b-button>

            <b-modal id="modal-2"  hide-footer>
                <!--AQUI TODO LO QUE TIENE QUE VER CON AGREGAR VEHICULO-->
                <div class="row">
                    <div class="d-flex justify-content-center titleModal">Vehiculos </div> 
                    <div class="row">
                        <div class="col row">
                            <div class="titles d-flex justify-content-start" >
                                PATENTE
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="textPatente" type="text" v-model="patente">
                            </div>
                        </div>
                        <div class="col row">
                            <div class="titles d-flex justify-content-start" >
                                RVM
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="textRVM" type="text" v-model="rvm">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center SpaceItems">
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheckGE" v-model="GoE">
                            <label class="form-check-label d-flex align-items-start" for="defaultCheckGE">
                                PROHIBICIÓN DE GRAVAR O ENAJENAR
                            </label>
                        </div>
                    </div>
                </div>
                
                <b-button id="ADDVEHICULO" @click="add(), setData()">Agregar Vehículo</b-button>
            </b-modal>   
        </div>
        
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">PATENTE</th>
                <th scope="col">RVM</th>
                <th scope="col">GRAVAR/ENAJENAR</th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index">
                <td>{{item.patente}}</td>
                <td>{{item.rvm}}</td>
                <td>{{item.GoE}}</td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
export default {
  name: 'AcreedorFormularios',
  data() {
        return {
            option:'natural',
            items: [],
            patente:"",
            GoE:false,
            rvm:""
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },
        add() {
            let item = {
                "patente": this.patente,
                "rvm": this.rvm,
                "GoE": this.GoE}
            this.items.push(item);
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