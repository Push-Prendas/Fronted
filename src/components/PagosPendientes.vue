<template>
    <div id="contenedor" class="row"> 
		<div class="d-flex justify-content-end">
			<button @click="reloadPage" class="ReloadButton">Reload</button> 
		</div>   
        <table class="table">
            <thead class="encabezadoTabla">
                <th scope="col">N° Rep Prenda</th>
				<th scope="col">N° Rep Notaria</th>
				<th scope="col">Tipo</th>
				<th scope="col">Fecha</th>
				<th scope="col">Monto</th>
				<th scope="col">Estado</th>
                <th scope="col"></th>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index">
                <td>{{item.Rep}}</td>
				<td>{{item.Not}}</td>
				<th>{{item.Tipo}}</th>
                <td>{{item.Fecha}}</td>
                <td>{{item.Monto}}</td>
                <td class="d-flex justify-content-center">
                    <p class="titleFormulario">{{item.Estado}} </p>
                </td>
                <td>
                    <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" :id="index" v-if="item.Estado != 'Pagado'">
                    </div>
                </td>
            </tbody>
 
        </table>
        <div class="d-flex justify-content-end">
            <p> ${{monto}} </p> <button class="col-2 titleButton " @click="pagar()">Pagar</button> 
        </div>
        
         
    </div>
</template>

<script>
import {db} from "@/main";
import { collection, getDocs,doc, updateDoc,setDoc} from "firebase/firestore";
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
			//console.log(inscripciones_encontradasGlobal.length)
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
            //console.log(inscripciones_encontradasGlobal.length)
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
            //console.log(alzamientos_encontradosGlobal.length)
			///////
		})
	}
}

