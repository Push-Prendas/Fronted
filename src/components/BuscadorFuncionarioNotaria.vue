<template>
    <div id="TablaRevisor">
        <div style="padding:50px; margin-left:300px">
        <table class="table table-sm table-hover zui-table-rounded" >
               
          <thead style="color: black;">
            <tr>
                <th scope="col">
                    Folio Repertorio Prenda
                    <div class="d-flex justify-content-center">
                        
                        <input type="text"  id="foliorep" placeholder="N° Documento">      
                    </div>
                </th>
                <th scope="col">
                    Año
                    <div class="d-flex justify-content-center">
                        <input type="text" id="yearrep" placeholder="Año">      
                    </div>
                </th>
                <th scope="col">
                    Tipo de actuación
                    <div class="d-flex justify-content-center">
                        <select id="tipoact" class="form-select">
                            <option selected value="Inscripcion">Inscripcion</option>
                            <option value="Modificacion">Modificacion</option>
                            <option value="Alzamiento">Alzamiento</option>
                        </select>   
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
              <th scope="col">N° Repertorio Prenda</th>
              <th scope="col">Oficina/Notaria</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in items" :key="index">
            <tr>
              <th scope="row">{{item.Rep}}</th>
              <th scope="row">{{item.Oficina}}</th>
              <th scope="row">{{item.Fecha}}</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="status">{{item.Estado}}</th>
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


async function buscar_solcitud_por_requisito(tipo_solicitud = "", year = "", folio = "", estado_solicitud = "", user_id = "", notaria="", oficina = ""){
	////DETALLE: USAR ESTADO Y ID ES NUMERO REPERTORIO PRENDA
	//DEVUELVE EL ID DE LA SOLICITUD QUE CUMPLA CON LOS REQUISITOS ANTES MENCIONADOS
    console.log("PARAMETROS")
    console.log("FOLIO: " + folio)
    console.log("YEAR: " + year)
	if(tipo_solicitud == "I" || tipo_solicitud == ""){
        console.log("buscar inscripciones")	
		await getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((per_data) => {
			var my_docs = per_data.docs
            console.log("Largo documento inscricpion: " + my_docs.length)
			my_docs.forEach((d) => {
				var my_sol = d.data();


                
				var my_id = my_sol.numeroRepertorioContratoPrenda
                if(my_sol.estadoSecundario > 0  && my_sol.usuarioCreador == localStorage.mail){
                    var folio_prenda = my_id.split("-")[0]
                    var year_prenda = my_id.split("-")[1]
                    if((folio_prenda == folio || folio == "") && (year_prenda == year || year == "")){
                        console.log("entro")
                        if((my_sol.estadoPrimario == estado_solicitud || estado_solicitud == "")
                        &&(my_sol.usuarioCreador == user_id || user_id == "")
                        &&(my_sol.nombre_notaria == notaria || notaria == "")
                        &&(my_sol.oficina == oficina || oficina == "")){
                            inscripciones_encontradasGlobal.push([d.id,my_sol])
                        }
                    }
                }
			})
		})
	}
	if (tipo_solicitud == "M" || tipo_solicitud == ""){
        console.log("buscar modificaciones")	
		await getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((per_data) => {
			var my_docs = per_data.docs
            console.log("Largo documento modificacion: " + my_docs.length)
			my_docs.forEach((d) => {
				var my_sol = d.data();
				var my_id = my_sol.numeroRepertorioContratoPrenda
                if(my_sol.estadoSecundario > 0  && my_sol.usuarioCreador == localStorage.mail){
                    var folio_prenda = my_id.split("-")[0]
                    var year_prenda = my_id.split("-")[1]
                    if((folio_prenda == folio || folio == "") && (year_prenda == year || year == "")){
                        if((my_sol.estadoPrimario == estado_solicitud || estado_solicitud == "")
                        &&(my_sol.usuarioCreador == user_id || user_id == "")
                        &&(my_sol.nombre_notaria == notaria || notaria == "")
                        &&(my_sol.oficina == oficina || oficina == "")){
                            modificaciones_encontradasGlobal.push([d.id,my_sol])
                        }
                    }
                }
			})
		})

	}
	if (tipo_solicitud == "A" || tipo_solicitud == ""){
        console.log("buscar alzamientos")
		await getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((per_data) => {
			var my_docs = per_data.docs
            console.log("Largo documento alzamiento: " + my_docs.length)
			my_docs.forEach((d) => {
				var my_sol = d.data();
				var my_id = my_sol.numeroRepertorioContratoPrenda
                if(my_sol.estadoSecundario > 0  && my_sol.usuarioCreador == localStorage.mail){
                    var folio_prenda = my_id.split("-")[0]
                    var year_prenda = my_id.split("-")[1]
                    if((folio_prenda == folio || folio == "") && (year_prenda == year || year == "")){
                        if((my_sol.estadoPrimario == estado_solicitud || estado_solicitud == "")
                        &&(my_sol.usuarioCreador == user_id || user_id == "")
                        &&(my_sol.nombre_notaria == notaria || notaria == "")
                        &&(my_sol.oficina == oficina || oficina == "")){
                            alzamientos_encontradosGlobal.push([d.id,my_sol])
                        }
                    }
                }
			})
		})
	}
	//TODAS LAS COSAS ENCONTRADAS
	//FRONTEND MODIFIQUE DE AQUI


	///////////////////////////
}

export default {
  mounted(){
      buscar_solcitud_por_requisito()
      setTimeout(() => {
              if(this.inscripciones_encontradas.length > 0){
                  this.inscripciones_encontradas.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
          inscripciones_encontradasGlobal = []
          modificaciones_encontradasGlobal = []
          alzamientos_encontradosGlobal = []
          console.log("BUSCANDO...")
          const folioRep = document.getElementById('foliorep').value
          const yearRep = document.getElementById('yearrep').value
          const tipoAct = document.getElementById('tipoact').value
          console.log(folioRep + "," + yearRep + "," +  tipoAct)
          var my_type = "T"
          if (tipoAct == "Modificacion")
            my_type = "M"
          else if (tipoAct == "Alzamiento")
            my_type = "A"
          else if (tipoAct == "Inscripcion")
            my_type = "I"
          console.log(my_type)
          buscar_solcitud_por_requisito(my_type, yearRep, folioRep)
          setTimeout(() => {
              console.log("INSCRIPCIONES ENCONTRADAS: " + inscripciones_encontradasGlobal.length)
              if(inscripciones_encontradasGlobal.length > 0){
                  inscripciones_encontradasGlobal.forEach((insc)=>{
                        var estad;
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
                        if (insc[1]["estadoPrimario"] == 4)
                            estad = "En revision"
                        else if (insc[1]["estadoPrimario"] == 5)
                            estad = "Aceptado"
                        else if (insc[1]["estadoPrimario"] == 6)
                            estad = "Rechazado"
                        else if (insc[1]["estadoPrimario"] > 6)
                            estad = "Rechazado Definitivo"
                        let item = {
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaSuscripcion"],
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
