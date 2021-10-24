<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Antecedentes</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    TIPO DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipoDeDocumento" class="form-select"  v-model="tipoDoc"  @change ="changeOption(), setData()">
                        <option selected value="publico">Público</option>
                        <option value="privado">Privado</option>
                    </select>
                </div>
            </div>

            <!--V-if publico-->
            <div class="col row" v-if="option == 'publico'">
                <div class="titles d-flex justify-content-start" >
                    FECHA DE OTORGAMIENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FOtorgamiento" @change =" setData()">
                </div>
            </div>
            <div class="col row" v-if="option == 'publico'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE SUSCRIPCIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FSuscripcion" @change =" setData()" placeholder="FSuscripcion">
                </div>
            </div>

            <!--V-if privado-->

            <div class="col row" v-if="option == 'privado'" >
                <div class="titles d-flex justify-content-start" >
                    FECHA DE AUTORIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FAutorizacion" @change =" setData()"  placeholder="FAutorizacion">
                </div>
            </div>
            <div class="col row" v-if="option == 'privado'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE PROTOCOLIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FProtocolizacion" @change =" setData()" placeholder="FProtocolizacion">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    N DE REPERTORIO DE NOTARIA
                </div>
                <div class="d-flex justify-content-start">
                    <input type="text" class="nrepertorioleft" placeholder="Folio" @change =" setData()" v-model="RepNotaria">-<input type="text" class="nrepertorioright" placeholder="Ano" @change =" setData()" v-model="anioRepNotaria">
                    
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col row Space">
                <div class="form-check ">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  @change =" setData()" v-model="ProhibGravEnajenar">
                    <label class="form-check-label d-flex align-items-start" for="defaultCheck1">
                        PROHIBICIÓN DE GRAVAR O ENAJENAR
                    </label>
                </div>
            </div>
            <div class="col row" v-if="rol == 'FUNCIONARIONOTARIA'">
                <div class="titles d-flex justify-content-start">
                    BIENES PRENDADOS
                </div>
                <div class="form-check" v-for="(opciones,index) in listBienesPrendados" :key="index" >
                    <input class="form-check-input" type="checkbox" :value="opciones"  @change =" setData()" :id="index">
                    <label class="form-check-label d-flex justify-content-start" :for="index">
                        {{opciones}}
                    </label>
                </div>
            </div>
            <div class="col row" v-if="rol == 'FUNCIONARIOOFICINA'">
                <div class="titles d-flex justify-content-start">
                    NOTARIAS
                </div>
                <select id="pais" class="form-select" v-model="pais"  @change ="changeOption(), setData()" >
                        
                    <option :value="notaria.name" v-for="(notaria,index) in notarias" :key="index">{{notaria.name}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                        
                </select>
            </div>
        </div>

       
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal,usernameGlobal)

export default {

  name: 'AntecedentesFormularios',
  data() {
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            option:'publico',
            tipoDoc:'publico',
            FOtorgamiento: '',
            FSuscripcion: '',
            FAutorizacion: '',
            FProtocolizacion: '',
            RepNotaria: '',
            anioRepNotaria: '',
            ProhibGravEnajenar: false,
        }
    },
    props:{
        rol: {
            type: String,
            default: "FUNCIONARIONOTARIA",
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDeDocumento");
            this.option = selectBox.options[selectBox.selectedIndex].value; 

        },
        setData(){
            this.$emit("gettipoDoc",this.tipoDoc);
            this.$emit("getFOtorgamiento",this.FOtorgamiento);
            this.$emit("getFSuscripcion",this.FSuscripcion);
            this.$emit("getFAutorizacion",this.FAutorizacion);
            this.$emit("getFProtocolizacion",this.FProtocolizacion);
            this.$emit("getRepNotaria",this.RepNotaria);
            this.$emit("getanioRepNotaria",this.anioRepNotaria);
            this.$emit("getProhibGravEnajenar",this.ProhibGravEnajenar);
            this.$emit("getBienes", [document.getElementById("0").checked, document.getElementById("1").checked, 
            document.getElementById("2").checked, document.getElementById("3").checked])
        }
    }

}
//export{tipoDoc,FOtorgamiento, FSuscripcion, FAutorizacion, FProtocolizacion, RepNotaria, anioRepNotaria, ProhibGravEnajenar}

</script>


<style scoped>

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 10%;
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
    margin-top: 0.5em;
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

.Space{
    margin-top: 2em;
}
</style>