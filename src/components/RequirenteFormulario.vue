<template>
    <div id="contenedor" class="row">
        <div class="titleFormulario">Requirente</div>
        <button id="btncheckacreedor" @click="check()" class="col buttonAdd" >Checkear datos</button>


        <div class="row" v-if="checked">
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                    NOMBRE COMPLETO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="nombreCompleto" id="nombrecompletorequirente" @change ="setData()">
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    N DE DOCUMENTO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="NdeDocumento" id="ndedocumentorequirente" @change ="setData()">
                </div>
            </div>
            
            <div class="col row" >
                <div class="titles d-flex justify-content-start" >
                    CORREO
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="text" v-model="correo" id="correorequirente" @change ="setData()">
                </div>
            </div>
            <div class="col row">
                <div class="titles d-flex justify-content-start" >
                   FECHA
                </div>
                <div class="tamanoTipoDocumento">
                    <input type="date" v-model="fecha" id="fecharequirente" @change ="setData()">
                </div>
            </div>
        </div>
 
        
        
    </div>
</template>

<script>
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
import * as Countries from '../data/countries.js';
export default {
  mounted(){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      document.getElementById("fecharequirente").value = date
  },
  name: 'AcreedorFormularios',
  data() {
      const countries= Countries.default.countries;
        return {
            listBienesPrendados:["ACTIVO FIJO",'BIENES AGROPECUARIOS','DERECHOS E INTANGIBLES','VEHICULOS'],
            countries, 
            checked: false,
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
            default: date,
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
        },
        check(){
            var run = document.getElementById("ndedocumentorequirente").value
            if(run == ""){
                alert("No hay ningun run ingresado")
            }
            else{
                var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + run
                var oReq = new XMLHttpRequest();
                oReq.open("GET", url);
                oReq.send();
                oReq.onload = ()=>{
                    if(oReq.status == 200){
                        var reqResult = JSON.parse(oReq.response);
                        if (reqResult.valid){
                            this.checked = true
                            document.getElementById("btncheckacreedor").style.background = "#5bd54b"
                            setTimeout(() => {
                                document.getElementById("nombrecompletorequirente").value = reqResult.nombres + " " + reqResult.apellido_paterno + " " + reqResult.apellido_materno
                                var today = new Date();
                                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                                document.getElementById("fecharequirente").value = date
                            }, 300);

                        }
                        else{
                            alert(reqResult.msg)
                        }
                    }
                }
            }             
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

.buttonAdd{
    background: #d54b4b;
    color: white;
    border-radius: 15em;
    width: 1em;
    padding: 0em;
    margin-left: 10em;
    margin-right: 30em;
    height: 2em;
}
</style>