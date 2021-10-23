<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Acreedor</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    TIPO DE PERSONA
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipoDePersona" class="form-select" v-model="tipoPersona" @change ="changeOption()">
                        <option selected value="natural">Natural</option>
                        <option value="juridico">Juridica</option>
                        <option value="extranjero">Extranjero</option>
                    </select>
                </div>
            </div>

            <!--V-if publico-->
            <div class="col row" v-if="option == 'natural'">
                <div class="titles d-flex justify-content-start" >
                    RUN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="run">
                </div>
            </div>
            <div class="col row" v-if="option == 'extranjero'">
                <div class="titles d-flex justify-content-start" >
                    ID
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="id">
                </div>
            </div>
            <div class="col row" v-if="option == 'extranjero'">
                <div class="titles d-flex justify-content-start" >
                    PAÍS
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="pais" class="form-select" v-model="pais" @change ="changeOption()" >
                        
                        <option :value="country.name" v-for="(country,index) in countries" :key="index">{{country.name}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                        
                    </select>
                </div>
            </div>
            <div class="col row" v-if="option == 'juridico'">
                <div class="titles d-flex justify-content-start" >
                    RUT
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="rut">
                </div>
            </div>
            <div class="col row" v-if="option == 'juridico'">
                <div class="titles d-flex justify-content-start" >
                   RAZÓN SOCIAL
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="razonsocial">
                </div>
            </div>
        </div>
 
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    APELLIDO PATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="Apaterno">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    APELLIDO MATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="Amaterno">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    NOMBRES
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="nombres">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal,usernameGlobal)
import * as Countries from '../data/countries.js';
export default {
  name: 'AcreedorFormularios',
  data() {
      const countries= Countries.default.countries;
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            option:'natural',
            countries,
            tipoPersona:'Natural',
            run: '',
            id: '',
            pais: '',
            rut: '',
            razonsocial: '',
            Apaterno: '',
            Amaterno: '',
            nombres: '',
            
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            console.log(this.option);
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