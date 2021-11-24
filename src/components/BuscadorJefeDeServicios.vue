<template>
    <div id="TablaRevisor">
        <div style="padding:50px; margin-left:300px">
        <table class="table table-sm table-hover zui-table-rounded" >
               
          <thead style="color: black;">
            <tr>
                <th scope="col">
                    Nº Repertorio Prenda
                    <div class="d-flex justify-content-center">
                        
                        <input type="text"  id="foliorep" placeholder="N° Rep Prenda">      
                    </div>
                </th>
                <th scope="col">
                    Nº Repertorio Notaria
                    <div class="d-flex justify-content-center">
                        
                        <input type="text"  id="folionot" placeholder="N° Rep Notaria">      
                    </div>
                </th>
                <th scope="col">
                    Identificador Contratante
                    <div class="d-flex justify-content-center">
                        <input type="text" id="idcont" placeholder="Identificador Contratante">      
                    </div>
                </th>
                <th scope="col">
                    Identificador Transaccion
                    <div class="d-flex justify-content-center">
                        <input type="text" id="idtran" placeholder="Identificador Transaccion">      
                    </div>
                </th>
                <th scope="col">
                    <div class="d-flex justify-content-center">
                        <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>   
                    </div>
                </th>
            </tr>
          </thead>
            </table>    
           <table class="table table-sm table-hover zui-table-rounded" >
               
          <thead style="color: white;background-color: #514BD5;">
            <tr>
              <th scope="col">N° Rep Prenda</th>
              <th scope="col">N° Rep Notaria</th>
              <th scope="col">Oficina/Notaria</th>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo</th>
              <th scope="col">Estado</th>
              <th scope="col">Asignada</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{item.Rep}}</th>
              <th scope="row">{{item.Not}}</th>
              <th scope="row">{{item.Oficina}}</th>
              <th scope="row">{{item.Fecha}}</th>
              <th scope="row">{{item.Tipo}}</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="status">{{item.Estado}}</th>
                  </div>
              </td>
              <td> 
                  <div >
                      <select id="asignado" class="form-select" v-model="tipoDoc" @change="changeOption()">
                          <option selected value="Revisor #1">Revisor #1</option>
                          <option value="revisor #2">Revisor #2</option>
                      </select>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>

import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";

var inscripciones_encontradasGlobal = []
var modificaciones_encontradasGlobal = []
var alzamientos_encontradosGlobal = []


async function buscar_solcitud_por_requisito(num_notaria = "", num_prenda = "", run = "", transaction_id = ""){
    inscripciones_encontradasGlobal = []
    modificaciones_encontradasGlobal = []
    alzamientos_encontradosGlobal = []
	////DETALLE: USAR ESTADO Y ID ES NUMERO REPERTORIO PRENDA
	//DEVUELVE EL ID DE LA SOLICITUD QUE CUMPLA CON LOS REQUISITOS ANTES MENCIONADOS
    console.log("PARAMETROS")
    console.log("buscar inscripciones")	
    getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((per_data) => {
        var my_docs = per_data.docs
        console.log("Largo documento inscricpion: " + my_docs.length)
        my_docs.forEach((d) => {
            var my_sol = d.data();
            var my_id = d.id;
            if(my_sol.estadoSecundario > 0){
                if((num_notaria == "" || num_notaria == my_sol.numeroRepertorioNotario) && 
                (num_prenda == "" || num_prenda == my_sol.numeroRepertorioContratoPrenda) && 
                (transaction_id == "" || transaction_id == my_sol.id_transaccion)){
                    getDocs(collection(db, "Persona_Solicitud")).then((p) => {
                        var per_docs = p.docs
                        var id=[]
                        per_docs.forEach((p) => {
                            var my_pData = p.data();
                            if((run == "" || (run == my_pData.runPersona && my_id == my_pData.idInscripcion))){
                                if( !id.includes(my_id) ){
                                    id.push(my_id)
                                    inscripciones_encontradasGlobal.push([my_id, my_sol])
                                }  
                            }
                        })
                    })
                }
            }
        })
    })
    console.log("buscar modificaciones")	
    getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((per_data) => {
        var my_docs = per_data.docs
        console.log("Largo documento modificacion: " + my_docs.length)
        my_docs.forEach((d) => {
            var my_sol = d.data();
            var my_id = my_sol.numeroRepertorioContratoPrenda
            if(my_sol.estadoSecundario > 0){
                if((num_notaria == "" || num_notaria == my_sol.numeroRepertorioNotario) && 
                (num_prenda == "" || num_prenda == my_sol.numeroRepertorioContratoPrenda) && 
                (transaction_id == "" || transaction_id == my_sol.id_transaccion) && 
                (run == "" || run == my_sol.rut_acreedor)){
                    modificaciones_encontradasGlobal.push([my_id, my_sol])
                }       
            }
        })
    })
    console.log("buscar alzamientos")
    getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((per_data) => {
        var my_docs = per_data.docs
        console.log("Largo documento alzamiento: " + my_docs.length)
        my_docs.forEach((d) => {
            var my_sol = d.data();
            var my_id = my_sol.numeroRepertorioContratoPrenda
            if(my_sol.estadoSecundario > 0){
                if((num_notaria == "" || num_notaria == my_sol.numeroRepertorioNotario) && 
                (num_prenda == "" || num_prenda == my_sol.numeroRepertorioContratoPrenda) && 
                (transaction_id == "" || transaction_id == my_sol.id_transaccion) && 
                (run == "" || run == my_sol.rut_acreedor)){
                    alzamientos_encontradosGlobal.push([my_id, my_sol])
                }               
            }
        })
    })
	//TODAS LAS COSAS ENCONTRADAS
	//FRONTEND MODIFIQUE DE AQUI


	///////////////////////////
}

