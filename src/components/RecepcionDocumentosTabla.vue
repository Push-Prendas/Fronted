<template>
    <div id="TablaTipo">
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;">
            <tr>
				<th scope="col">N° Rep de Prenda</th>
				<th scope="col">N° Rep de Notaria</th>
				<th scope="col">Tipo</th>
				<th scope="col">Oficina</th>
				<th scope="col">Fecha</th>
				<th scope="col">Adjuntar doc</th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
            <tr>
				<th >{{item.Rep}}</th>
				<th >{{item.Not}}</th>
				<th >{{item.Tipo}}</th>
				<th >{{item.Oficina}}</th>
				<th >{{item.Fecha}}</th>
              <th><b-button v-b-modal.modal-6 class="col buttonAdd d-flex justify-content-center"><font-awesome-icon style= "margin-right:5px" icon="file-download" @click="changeIndex(index)" /></b-button></th>
            </tr>
          </tbody>
        </table>
        </div>

        <b-modal id="modal-6"  hide-footer style="width:80px;">
          <div class="row">
            <div class="titleFormulario col" >Contrato</div> 
            <div class="input-group mb-3 " >
                <label  for="anexos"></label><input type="file" class="form-control" id="contrato" >
                
            </div>
            
        </div>
        <div class="row">
            <div class="titleFormulario col" >Anexos</div> 
            <div class="input-group mb-3 " >
                <label  for="anexos"></label><input type="file" multiple class="form-control" id="anexos" >
                
            </div>
            
        </div>
                
          <b-button id="SubirArchivos" @click="add()">Adjuntar Archivos</b-button>
        </b-modal>   
       
    </div>
</template>

<script>
import {db,storage} from "@/main";
import { collection, getDocs,doc,setDoc,updateDoc} from "firebase/firestore";
import { ref,uploadBytes,getDownloadURL} from "firebase/storage";
//import { collection, getDocs,setDoc,doc,storage,ref,uploadBytes,getDownloadURL, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js"
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
			console.log("I FOUND THIS INSCRIPTION")
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				console.log("LOL TIME")
				var insc_data = doc.data();
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					console.log("MOMENTOSO")
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
			console.log("I FOUND THIS MODIFICATION")
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				console.log("LOL TIME")
				var insc_data = doc.data();
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					console.log("MOMENTOSO")
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
			console.log("I FOUND THIS ALZ")
			var all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				var insc_data = doc.data();
				console.log("LOL TIME")
				if(insc_data.estadoPrimario == estado_primario && insc_data.estadoSecundario == estado_secundario && (notaria == "" || insc_data.notaria == notaria) && (oficina == "" || insc_data.oficina == oficina)){	
					console.log("MOMENTOSO")
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

function Subir_archivos_en_oficina(contratos,archivos,id,tipo){//ESTA FUNCION PERMITE GUARDAR LOS ARCHIVOS EN NUESTRA BASE DE DATOS, LO IDEAL ES USARLO PARA OFICINA EN LA VISTA PARA SUBIR SUS ARCHIVOS
	var repertorio = null

    var INSCRIPCION = ""
    var MODIFICACION = ""
    var ALZAMIENTO = ""

    if(tipo == 0){// INSCRIPCION
        INSCRIPCION = id
    }
    else if(tipo == 1){//MODIFICACION
        MODIFICACION = id
    }
    else if(tipo == 2){//ALZAMIENTO
        ALZAMIENTO = id
    }
    

	getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
		var id_inspeccion = pat_data.docs.length
		var pt = pat_data.docs[id_inspeccion-1]
		repertorio = pt.data().numero_repertorio_RPsD
		
	}).then(() => {

	getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
    console.log(doc_data.docs.length);
		var document_id = doc_data.docs.length
		console.log("Entro")
		//const storageRef = ref(storage); 
    console.log("contrato");
    console.log(contratos);
    console.log(archivos);
		for(var i = 0; i<contratos.length; i++){
      console.log("estoy dent")
			const fileRef = ref(storage,contratos[i].name);
			await uploadBytes(fileRef,contratos[i]);
			const url_file = await getDownloadURL(fileRef)
			setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
				id_alzamiento: INSCRIPCION,
				id_modificacion: MODIFICACION,
				idInscripcion: ALZAMIENTO,
				año_repertorio_del_contrato: new Date().getFullYear(),
				numero_repertorio_RPsD: repertorio + 1,
				url: url_file,
				contrato: true
			});
			document_id+=1;
		}
		for(i = 0; i<archivos.length; i++){
      console.log("estoy dent2")
			const fileRef = ref(storage,archivos[i].name);
			await uploadBytes(fileRef,archivos[i]);
			const url_file = await getDownloadURL(fileRef)
			setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
				idInscripcion: INSCRIPCION,
				id_alzamiento: MODIFICACION,
				id_modificacion: ALZAMIENTO,
				año_repertorio_del_contrato: new Date().getFullYear(),
				numero_repertorio_RPsD: repertorio + 1,
				url: url_file,
				contrato: false
			});
			document_id+=1;
		}

	});

}).then(() => {
	console.log("EVERYTHING ITS SEND SUCCESFULLY")
	//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
	


	//
})


}

