<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Requirente</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    APELLIDO PATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    APELLIDO MATERNO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    NOMBRES
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    N DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
                </div>
            </div>
            
            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    CORREO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                   FECHA
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text">
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
            option:'natural',
            countries
            
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            console.log(this.option);
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