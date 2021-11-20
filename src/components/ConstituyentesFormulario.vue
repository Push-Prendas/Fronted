<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col">Constituyentes </div> 
            <b-button v-b-modal.modal-1 class="col buttonAdd" v-if="modo == 'Escribir'">+</b-button>

            <b-modal id="modal-1" hide-footer v-if="modo == 'Escribir'">
                <div class="row">
                    <div class="d-flex justify-content-center titleModal">CONSTITUYENTE </div> 
                    <div class="col row">
                        <div class="titles d-flex justify-content-start">
                            TIPO DE PERSONA
                        </div>
                        <div class="tamanoTipoDocumento">
                            <select id="tipoDePersonaConstituyente" v-model="tipoDePersonaConstituyente" class="form-select" @change ="changeOption(), setData(), clean(), setVars()">
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
                            <input type="text" v-model="run" id="run" >
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Extranjero'">
                        <div class="titles d-flex justify-content-start" >
                            ID
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="id" id="id"  >
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Juridica'">
                        <div class="titles d-flex justify-content-start" >
                            RUT
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="rut" id="rut"  >
                        </div>
                    </div>
                    <div class="row" v-if="option == 'Juridica'">
                        <div class="titles d-flex justify-content-start" >
                            RAZON SOCIAL
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input type="text" v-model="razonsocial" id="razonsocial" @input="razonsocial=razonsocial.toUpperCase()" >
                        </div>
                    </div>
                    
                </div>
                <button id="btncheckacreedor" @click="check()" class="col buttonAdd2" v-if="option == 'Natural' && !checked">Checkear datos</button>
                <div class="row" v-if="option == 'Natural' && checked">
                    <div class="col row" >
                            <div class="titles d-flex" >
                                APELLIDO PATERNO
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="apellidopaterno" type="text" v-model="apellidopaterno"  @input="apellidopaterno=apellidopaterno.toUpperCase()">
                            </div>
                    </div>
                    <div class="col row">
                            <div class="titles d-flex " >
                               APELLIDO MATERNO
                            </div>
                            <div class="tamanoTipoDocumento">
                                <input id="apellidomaterno" type="text" v-model="apellidomaterno"  @input="apellidomaterno=apellidomaterno.toUpperCase()">
                            </div>
                    </div>
                    <div class="row">
                        <div class="titles d-flex " >
                            NOMBRES
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nombres" type="text" v-model="nombres"  @input="nombres=nombres.toUpperCase()">
                        </div>
                    </div>
                    
            
                </div>
                <div class="row" v-if="option == 'Extranjero'">
                    <div class="col row">
                        <div class="titles d-flex " >
                            NOMBRE COMPLETO
                        </div>
                        <div class="tamanoTipoDocumento">
                            <input id="nonmbrecompleto" type="text" v-model="nombrecompleto"  @input="nombrecompleto=nombrecompleto.toUpperCase()">
                        </div>
                    </div>
                    <div class="col row" v-if="option == 'Extranjero'">
                        <div class="titles d-flex justify-content-start" >
                            PAÍS
                        </div>
                        <div class="tamanoTipoDocumento">
                            <select  class="form-select" id="pais"  v-model="pais" @change ="changeOption(), getData()" >
                                <option :value="country.name" v-for="(country,index) in countries" :key="index">{{country.name}}</option>  <!--CREAR UNA LISTA CON TODOS LOS PAISES-->
                                
                            </select>
                        </div>
                    </div>
                </div>
                <b-button id="ADDConstituyente" @click="add(), setData(), clean()">Agregar Constituyente</b-button>
                
            </b-modal>    
        </div>
        
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col">TIPO DE PERSONA</th>
                <th scope="col">IDENTIFICADOR</th>
                <th scope="col">NOMBRE/RAZON</th>
                <th scope="col">PAIS</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" id="tablaconstituyentes" v-else v-for="(item,index) in items" :key="index" @change =" setData()">
                <td >{{item.Tipo}}</td>
                <td >{{item.Id}}</td>
                <td >{{item.Name}}</td>
                <td >{{item.Pais}}</td>
                <td><p type="button" @click="borrar(index), setData()">X</p></td>
            </tbody>
 
        </table> 
         
    </div>
