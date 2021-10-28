<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Acreedor</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    TIPO DE PERSONA
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipodepersona" class="form-select" v-model="tipoPersona" @change ="changeOption(), setData()">
                        <option selected value="Natural">Natural</option>
                        <option value="Juridica">Juridica</option>
                        <option value="Extranjero">Extranjero</option>
                    </select>
                </div>
            </div>

            <!--V-if Publico-->
            <div class="col row" v-if="option == 'Natural'">
                <div class="titles d-flex justify-content-start" >
                    RUN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="run" id="runacreedor" @change ="setData()" >
                </div>
            </div>
            <div class="col row" v-if="option == 'Extranjero'">
                <div class="titles d-flex justify-content-start" >
                    ID
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="id" id="runacreedor" @change ="setData()">
                </div>
            </div>
            <div class="col row" v-if="option == 'Extranjero'">
                <div class="titles d-flex justify-content-start" >
                    PAÍS
                </div>
                <div class="tamanoTipoDocumento">
                    <select  class="form-select" id="paisacreedor"  v-model="pais" @change ="changeOption(), getData()" >
                        <option :value="country.name" v-for="(country,index) in countries" :key="index">{{country.name}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                        
                    </select>
                </div>
            </div>
            <div class="col row" v-if="option == 'Juridica'">
                <div class="titles d-flex justify-content-start" >
                    RUT
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="rut" id="runacreedor" @change ="setData()">
                </div>
            </div>
            <div class="col row" v-if="option == 'Juridica'">
                <div class="titles d-flex justify-content-start" >
                   RAZÓN SOCIAL
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="razonsocial" id="nombresacreedor" @change ="setData()">
                </div>
            </div>
        </div>
 
        <div class="row" v-if="option == 'Natural'">
            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    APELLIDO PATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="Apaterno" id="apellidopaterno" @change ="setData()">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    APELLIDO MATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="Amaterno" id="apellidomaterno" @change ="setData()">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    NOMBRES
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="nombres" id="nombresacreedor" @change ="setData()">
                </div>
            </div>
        </div>
        <div class="row" v-if="option == 'Extranjero'">
            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    NOMBRE COMPLETO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="nombrecompleto" id="nombrecompleto" @change ="setData()">
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import * as Countries from '../data/countries.js';
export default {
  name: 'AcreedorFormularios',
  data() {
      const countries= Countries.default.countries;
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            countries,
        }
    },
    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },
        setData(){
            this.$emit("gettipoPersona",this.tipoPersona.toString());
            this.$emit("getrun",this.run.toString());
            this.$emit("getid",this.id.toString());
            this.$emit("getpais",this.pais.toString());
            this.$emit("getrut",this.rut.toString());
            this.$emit("getrazonsocial",this.razonsocial.toString());
            this.$emit("getApaterno",this.Apaterno.toString());
            this.$emit("getAmaterno",this.Amaterno.toString());
            this.$emit("getnombres",this.nombres.toString());
        }
    },
    props:{
        nombrecompleto:{
            type: String,
            default: '',
        },
        tipoPersona:{
            type: String,
            default: 'Natural',
            },
        run:{
            type: String,
            default: '',
            },
        id:{
            type: String,
            default: '',
            },
        pais:{
            type: String,
            default: 'Chile',
            },
        rut:{
            type: String,
            default: '',
            },
        razonsocial:{
            type: String,
            default: '',
            },
        Apaterno:{
            type: String,
            default: '',
            },
        Amaterno:{
            type: String,
            default: '',
            },
        nombres:{
            type: String,
            default: '',
            },

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