export default {
  mounted(){
      this.items = []
      this.inscripciones_encontradas = []
      this.modificaciones_encontradas = []
      this.alzamientos_encontrados = []
      inscripciones_encontradasGlobal = []
      modificaciones_encontradasGlobal = []
      alzamientos_encontradosGlobal = []
      buscar_solcitud_por_requisito()
      setTimeout(() => {
              if(this.inscripciones_encontradas.length > 0){
                  this.inscripciones_encontradas.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "I"}
                        this.items.push(item)               
                  })
              }
              if(this.modificaciones_encontradas.length > 0){
                  this.modificaciones_encontradas.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "M"}
                        this.items.push(item)               
                  })
              }
              if(this.alzamientos_encontrados.length > 0){
                  this.alzamientos_encontrados.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "A"}
                        this.items.push(item)               
                  })
              }
          }, 1500)

  },
  name: 'TablaRevisor',
  props: {
        opcion:Array,
        username:{
            type: String,
            default: 'Hola!'
        },
        rol :  {
            type: String,
            default: "REVISOR"
        }
  },
  data() {
        return {
            items: [],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal
        }
    },
  methods:{
      busqueda(){
          this.items = []
          this.inscripciones_encontradas = []
          this.modificaciones_encontradas = []
          this.alzamientos_encontrados = []
          inscripciones_encontradasGlobal = []
          modificaciones_encontradasGlobal = []
          alzamientos_encontradosGlobal = []
          console.log("BUSCANDO...")
          const folioRep = document.getElementById('foliorep').value
          const folioNot = document.getElementById('folionot').value
          const idCont = document.getElementById('idcont').value
          const tranId = document.getElementById('idtran').value
          console.log("INSCRIPCIONES ENCONTRADAS98: " + inscripciones_encontradasGlobal.length +" y "+ this.inscripciones_encontradas.length)
          buscar_solcitud_por_requisito(folioNot, folioRep, idCont, tranId)
          setTimeout(() => {
              console.log("INSCRIPCIONES ENCONTRADAS99: " + inscripciones_encontradasGlobal.length +" y "+ this.inscripciones_encontradas.length)
              if(inscripciones_encontradasGlobal.length > 0){
                  inscripciones_encontradasGlobal.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "I"}
                        this.items.push(item)               
                  })
              }
              console.log("MODIFICACIONES ENCONTRADAS: " + modificaciones_encontradasGlobal.length)
              if(modificaciones_encontradasGlobal.length > 0){
                  modificaciones_encontradasGlobal.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "M"}
                        this.items.push(item)               
                  })
              }
              console.log("ALZAMIENTOS ENCONTRADAS: " + alzamientos_encontradosGlobal.length)
              if(alzamientos_encontradosGlobal.length > 0){
                  alzamientos_encontradosGlobal.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] <= 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Asignada": "",
                            "ID": insc[0],
                            "Tipo": "A"}
                        this.items.push(item)               
                  })
              }
          }, 1500)

      }
  }
}

</script>

<style scoped>
.zui-table-rounded thead th:first-child {
    border-radius: 10px 0 0 0;
}
.zui-table-rounded thead th:last-child {
    border-radius: 0 10px 0 0;
}

.zui-table-rounded tbody tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
}
.zui-table-rounded tbody tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
}

.tamanoTipoDocumento{
    width: 10em;
}

.status{
    padding-left: 5px; 
    padding-right: 5px; 
    background-color:#B9AA23;
    color: white;
    border-radius: 15px;

}

.contenedor{
    margin-top: 2em;
    color: #514BD5;
    width: 80%;

}
.right {
    margin-right: 10px;
    float: right;
    width: 80%;
    height: auto;
}

.item{
    margin-top: 5em;
    margin-bottom: 0em;
    font-family: Roboto;
    font-weight: bold;
}

.button{
    width: 20em;
    margin-top: 2em;
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
}
</style>
