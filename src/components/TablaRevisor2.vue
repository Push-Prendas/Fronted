<template>
    <div id="TablaRevisor">
        <h1 class="title" style="color:#514BD5">Mis Solicitudes</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;" @dblclick="rellenarTabla()">
            <tr>
              <th scope="col">N° Documento</th>
              <th scope="col">Oficina</th>
              <th scope="col">N° Oficina</th>
              <th scope="col">Fecha</th>
              <th scope="col">Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
            <tr>
              <th >{{item.Rep}}</th>
              <th >Oficina FS</th>
              <th >32</th>
              <th ><th >{{item.Fecha}}</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <a class="rounded-pill" type="button" style="padding-left: 5px; padding-right: 5px; background-color:grey" :href="'/Dashboard/REVISOR/'+username+'/RevisionDoc'">Revisar</a>
                      <th class="rounded-pill" type="button" style="padding-left: 10px;  padding-right: 10px; background-color:grey" @click="LiberarSolicitud(index)">Liberar</th>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>

import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
import {db} from "@/main";
import { collection, getDocs, query, where, getDoc, doc, updateDoc} from "firebase/firestore";
console.log(usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal)
var inscripciones_encontradasGlobal = []
var modificaciones_encontradasGlobal = []
var alzamientos_encontradosGlobal = []

/*async function buscador_solicitud(estado_primario, estado_secundario, tipo_de_solicitud="T", user_id=-1, oficina="", notaria=""){

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

}*/

async function buscar_asignaciones(user_id){
	var id_inscripciones_asociadas = []
	var id_modificaciones_asociadas = []
	var id_alzamientos_asociados = []

	console.log("lol")

	getDocs(query(collection(db, "Inspeccion_inscripcion"), where("userId", "==", user_id))).then((hist_data) => {
		var my_data = hist_data.docs;
		my_data.forEach((d) => {
			id_inscripciones_asociadas.push(d.id)
		})
	}).then(() => {
		id_inscripciones_asociadas.forEach((i) => {
      
			getDoc(doc(db, "Solicitud_Inscripcion_Prenda",i)).then((my_data) => {
        var my_data2 = my_data.data();
        var data = [i,my_data2]
                inscripciones_encontradasGlobal.push(data)
                console.log(my_data2)
            });
      console.log("aja")
		})
	})
	getDocs(query(collection(db, "Inspeccion_modificacion"), where("userId", "==", user_id))).then((hist_data) => {
		var my_data = hist_data.docs;
		my_data.forEach((d) => {
			id_modificaciones_asociadas.push(d.id)
		})
	}).then(() => {
		id_modificaciones_asociadas.forEach((i) => {
      getDoc(doc(db, "Solicitud_Modificacion_Prenda",i)).then((my_data) => {
        var my_data2 = my_data.data();
        var data = [i,my_data2]
                modificaciones_encontradasGlobal.push(data)
                console.log(my_data2)
            });
		})
	})
	getDocs(query(collection(db, "Inspeccion_alzamiento"), where("userId", "==", user_id))).then((hist_data) => {
		var my_data = hist_data.docs;
		my_data.forEach((d) => {
			id_alzamientos_asociados.push(d.id)
		})
	}).then(() => {
		id_alzamientos_asociados.forEach((i) => {
      getDoc(doc(db, "Solicitud_Alzamiento_Prenda",i)).then((my_data) => {
        var my_data2 = my_data.data();
        var data = [i,my_data2]
                alzamientos_encontradosGlobal.push(data)
                console.log(my_data2)
            });
		})
	})
}

function liberar_asignaciones(id_solicitud, tipos_solicitud, user_id){
	if(tipos_solicitud == "I"){
		getDocs(query(collection(db, "Inspeccion_inscripcion"), where("userId", "==", user_id))).then((hist_data) => {
			var my_data = hist_data.docs;
			my_data.forEach((d) => {
				var data = d.data();
				if(data.solicitudId == id_solicitud && data.userId == user_id){
					updateDoc(doc(doc(db, "Inspeccion_inscripcion",d.id)), {
						userId: -1
					})
				}
			})
		})
	}
	else if (tipos_solicitud == "M"){
		getDocs(query(collection(db, "Inspeccion_modificacion"), where("userId", "==", user_id))).then((hist_data) => {
			var my_data = hist_data.docs;
			my_data.forEach((d) => {
				var data = d.data();
				if(data.solicitudId == id_solicitud && data.userId == user_id){
					updateDoc(doc(doc(db, "Inspeccion_modificacion",d.id)), {
						userId: -1
					})
				}
			})
		})

	}
	else if (tipos_solicitud == "A"){
		getDocs(query(collection(db, "Inspeccion_alzamiento"), where("userId", "==", user_id))).then((hist_data) => {
			var my_data = hist_data.docs;
			my_data.forEach((d) => {
				var data = d.data();
				if(data.solicitudId == id_solicitud && data.userId == user_id){
					updateDoc(doc(doc(db, "Inspeccion_alzamiento",d.id)), {
						userId: -1
					})
				}
			})
		})
	}	
}
export default {
  name: 'TablaRevisor',
  data() {
        return {
            items: [], 
            thread : ['N° Rep. Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: usernameGlobal,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            emailUser: emailGlobal 
        }
    },
    methods:{
        rellenarTabla() {
            console.log("relleno tabla")
            
            buscar_asignaciones(this.emailUser).then(() =>
              {
              console.log("esto es lo que busco")
              console.log(this.inscripciones_encontradas.length);
              if(this.inscripciones_encontradas.length>0){
              console.log("shdasjd");
                console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoSecundario"]!=2){
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
                    if(insc[1]["estadoSecundario"]!=2){
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
                    if(insc[1]["estadoSecundario"]!=2){
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
            })
            //buscador_solicitud(4,1,"T",this.emailUser)
            //buscador_solicitud(1,0,"T", -1)
            
            
            
            },
        LiberarSolicitud(index){
          var item = this.items[index];
            liberar_asignaciones(item.id, item.Tipo, this.emailUser);
            this.items.splice(index,1);
        }
            
    },
    /*created(){
        //this.items=[]
        this.rellenarTabla()
        
    }*/
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