</template>
<script>

import * as Countries from '../data/countries.js';
export default {

    mounted(){
        this.items.length=0;
        if(this.rol != "FUNCIONARIOOFICINA"){
            this.checked = true
        }
    },
  name: 'ConstituyenteFormulario',
  data() {
      const countries= Countries.default.countries;
        return {
            option:'Natural',
            countries,
            idDocumento:'',
            nombrePersona: '',
            pais: 'Chile',
            rol: localStorage.rol,
            checked: false
        }
    },
    props: {
        items: {
            type: Array,
            default: new Array(),
        },
         nombrecompleto:{
            type: String,
            default: '',
        },
        modo:String,
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
            var selectBox = document.getElementById("tipoDePersonaConstituyente");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            //console.log(this.option);
        },
        check(){
            var run = document.getElementById("run").value
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
                            document.getElementById("btncheckacreedor").style.display = "none"
                            setTimeout(() => {
                                document.getElementById("apellidopaterno").value = reqResult.apellido_paterno
                                document.getElementById("apellidomaterno").value = reqResult.apellido_materno
                                document.getElementById("nombres").value = reqResult.nombres
                                this.nombres = reqResult.nombres
                                this.apellidopaterno = reqResult.apellido_paterno
                                this.apellidomaterno = reqResult.apellido_materno
                            }, 300);

                        }
                        else{
                            alert(reqResult.msg)
                        }
                    }
                }
            }           
        },
        borrar(index){
            this.items.splice(index,1);
            
        },
        clean(){
            console.log("MYDATA")
            console.log("limpiar campos aqui")

        },
        setData(){
            this.$emit("getConstituyentes",this.items);
            var constitu = []
            this.items.forEach(cons => {
                constitu.push('"'+cons.Id+'"')
                
            });
            localStorage.constituyentes = constitu
        },
        add() {
            var oReq = new XMLHttpRequest();
            var url = ""
            if(this.option == "Natural"){
                url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + this.run
            }
            else if(this.option == "Juridica"){
                url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + this.rut
            }
            else if(this.option == "Extranjero"){
                url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + this.id
            }     
            console.log("jhajs");      
            oReq.open("GET", url);
            oReq.send();
            oReq.onload = ()=>{
                if(oReq.status == 200){
                    var reqResult = JSON.parse(oReq.response);
                    if (reqResult.valid){
                        if(this.option=="Natural"){
                        let item = {
                            "Tipo": this.option,
                            "Id": this.run,
                            "Name": this.nombres+' '+this.apellidopaterno+' '+this.apellidomaterno,
                            "Pais": this.pais}
                        this.items.push(item);
                        }else if(this.option=="Juridica"){
                            let item = {
                                "Tipo": this.option,
                                "Id": this.rut,
                                "Name": this.razonsocial,
                                "Pais": this.pais}
                            this.items.push(item);
                        }else if(this.option=="Extranjero"){
                            let item = {
                                "Tipo": this.option,
                                "Id": this.id,
                                "Name": this.nombrecompleto,
                                "Pais": this.pais}
                            this.items.push(item);
                        }
                        this.run ="";
                        this.nombres="";
                        this.apellidopaterno="";
                        this.apellidomaterno="";
                        this. pais="Chile";
                        this.option="Natural";
                        this.rut="";
                        this.razonsocial="";
                        this.id="";
                        this.nombrecompleto="";
                        this.checked = false;
                    }
                    else{
                        alert(reqResult.msg)
                    }
                }
                else{
                    alert("No se mando correctamente la persona, intentelo de nuevo")
                }

            }
            var constitu = []
            this.items.forEach(cons => {
                constitu.push('"'+cons.Id+'"')
                
            });
            localStorage.constituyentes = constitu
            
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

#ADDConstituyente{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    margin-top: 2em;
}

.buttonAdd2{
    background: #d54b4b;
    color: white;
    border-radius: 15em;
    padding: 0em;
    margin-left: 10em;
    margin-right: 30em;
    height: 2em;
}

</style>