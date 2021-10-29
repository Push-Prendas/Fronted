<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Antecedentes</div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    TIPO DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <select id="tipoDeDocumento" class="form-select"   v-model="tipoDoc"  @change ="changeOption(), setData()">
                        <option selected value="Publico">Público</option>
                        <option value="Privado">Privado</option>
                    </select>
                </div>
            </div>

            <!--V-if Publico-->
            <div class="col row" v-if="option == 'Publico'">
                <div class="titles d-flex justify-content-start" >
                    FECHA DE OTORGAMIENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FOtorgamiento" @change ="setData()" id = "FechaOtorgamiento">
                </div>
            </div>
            <div class="col row" v-if="option == 'Publico'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE SUSCRIPCIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FSuscripcion" placeholder="FSuscripcion" @change ="setData()" id = "FechaSubscripcion">
                </div>
            </div>

            <!--V-if Privado-->

            <div class="col row" v-if="option == 'Privado'" >
                <div class="titles d-flex justify-content-start" >
                    FECHA DE AUTORIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FAutorizacion" placeholder="FAutorizacion" @change ="setData()" id = "FechaAutorizacion">
                </div>
            </div>
            <div class="col row" v-if="option == 'Privado'">
                <div class="titles d-flex justify-content-start">
                    FECHA DE PROTOCOLIZACIÓN
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="FProtocolizacion" placeholder="FProtocolizacion" @change ="setData()" id = "FechaProtocolizacion">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col row">
                <div class="titles d-flex justify-content-start">
                    N DE REPERTORIO DE NOTARIA
                </div>
                <div class="d-flex justify-content-start">
                    <input type="text" class="nrepertorioleft" placeholder="Folio" @change =" setData()" v-model="RepNotaria" id="foliorepnontaria">-<input type="text" id="anorepnotaria" class="nrepertorioright" placeholder="Ano" @change =" setData()" v-model="anioRepNotaria">
                    
                </div>
            </div>
            <div class="col row Space">
                <div class="form-check ">
                    <input class="form-check-input" type="checkbox" value="" id="gravaroenajenar"  @change =" setData()" v-model="ProhibGravEnajenar">
                    <label class="form-check-label d-flex align-items-start" for="defaultCheck1">
                        PROHIBICIÓN DE GRAVAR O ENAJENAR
                    </label>
                </div>
            </div>
            
        </div>
        <div class="row">
            
            <div class="row right">
                <div class="col row">
                    <div class="titles d-flex justify-content-start">
                        BIENES PRENDADOS
                    </div>
                    <div class="form-check"  >
                        <input class="form-check-input" type="checkbox" value="ACTIVO FIJO" id="checkinscactfijo" >
                        <label class="form-check-label d-flex justify-content-start" for="actfijo">ACTIVO FIJO</label>
                        
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="BIENES AGROPECUARIOS"  id="checkinscbagropec" >
                        <label class="form-check-label d-flex justify-content-start" for="bagropec">BIENES AGROPECUARIOS</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="DERECHIS E INTANGIBLES"  id="checkinscderecheint" >
                        <label class="form-check-label d-flex justify-content-start" for="derecheint">DERECHIS E INTANGIBLES</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="VEHICULOS"  id="checkinscvehic" >
                        <label class="form-check-label d-flex justify-content-start" for="vehic">VEHICULOS</label>
                    </div>
                </div>
                
            </div>
            <div class="col row" v-if="rol == 'FUNCIONARIOOFICINA'">
                <div class="titles d-flex justify-content-start">
                    NOTARIAS
                </div>
                <select id="notaria" class="form-select" v-model="notaria"   @change ="changeOption(), setData()" >
                        
                    <option :value="notaria.organizacion" v-for="(notaria,index) in notariasP" :key="index">{{notaria.organizacion}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                        
                </select>
            </div>
        </div>

       
    </div>
</template>

<script>
import { notarias}  from "@/views/Login"

export default {

  name: 'AntecedentesFormularios',
  data() {
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            option:'Publico',
            
        }
    },
    props:{
        rol: {
            type: String,
            default: "FUNCIONARIONOTARIA",
        },
        notariasP:{
            type: Array,
            default: notarias
        },
        tipoDoc:{
            type: String,
            default: 'Público'
        },
        FOtorgamiento:{
            type: String,
            default: ''
        },
        FSuscripcion:{
            type: String,
            default: ''
        },
        FAutorizacion:{
            type: String,
            default: ''
        },
        FProtocolizacion:{
            type: String,
            default: ''
        },
        RepNotaria:{
            type: String,
            default: ''
        },
        anioRepNotaria:{
            type: String,
            default: ''
        },
        ProhibGravEnajenar:{
            type: Boolean,
            default: false
        },
        notaria:{
            type: String,
            default: ''
        },
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDeDocumento");
            this.option = selectBox.options[selectBox.selectedIndex].value; 

        },
        setData(){
            this.$emit("getNotaria",this.notaria);
            this.$emit("gettipoDoc",this.tipoDoc);
            this.$emit("getFOtorgamiento",this.FOtorgamiento);
            this.$emit("getFSuscripcion",this.FSuscripcion);
            this.$emit("getFAutorizacion",this.FAutorizacion);
            this.$emit("getFProtocolizacion",this.FProtocolizacion);
            console.log("AQUI696969")
            console.log(this.RepNotaria, this.anioRepNotaria)
            this.$emit("getRepNotaria",this.RepNotaria);
            this.$emit("getanioRepNotaria",this.anioRepNotaria);
            this.$emit("getProhibGravEnajenar",this.ProhibGravEnajenar);
            this.$emit("getBienes", [document.getElementById("0").checked, document.getElementById("1").checked, 
            document.getElementById("2").checked, document.getElementById("3").checked])

            console.log([document.getElementById("0").checked, document.getElementById("1").checked, 
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

.right{
    margin-top:0%;
    margin-right: 4%;
    margin-left: 64%;

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