<template>
    <div id="TablaRevisor">
        <h1 class="title" style="color:#514BD5">Solicitudes No Asignadas</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;" @dblclick="rellenarTabla()">
            <tr>
              <th scope="col">N° Documento</th>
              <th scope="col">Oficina</th>
              <th scope="col">N° Oficina</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Asignada</th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
            <tr>
              <th >{{item.Rep}}</th>
              <th >Oficina L</th>
              <th >10</th>
              <th scope="row">{{item.Fecha}}</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" style="padding-left: 5px; padding-right: 5px; background-color:grey" v-if="item.Estado == 'Pagado'">{{item.Estado}}</th>
                      <th class="rounded-pill" style="padding-left: 5px; padding-right: 5px; background-color:red" v-if="item.Estado == 'Por pagar'">{{item.Estado}}</th>
                  </div>
              </td>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="rounded-pill" type="button" style="padding-left: 5px; padding-right: 5px; background-color:grey">Sin Asignar</th>
                      <th></th>
                      <th></th>
                      <th class="rounded-circle" type="button" style="padding-left: 10px; padding-right: 10px; background-color:yellow" @click="AsignarSolicitud(index)">+</th>
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
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
var inscripciones_encontradasGlobal = []
var modificaciones_encontradasGlobal = []
var alzamientos_encontradosGlobal = []
async function buscador_solicitud(estado_primario, estado_secundario, tipo_de_solicitud="T", user_id=-1, oficina="", notaria=""){

	///ESTA FUNCION BUSCARA CUALQUIER CLASE DE SOLICITUD (SEA MODIFICACION, ALZAMIENTO O INSCRIPCION) EN LAS QUE
	///ESTEN EN UN ESTADO ESPECIFICO, LOS PARAMETROS SE OCUPAN DE LA SIGUIENTE FORMA

	///ESTADO PRIMARIO: BUSCARA LOS QUE ESTEN EN ALGUN ESTADO PRIMARIO ESPECIFICO
	///0 -> EN EDICION
	///1 -> ENVIADO a NOTARIO
	///2 -> RECHAZO DE NOTARIO
	///3 -> ADJUNTAR DOCUMENTOS DE OFICINA
	///4 -> EN REVISION
	///5 -> ACEPTADO
	///6 -> RECHAZO POR REVISOR
	///7 -> RECHAZO POR JEFE DE UNIDAD DE PRENDA
	///8 -> RECHAZO NOTIFICADO

	///ESTADO SECUNDARIO: BUSCARA LOS QUE ESTEN EN ALGUN ESTADO SECUNDARIO EN ESPECIFICO
	///0 -> NO PAGADO
	///1 ->	HUBO INTENCION DE PAGAR PERO NO ESTA CONFIRMADO
	///2 -> PAGADO

	///TIPO DE SOLICITUD: BUSCA ALGUNA CLASE DE SOLICITUD EN ESPECIFICA
	///I -> INSCRIPCION
	///M -> MODIFICACION
	///A -> ALZAMIENTO
	///T -> TODAS

	///USER ID: BUSCA LAS SOLICITUDES CREADAS POR EL USER ID, SI NO SE QUIERE BUSCAR POR USER ID Y SE QUIERE SOLO CON
	///			LOS CRITERIOS ANTERIORES EL ARGUMENTO ES -1

	

	if(tipo_de_solicitud == "T" || tipo_de_solicitud == "I"){
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				var insc_data = doc.data();
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					if(insc_data.usuarioCreador == user_id || user_id == -1){		
						inscripciones_encontradasGlobal.push([doc.id, insc_data])

					}
				}
			})
		}).then(() => {
			console.log("INSCRIPCIONES ENCONTRADAS")
			console.log(inscripciones_encontradasGlobal)
			//UNA VEZ LAS INSCRIPCIONES ESTAN LISTAS VER QUE HACER CON ELLAS ACA
			
			///////
		})

	}
	if(tipo_de_solicitud == "T" || tipo_de_solicitud == "M"){
		getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				var insc_data = doc.data();
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					if(insc_data.usuarioCreador == user_id || user_id == -1){		
						modificaciones_encontradasGlobal.push([doc.id, insc_data])
					}
				}
			})
		}).then(() => {
			console.log("MODIFICACIONES ENCONTRADAS")
			console.log(modificaciones_encontradasGlobal)
			//UNA VEZ LOS MODIFICACIONES ESTAN LISTAS VER QUE HACER CON ELLAS ACA

			///////
		})

	}
	if(tipo_de_solicitud == "T" || tipo_de_solicitud == "A"){
		getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((sol_data) => {
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				var insc_data = doc.data();
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					if(insc_data.usuarioCreador == user_id || user_id == -1){		
						alzamientos_encontradosGlobal.push([doc.id, insc_data])
					}
				}
			})
		}).then(() => {
			console.log("INSCRIPCIONES ENCONTRADAS")
			console.log(alzamientos_encontradosGlobal)
			//UNA VEZ LOS ALZAMIENTOS ESTAN LISTAS VER QUE HACER CON ELLAS ACA

			///////
		})
	}
}

