<template>
    <div id="contenedor" class="row">     
        <table class="table">
            <thead class="encabezadoTabla">
                <tr>
                <th scope="col" v-for="(thead,index) in thread" :key="index">{{thead}}</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="bodyTabla" v-if="items.length == 0">
                <td>No data</td>
            </tbody>
            <tbody class="bodyTabla" v-else v-for="(item,index) in items" :key="index">
                <td>{{item.Rep}}</td>
                <td>{{item.Fecha}}</td>
                <td>{{item.Monto}}</td>
                <td class="d-flex justify-content-center">
                    <p class="titleFormulario">{{item.Estado}} </p>
                </td>
                <td>
                    <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" :id="index" >
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
			console.log(inscripciones_encontradasGlobal.length)
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
            console.log(inscripciones_encontradasGlobal.length)
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
            console.log(alzamientos_encontradosGlobal.length)
			///////
		})
	}

    


}
/*
function buscador_especifico_solicitud(id_inscripcion, tipo_de_solicitud){
	///A TRAVES DE UN ID Y EL TIPO DE SOLICITUD SE BUSCARA LA ACTUACION QUE SE NECESITE
	///CON TODAS SUS DEPENDEDNCIAS
	var solicitud_relacionada;
	var acreedores_relacionados = []
	var constituyentes_relacionados = []
	var deudores_relacionados = []
	var contratos_relacionados = []
	var archivos_relacionados = []
	var patentes_relacionadas = []
	if(tipo_de_solicitud == "I"){
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();					
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						all_docs = file_data.docs;
						all_docs.forEach((d) => {
							my_doc = d.data();
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("ARCHIVOS")
						console.log(contratos_relacionados)
						console.log(archivos_relacionados)
					})
					getDocs(query(collection(db, "Persona_Solicitud"), where("idInscripcion", "==", id_inscripcion))).then((persona_data) => {
						all_personas = persona_data.docs;
						all_personas.forEach((d) => {
							my_doc = d.data();
							if (my_doc.tipoContratante == 0){
								acreedores_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 1){
								constituyentes_relacionados.push(my_doc)
							}
							else if (my_doc.tipoContratante == 2){
								deudores_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("PERSONAS")
						console.log(acreedores_relacionados)
						console.log(constituyentes_relacionados)
						console.log(deudores_relacionados)
					})
					getDocs(query(collection(db, "Patente_por_Inscripcion"), where("idInscripcion", "==", id_inscripcion))).then((patente_data) => {
						all_patentes = patente_data.docs;
						all_patentes.forEach((p) => {
							my_doc = p.data();
							patentes_relacionadas.push(my_doc)
						})

					}).then(() => {
						console.log("PATENTES")
						console.log(patentes_relacionadas)
					})
				}
			})
		}).then(() => {
			console.log("INSCRIPCION")
			console.log(solicitud_relacionada)
			///INSCRIPCION ENCONTRADA
			///FRONTEND -> MODIFICAR ACA




			///

		})
	}
	else if(tipo_de_solicitud == "M"){
		getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((sol_data) => {
			all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						all_docs = file_data.docs;
						all_docs.forEach((d) => {
							my_doc = d.data();
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("ARCHIVOS")
						console.log(contratos_relacionados)
						console.log(archivos_relacionados)
					})


				}
			})
		}).then(() => {
			console.log("MODIFICACION")
			console.log(solicitud_relacionada)
			///MODIFICACION ENCONTRADA
			///FRONTEND MODIFICAR ACA



			///

		})
		
	}
	else if (tipo_de_solicitud == "A"){
		//VER COMO ESTA CONSTITUIDO ALZAMIENTO
		getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((sol_data) => {
			all_insc = sol_data.docs
			all_insc.forEach((doc) => {
				if(id_inscripcion == doc.id){
					solicitud_relacionada = doc.data();
					getDocs(query(collection(db, "Document_RPsD"), where("idInscripcion", "==", id_inscripcion))).then((file_data) => {
						all_docs = file_data.docs;
						all_docs.forEach((d) => {
							my_doc = d.data();
							if (my_doc.contrato){
								contratos_relacionados.push(my_doc)
							}
							else{
								archivos_relacionados.push(my_doc)
							}
						})
					}).then(() => {
						console.log("ARCHIVOS")
						console.log(contratos_relacionados)
						console.log(archivos_relacionados)
					})
				}
			})
		}).then(() => {
			console.log("ALZAMIENTO")
			console.log(solicitud_relacionada)

			///ALZAMIENTO ENCONTRADO
			///FRONTEND MODIFICAR DE ACA


			//////////////////////
		})
	}
}
*/

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
		console.log("RPSD: " + my_rpsd)
		if(estado_secundario == 1){
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

            //buscador_solicitud(4,0,"T", -1) 
            buscador_solicitud(1,0,"T", -1)
            console.log("PHASE 1")

            setTimeout(() => { 
            if(this.inscripciones_encontradas.length>0){
                console.log("CHECKING")
                console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){ //TODOS LOS DATOS TIENEN ESTE VALOR VACIO
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaRequiriente"],
                            "Monto": insc[1]["montoTotal"],
                            "Notaria": insc[1]["nombre_notaria"],
                            "Estado": estad,
                            "Tipo":"I"}
                        this.items.push(item)
                        console.log(insc[1])
                        this.monto+= parseFloat(insc[1]["montoTotal"]);
                    }
                                        
                    });

            }
            console.log("PHASE 2")
            if(this.modificaciones_encontradas.length>0){
                this.modificaciones_encontradas.forEach((insc)=>{
                   if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioNotario"], //numero repertorio notaria
                            "Funcionario": insc[1]["usuarioCreador"], 
                            "Fecha": insc[1]["fechaRequiriente"],
                            "Monto": insc[1]["montoTotal"], 
                            "Notaria": insc[1]["nombre_notaria"],
                            "Estado": estad,
                            "Tipo":"M"}
                        ///console.log(insc[1]) //undefined values
                        /*
                        <td>{{item.Rep}}</td>
                        <td>{{item.Notaria}}</td>
                        <td>{{item.Fecha}}</td>
                        <td>{{item.Monto}}</td>
                        */
                        this.items.push(item)
                    }
                    });

                }
            console.log("PHASE 3")
            if(this.alzamientos_encontrados.length>0){
                this.alzamientos_encontrados.forEach((insc)=>{
                    if(insc[1]["estadoSecundario"]==0){
                        estad="Por pagar"
                    }else{
                        estad="Pagado"
                    }
                    if (insc[1]["firma"]){
                        let item = {
                            "id": insc[0],
                            "Rep": insc[1]["numeroRepertorioNotario"],
                            "Funcionario": insc[1]["usuarioCreador"],
                            "Fecha": insc[1]["fechaRequiriente"], //NO EXISTE TODAVIA
                            "Monto": insc[1]["montoTotal"],
                            "Notaria": insc[1]["nombre_notaria"],
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
        var i = 0;
        var indexCheck = []
        while (i<this.items.length)
        {
            if (document.getElementById(i).checked == true)
            {
                indexCheck.push(i)
            }
            i++
            
        }
        var w = 0
        while (w<indexCheck.length){
            var item = this.items[indexCheck[w]]
            console.log(item)
            //Tipo
            //id
            //1
            //emailUser?
			console.log("SENDING DATA")		
            console.log("LOL")
			modifySecondaryStatus(item.Tipo, item.id, 1, this.emailUser)
			setTimeout(() => {
				console.log(localStorage.user +','+my_rpsd+','+this.monto)
				var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4032/api/transaction/payment'
				var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd + '", "monto":' + this.monto +'}'
					fetch(url, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: params
					}).then((response)=>{
						response.json().then((reqResult) => {
							alert(reqResult.msg)
							
						})
					})
				}, 1500);               
            this.items.splice(indexCheck[w],1)
            w++
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
</style>