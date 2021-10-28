<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Requirente</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    NOMBRE COMPLETO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="nombreCompleto" id="nombrecompleto" @change ="setData()">
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    N DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="NdeDocumento" id="ndedocumento" @change ="setData()">
                </div>
            </div>
            
            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    CORREO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="correo" id="correo" @change ="setData()">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                   FECHA
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="fecha" id="fecha" @change ="setData()">
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
    props:{
        nombreCompleto:{
            type: String,
            default: '',
        },
        NdeDocumento:{
            type: String,
            default: '',
        },
        correo:{
            type: String,
            default: '',
        },
        fecha:{
            type: String,
            default: '',
        }, 
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

    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },
        setData(){
            this.$emit("getnombreRequirente",this.nombreCompleto.toString());
            this.$emit("getrutRequirente",this.NdeDocumento.toString());
            this.$emit("getCorreoRequirente",this.correo.toString());
            this.$emit("getFechaRequirente",this.fecha.toString());
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