function modifySecondaryStatus(tipo_de_solicitud, id_solicitud, estado_secundario, user_id){
	///FUNCION QUE PERMITE ACTUALIZAR UN ESTADO, EL ID VA COMO STRING

	////////OJO: REVISAR NUMERO REPERTORIO DE PRENDA/////////////////
	///GUARDAR EN UNA TABLA APARTE O EN ALGO EL NUMERO DE REPEROTRIO DE PRENDA ACTUAL Y ASIGNAR
	var change_message = ["El pago no se realizo", "Hubo intencion de pagar", "Pagado"]
	getDocs(collection(db, "Counter_N_RPsD")).then((n) => {
		var counter_data = n.docs[0].data();
		var counter = counter_data.counter;
		if(counter < 10){
			counter = "000" + counter.toString()
		}
		else if (counter < 100){
			counter = "00" + counter.toString()
		}
		else if (counter < 1000){
			counter = "0" + counter.toString()
		}
		else{
			counter = counter.toString()
		}
		var year = counter_data.year;
		if(estado_secundario == 2){
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
		}
		else{
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
				});
			}
		}
		updateDoc(doc(db, "Counter_N_RPsD","0"),{
			counter: counter_data.counter + 1
		});

	})
	var today = new Date();
	getDocs(collection(db, "Bitacora")).then((bit_data) => {
		var id_bit = bit_data.docs.length;
		var id_insc = ""
		var id_mod = ""
		var id_alz = ""
		if(tipo_de_solicitud == "I"){
			id_insc = id_solicitud
		}
		else if(tipo_de_solicitud == "M"){
			id_mod = id_solicitud
		}
		else if(tipo_de_solicitud == "A"){
			id_alz = id_solicitud
		}
		setDoc(doc(collection(db, "Bitacora"),id_bit.toString()), {
			idInscripcion: id_insc,
			idModificacion: id_mod,
			idAlzamiento: id_alz,
			idUser: user_id,
			comment: change_message[estado_secundario],
			fechaCambio: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
		})
	})
	
}
function modifyPrimaryStatus(tipo_de_solicitud, id_solicitud, estado_primario, user_id){
	var change_message = ["La solicitud fue guardada","La solicitud fue enviada desde notaria",
						"La solicitud fue rechazada de notaria", "La solicitud fue enviada desde oficina",
						"La solicitud esta en revision", "La solicitud fue aceptada", "La solicitud fue rechazada por revisor",
						"La solicitud fue rechazada por unidad de prenda", "La solicitud rechazada fue confirmada"]
	///FUNCION QUE PERMITE ACTUALIZAR UN ESTADO, EL ID VA COMO STRING
	if (tipo_de_solicitud == "I"){	
		updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud), {
			estadoPrimario: estado_primario,
			estadoSecundario: 2
		}).then(() => {
			console.log("ACTUALIZADO")
		})
	}
	else if (tipo_de_solicitud == "M"){
		updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
			estadoPrimario: estado_primario,
			estadoSecundario: 2
		});
	}
	else if (tipo_de_solicitud == "A"){
		updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
			estadoPrimario: estado_primario,
			estadoSecundario: 2
		});
	}
	var today = new Date();
	getDocs(collection(db, "Bitacora")).then((bit_data) => {
		var id_bit = bit_data.docs.length;
		var id_insc = ""
		var id_mod = ""
		var id_alz = ""
		if(tipo_de_solicitud == "I"){
			id_insc = id_solicitud
		}
		else if(tipo_de_solicitud == "M"){
			id_mod = id_solicitud
		}
		else if(tipo_de_solicitud == "A"){
			id_alz = id_solicitud
		}
		setDoc(doc(collection(db, "Bitacora"),id_bit.toString()), {
			idInscripcion: id_insc,
			idModificacion: id_mod,
			idAlzamiento: id_alz,
			idUser: user_id,
			comment: change_message[estado_primario],
			fechaCambio: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
		})
	})
}
export default {
  name: 'TablaTipo',
  mounted() {
      this.rellenarTabla()
      },
  data() {
        return {
            items: [], 
            thread : ['N° Rep. Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: localStorage.user,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            emailUser: localStorage.mail,
            indexSelect:0
        }
    },
    methods:{
      rellenarTabla() {
            console.log("relleno tabla")
            //this.items.length = 0;
			this.items = []
			this.items.length = 0

			inscripciones_encontradasGlobal = []
			modificaciones_encontradasGlobal = []
			alzamientos_encontradosGlobal = []
            
            //buscador_solicitud(3,1,"T",-1)
            buscador_solicitud(3,2,"T", -1)
			setTimeout(() => { 
			//var estad;
				console.log("ENTRO TIMEOUT")
				if(inscripciones_encontradasGlobal.length>0){
					console.log(inscripciones_encontradasGlobal);
					console.log("VICTORY ROYALE")
					inscripciones_encontradasGlobal.forEach((insc)=>{
						console.log("INSCRIPCION-"+insc[1]["estadoPrimario"]+ "-"+insc[1]["estadoSecundario"])
		
						if(insc[1]["estadoPrimario"] == 3){
							let item = {
									"id": insc[0],
									"Rep": insc[1]["numeroRepertorioContratoPrenda"],
									"Not":insc[1]["numeroRepertorioNotario"],
									"Fecha": insc[1]["fechaRequirente"],
									"Oficina" : insc[1]["oficina"],
									"Tipo": "I"}
							console.log(item)

							console.log(this.items)
							this.items.push(item)
						}
						});

					}
				if(modificaciones_encontradasGlobal.length>0){
					modificaciones_encontradasGlobal.forEach((insc)=>{
						console.log("MODIFICACION-"+insc[1]["estadoPrimario"]+ "-"+insc[1]["estadoSecundario"])
	
						console.log("DEBUG")
						console.log(insc)
						if(insc[1]["estadoPrimario"] == 3){
							let item = {
									"id": insc[0],
									"Rep": insc[1]["numeroRepertorioContratoPrenda"],
									"Not":insc[1]["numeroRepertorioNotario"],
									"Fecha": insc[1]["fechaRequirente"],
									"Oficina" : insc[1]["oficina"],
									"Tipo": "M"}

							this.items.push(item)
						}
						});

					}
				if(alzamientos_encontradosGlobal.length>0){
					alzamientos_encontradosGlobal.forEach((insc)=>{
						console.log("ALZAMIENTOS-"+insc[1]["estadoPrimario"]+ "-"+insc[1]["estadoSecundario"])
		
						if(insc[1]["estadoPrimario"] == 3){
							let item = {
									"id": insc[0],
									"Rep": insc[1]["numeroRepertorioContratoPrenda"],
									"Not":insc[1]["numeroRepertorioNotario"],
									"Fecha": insc[1]["fechaRequirente"],
									"Oficina" : insc[1]["oficina"],
									"Tipo": "A"}

							this.items.push(item)
						}
						});

					}
				//this.items=i
				console.log(this.items)
				},1500);
			},
      add(){
        var item = this.items[this.indexSelect]
        var anexo = document.getElementById("anexos").files
        var contrato = document.getElementById("contrato").files
        Subir_archivos_en_oficina(contrato,anexo,item.id,item.Tipo)
        modifyPrimaryStatus(item.Tipo, item.id, 4, this.emailUser)
		modifySecondaryStatus(item.Tipo, item.id, 2, this.emailUser)
        this.items.splice(this.indexSelect,1);
      },
      changeIndex(index){
        this.indexSelect = index;
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

.titleFormulario{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
}
.SubirArchivos{
  background: #514BD5;
  color: white;
}
</style>
