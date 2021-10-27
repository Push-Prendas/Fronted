<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col">Deudores </div> 
            <b-button v-b-modal.modal-3 class="col buttonAdd">+</b-button>

            <b-modal id="modal-3" hide-footer>
                <div class="row">
                    <div class="d-flex justify-content-center titleModal">DEUDOR </div> 
                   <div class="col row">
                        <div class="titles d-flex justify-content-start">
                            TIPO DE PERSONA
                        </div>
                        <div class="tamanoTipoDocumento">
                            <select id="tipoDePersonaDeudor" class="form-select" @change ="changeOption(), setData(), clean()">
                                <option selected value="Natural">Natural</option>
                                <option value="Juridica">Juridica</option>
                                <option value="Extranjero">Extranjero</option>
                            </select>
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Natural'">
                        <div class="titles d-flex justify-content-start" >
                            RUN
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="idDocumento" id="run">
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Extranjero'">
                        <div class="titles d-flex justify-content-start" >
                            ID
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="idDocumento" id="id">
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Juridica'">
                        <div class="titles d-flex justify-content-start" >
                            RUT
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="idDocumento" id="rut">
                        </div>
                    </div>
                    <div class="row">
                    <div class="col row" v-if="option == 'natural'">
                            <div class="titles d-flex justify-content-start" >
                                NOMBRE COMPLETO
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="nombre" type="text" v-model="nombrePersona">
                            </div>
                    </div>

                        <div class="col row" v-if="option == 'juridico'">
                            <div class="titles d-flex justify-content-start" >
                                RAZON SOCIAL
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input type="text" v-model="nombrePersona" id="razonsocial">

                            </div>


                        </div>

                        <div class="col row" v-if="option == 'extranjero'">
                            <div class="titles d-flex justify-content-start" >
                                NOMBRE COMPLETO
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input type="text" v-model="nombrePersona" id="nombrePersona">
                            </div>

                            <div class="titles d-flex justify-content-start" >
                                PAÍS
                            </div>
                            <div class="tamanoTipoDocumento">
                                <select id="pais" class="form-select" v-model="pais" @change ="changeOption(), getData()" >
                                    
                                    <option :value="country.name" v-for="(country,index) in countries" :key="index">{{country.name}}       
                                    </option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                                    
                                </select>
                            </div>



                        </div>




                    </div>
                    <div class="col row">
                            <div class="titles d-flex " >
                               APELLIDO MATERNO
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="nombre" type="text" v-model="nombrePersona">
                            </div>
                    </div>
                    <div class="row">
                        <div class="titles d-flex " >
                            NOMBRES
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombre" type="text" v-model="nombrePersona">
                        </div>
                    </div>
                    
            
                </div>
                <div class="row" v-if="option == 'Extranjero'">
                    <div class="col row">
                        <div class="titles d-flex " >
                            NOMBRE COMPLETO
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombre" type="text" v-model="nombrePersona">
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Extranjero'">
                        <div class="titles d-flex justify-content-start" >
                            PAÍS
                        </div>
                        <div class="tamanoTipoDocumento">
                            <select  class="form-select"  v-model="pais" @change ="changeOption(), getData()" >
                                <option :value="country.name" v-for="(country,index) in countries" :key="index">{{country.name}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                                
                            </select>
                        </div>
                    </div>
                </div>
                <b-button id="ADDDeudor" @click="add(), setData(), clean()">Agregar Deudor</b-button>
            </b-modal>    
        </div>
        
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">TIPO DE PERSONA</th>
                <th scope="col">IDENTIFICADOR</th>
                <th scope="col">NOMBRE/RAZON</th>
                <th scope="col">PAIS</th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index" @change =" setData()">
                <td>{{item.Tipo}}</td>
                <td>{{item.Id}}</td>
                <td>{{item.Name}}</td>  
                <td>{{item.pais}}</td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
import * as Countries from '../data/countries.js';
export default {
    
  name: 'AcreedorFormularios',
  data() {
      const countries= Countries.default.countries;
        return {
            option:'Natural',
            headers: ['Tipo', 'Id', 'Name'],
            items: [],
            idDocumento:"",
            nombrePersona: "",
            razonsocial: "",
            countries,
            pais:"",
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersonaDeudor");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
        },
        add() {
            let item = {
                "Tipo": this.option,
                "Id": this.idDocumento,
                "Name": this.nombrePersona,
                "pais": this.pais}
            this.items.push(item);
            this.option="Natural";
            this.idDocumento="";
            this.nombrePersona="";
            this.pais="";
        },
        clean(){
            console.log("limpiar campos aqui")

        },
        setData(){
            this.$emit("getDeudores",this.items);
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
#ADDDeudor{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    margin-top: 2em;
}
</style>