var my_rpsd;
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
		my_rpsd = counter + "-" + year.toString()
		//.log("RPSD: " + my_rpsd)
		if(estado_secundario == 1){
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()

				}).then(() => {
					//console.log("ACTUALIZADO")
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
		else if(estado_secundario == 0){
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    estadoPrimario: 1,
					estadoSecundario: estado_secundario,

				}).then(() => {
					//console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    estadoPrimario: 1,
					estadoSecundario: estado_secundario,
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    estadoPrimario: 1,
					estadoSecundario: estado_secundario,
				});
			}
		}
		else{
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    estadoPrimario: 4,
					estadoSecundario: estado_secundario,

				}).then(() => {
					//console.log("ACTUALIZADO")
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


var autoGlobal = []
var autoGlobalALZ = []
function load_vehicles(ite){
	var id_inscripcion=ite.id
    autoGlobal = []
    getDocs(collection(db,"Patente_por_Inscripcion")).then((car_Data) => { 
		var my_cars = car_Data.docs
		my_cars.forEach((p) => {
			var p_data = p.data();
            if(p_data.idInscripcion == id_inscripcion && p_data.inscripcionPrendaRVM && !(p_data.alzamiento))
                autoGlobal.push(p_data)
		})
        console.log("AUTOS CON ANOTACION AL RVM Y SIN ALZAR: ")
		console.log(autoGlobal)
		if(ite.Tipo == "M"){
			getDocs(collection(db,"Solicitud_Modificacion_Prenda")).then((data) => { 
				data.docs.forEach((doc)=>{
					if(doc.patentesAlzparcial && doc.tipoModificacion==1 && doc.numeroRepertorioNotario==ite.Not){
						doc.patentesAlzparcial.forEach((dopatc)=>{
							autoGlobalALZ.push(dopatc)
						})
						
					}
				})
			})
		}
		
	})
}

export default {
  name: 'PagosPendientes',
  mounted() {
      this.rellenarTabla()
      },
  data() {
        return {
            items: [],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Repertorio Notaria', 'Fecha','Monto', 'Estado'],
            username: localStorage.user,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            monto:0,
            emailUser: localStorage.mail
        }
    },
    props: {
        opcion:Array,
        tipoSolicitud:{
            type: String,
            default: 'Modificacion'
        },
    
        
  },
  methods:{ 
      rellenarTabla() {
            console.log("relleno tabla")
            //EstPrimario 1 y EstSecundario 0 y firma true

            //buscador_solicitud(4,1,"T", -1) 
            buscador_solicitud(1,0,"T", -1)
			buscador_solicitud(1,1,"T", -1)
			buscador_solicitud(4,1,"T", -1)
            //console.log("PHASE 1")

            setTimeout(() => { 
            if(this.inscripciones_encontradas.length>0){
                //console.log("CHECKING")
                //console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }
					else if (insc[1]["estadoSecundario"]==1){
						estad="Esperando Confirmación"
					}
					else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){ //TODOS LOS DATOS TIENEN ESTE VALOR VACIO
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
							"Not":insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Monto": insc[1]["montoTotal"],
                            "Estado": estad,
                            "Tipo":"I"}
                        this.items.push(item)
                        //console.log(insc[1])
                        this.monto+= parseFloat(insc[1]["montoTotal"]);
                    }
                                        
                    });

            }
            //console.log("PHASE 2")
            if(this.modificaciones_encontradas.length>0){
                this.modificaciones_encontradas.forEach((insc)=>{
                   if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }
					else if (insc[1]["estadoSecundario"]==1){
						estad="Esperando Confirmación"
					}
					else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
							"Not":insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Monto": insc[1]["montoTotal"],
                            "Estado": estad,
                            "Tipo":"M"}
                        this.items.push(item)
                    }
                    });

                }
            //console.log("PHASE 3")
            if(this.alzamientos_encontrados.length>0){
                this.alzamientos_encontrados.forEach((insc)=>{
                    if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }
					else if (insc[1]["estadoSecundario"]==1){
						estad="Esperando Confirmación"
					}
					else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
							"Not":insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Monto": insc[1]["montoTotal"],
                            "Estado": estad,
                            "Tipo":"A"}
                        this.items.push(item)
                    }
                    });

                }
            //this.items=i
            console.log(this.items)
            },2000);
            },
    pagar(){
		
        var indexCheck = []
		for (let index = 0; index < this.items.length; index++) {
			if (document.getElementById(index).checked == true){
                indexCheck.push(index)
				console.log("Check")
				console.log(index)
            }	
		}
		for (let w = 0; w < indexCheck.length; w++) {
            var item = this.items[indexCheck[w]]
            //console.log(item)
			//console.log("SENDING DATA")		
			this.updatePago(item)
			//console.log(indexCheck[w])
        }
		this.items.length=0
		this.clean()
		this.rellenarTabla()

    },
	clean(){
		inscripciones_encontradasGlobal.length=0
		modificaciones_encontradasGlobal.length=0
		alzamientos_encontradosGlobal.length=0
	},
	updatePago(item){
		modifySecondaryStatus(item.Tipo, item.id, 1, this.emailUser)
		setTimeout(() => {			
			/*
				AQUI ACTUALIZAR RVM
			*/
			console.log(localStorage.user +','+my_rpsd+','+this.monto)
			var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4032/api/transaction/payment'
			console.log("Phase 1 GETTING IP")
			console.log(localStorage.rutLog)
			var real_rpsd = my_rpsd.split("-")[1]+"-"+my_rpsd.split("-")[0]
			var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd.split("-")[1]+"-"+my_rpsd.split("-")[0] + '", "monto":' + 100 +', "confirmation_ip": "54.167.53.130"}'
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: params
				}).then((response)=>{
					console.log("PRESPUESTA DE PAGO")
					console.log(response)
					response.json().then((reqResult) => {
						console.log(reqResult)
						if (item.Tipo=="I"){
							updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",item.id),{
							id_transaccion: reqResult.transaction_id,
							estadoSecundario: 1
							}).then(() => {
								console.log("id_transaccion asignado", reqResult.transaction_id)
							})
						}else if (item.Tipo=="M"){
							updateDoc(doc(db, "Solicitud_Modificacion_Prenda",item.id),{
							id_transaccion: reqResult.transaction_id,
							estadoSecundario: 1
							}).then(() => {
								console.log("id_transaccion asignado", reqResult.transaction_id)
							})
						}else if (item.Tipo=="A"){
							console.log("PRESPUESTA DE PAGO --cambio estado alz")
							updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",item.id),{
								id_transaccion: reqResult.transaction_id,
								estadoSecundario: 1
							}).then(() => {
								console.log("id_transaccion asignado", reqResult.transaction_id)
							})
						}
						console.log(reqResult.msg)
					})

					load_vehicles(item)
					var tipoMod = ""
					if (item.Tipo=="M"){
						getDocs(collection(db, "Solicitud_Modificacion_Prenda")).where('id'==item.id).then((the_data) => {
							var doc = the_data.doc
							if(doc.data().tipoModificacion  == 1){
								tipoMod = "AlzPN"
							}else if(doc.data().tipoModificacion  == 2){
								tipoMod = "CA"
							}else {
								tipoMod = false
							}
						})
					}
					setTimeout(() => {
						autoGlobal.forEach((data)=>{
							var url2 = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4031/api/vehicles/anotation'
							var type = ""
							if(item.Tipo == "I"){
								type = "PN"
							}else if(item.Tipo == "M"){
								if(autoGlobalALZ.includes(data)){
									type = tipoMod
								}else{
									type = false
								}
							}else if(item.Tipo == "A"){
								type = "AlzPN"
							}
							//console.log("REPERTORIO")
							if(type!=false){
								var params2 =  '{"patente": "' + data.patente + '", "tipo":"' + type + '", "numero_repertorio":"'  + real_rpsd +  '"}'
								//console.log(params2)
								fetch(url2, {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json'
									},
									body: params2
								}).then((response2)=>{
										response2.json().then((reqResult) => {
											console.log("Ingresando Anotaciones a RVM")
											console.log(reqResult)
											console.log(reqResult.msg+"para patente:"+data.patente)
									})
								})
							}			
						})					
					},3000)
				})
		}, 1500);
	},
	reloadPage(){
		window.location.reload();
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
    background: #23B928;
    border-radius: 15em;
    width:10em;
}


.encabezadoTabla{
    background:#CEF1FF;
    color: #514BD5;
    border-top-left-radius: 5em;
    border-radius: 15em 0em 0em 15em;
}

.bodyTabla{
    background: #E5E5E5;
    margin:0.5em;
}

.SpaceItems{
    margin-top: 2em;
}

.titleButton{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #CD0E1F;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
}
.ReloadButton{
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
}
</style>