function asignar_solicitud(id_solicitud, tipo_solicitud, user_id){
	if(tipo_solicitud == "I"){
		getDocs(collection(db, "Inspeccion_inscripcion")).then((hist_data) => {
			var id = hist_data.docs.length;
			setDoc(doc(collection(db, "Inspeccion_inscripcion"),id.toString()), {
				solicitudId: id_solicitud,
				userId: user_id,
				comment: "",
				fechaRevision: ""
			})
		})
	}
	else if (tipo_solicitud == "M"){
		getDocs(collection(db, "Inspeccion_modificacion")).then((hist_data) => {
			var id = hist_data.docs.length;
			setDoc(doc(collection(db, "Inspeccion_modificacion"),id.toString()), {
				solicitudId: id_solicitud,
				userId: user_id,
				comment: "",
				fechaRevision: ""
			})
		})

	}
	else if (tipo_solicitud == "A"){
		getDocs(collection(db, "Inspeccion_alzamiento")).then((hist_data) => {
			var id = hist_data.docs.length;
			setDoc(doc(collection(db, "Inspeccion_alzamiento"),id.toString()), {
				solicitudId: id_solicitud,
				userId: user_id,
				comment: "",
				fechaRevision: ""
			}
            
            )
		})

	}
    

}

export default {
  name: 'TablaRevisor',
  data() {
        return {
            items: [], 
            thread : ['N° Rep. Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: localStorage.user,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            emailUser: localStorage.mail
        }
    },
    methods:{
        rellenarTabla() {
            console.log("relleno tabla")
            //this.items.length = 0;
            
            buscador_solicitud(4,1,"T",-1)
            if(this.inscripciones_encontradas.length>0){
                console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estado_secundario"]!=2){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaSuscripcion"],
                            "Estado": estad,
                            "Tipo": "I"}
                    console.log(item)
                    console.log(this.items)
                    this.items.push(item)
                    });

                }
            if(this.modificaciones_encontradas.length>0){
                this.modificaciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estado_secundario"]!=2){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    let item = {
                            "id": insc[0],
                            "N° Rep. Notaria": insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaSuscripcion"],
                            "Estado": estad,
                            "Tipo": "M"}

                    this.items.push(item)
                    });

                }
            if(this.alzamientos_encontrados.length>0){
                this.alzamientos_encontrados.forEach((insc)=>{
                    if(insc[1]["estado_secundario"]!=2){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    let item = {
                            "id": insc[0],
                            "N° Rep. Notaria": insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaSuscripcion"],
                            "Estado": estad,
                            "Tipo": "A"}

                    this.items.push(item)
                    });

                }
            //this.items=i
            console.log(this.items)
            
            }
        ,
        AsignarSolicitud(index) {
            var item = this.items[index];
            asignar_solicitud(item.id, item.Tipo, this.emailUser);
            this.items.splice(index,1);
        }
    },
    
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

</style>
