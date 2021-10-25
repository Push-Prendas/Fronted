<template>
    <div id="contenedor" class="row" v-on:="" >     
        <table class="table" >
            <thead class="encabezadoTabla" @dblclick="rellenarTabla()">
                <tr>
                <th scope="col" v-for="(thead,index) in thread" :key="index">{{thead}}</th>
                <th scope="col"></th>
                </tr>
            </thead>

            <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
                <td>{{item.Rep}}</td>
                <td>{{item.Funcionario}}</td>
                <td>{{item.Fecha}}</td>
                <td >
                    <p class="titleFormulario">{{item.Estado}} </p>
                </td>
                <td>
                    <a class="logout" :href="'/Dashboard/NOTARIO/'+username+'/RevisionDoc'"><font-awesome-icon style= "margin-right:5px" icon="file-download" /> </A>
                </td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";
console.log(usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal)
var inscripciones_encontradas = []
var modificaciones_encontradas = []
var alzamientos_encontrados = []
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
						inscripciones_encontradas.push([doc.id, insc_data])
					}
				}
			})
		}).then(() => {
			console.log("INSCRIPCIONES ENCONTRADAS")
			console.log(inscripciones_encontradas)
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
						modificaciones_encontradas.push([doc.id, insc_data])
					}
				}
			})
		}).then(() => {
			console.log("MODIFICACIONES ENCONTRADAS")
			console.log(modificaciones_encontradas)
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
						alzamientos_encontrados.push([doc.id, insc_data])
					}
				}
			})
		}).then(() => {
			console.log("INSCRIPCIONES ENCONTRADAS")
			console.log(alzamientos_encontrados)
			//UNA VEZ LOS ALZAMIENTOS ESTAN LISTAS VER QUE HACER CON ELLAS ACA

			///////
		})
	}
}

export default {
  name: 'MisSolicitudesNotario',
  data() {
        return {
            items: [{}],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Rep. Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: usernameGlobal
        }
    },
    methods:{
        rellenarTabla() {
            var i =[]
            inscripciones_encontradas = []
            modificaciones_encontradas = []
            alzamientos_encontrados = []
            console.log("relleno tabla")
            buscador_solicitud(1,0,"T", -1);
            if(inscripciones_encontradas.length>0){
                var estad;
                inscripciones_encontradas.forEach((insc)=>{
                    if(insc["estado_primario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "Rep": insc["numeroRepertorioNotario"],
                            "Funcionario": insc["usuarioCreador"],
                            "Fecha": insc["fechaSuscripcion"],
                            "Estado": estad}

                    i.push(item)
                    });

                }
            if(modificaciones_encontradas.length>0){
                modificaciones_encontradas.forEach((insc)=>{
                    if(insc["estado_primario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "N° Rep. Notaria": insc["numeroRepertorioNotario"],
                            "Funcionario": insc["usuarioCreador"],
                            "Fecha": insc["fechaSuscripcion"],
                            "Estado": estad}

                    i.push(item)
                    });

                }
            if(alzamientos_encontrados.length>0){
                alzamientos_encontrados.forEach((insc)=>{
                    if(insc["estado_primario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "N° Rep. Notaria": insc["numeroRepertorioNotario"],
                            "Funcionario": insc["usuarioCreador"],
                            "Fecha": insc["fechaSuscripcion"],
                            "Estado": estad}

                    i.push(item)
                    });

                }
            this.items=i
            console.log(this.items)
            return i
            
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
</style>