<template>
    <div id="contenedor" class="row" v-on:="" >     
        <table class="table" >
            <thead class="encabezadoTabla"   > 
                <tr>
                <th scope="col" v-for="(thead,index) in thread" :key="index">{{thead}}</th>
                <th scope="col"></th>
                </tr>
            </thead>

            <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
                <td>{{item.Rep}}</td>
                <td>{{item.Fecha}}</td>
                <td >
                    <p class="titleFormulario">{{item.Estado}} </p>
                </td>
                <td>
                    <a class="logout" @click="obtain_id_go(item.ID, item.Tipo)"><font-awesome-icon style= "margin-right:5px" icon="file-download" /> </A>
                </td>
            </tbody>
 
        </table> 
         
    </div>
</template>

<script>
import {db} from "@/main";
import { collection, getDocs, updateDoc, getDoc} from "firebase/firestore";
var inscripciones_encontradasGlobal = []
var modificaciones_encontradasGlobal = []
var alzamientos_encontradosGlobal = []

var username = localStorage.user

const URL_REVISION = "/Dashboard/" + localStorage.rol + "/" + username + "/Inscripciondecontratodeprendas"

function firmarDocumento(tipo_de_solicitud, id_solicitud){
	if (tipo_de_solicitud == "I"){
		updateDoc(getDoc(collection(db, "Solicitud_Inscripcion_Prenda",id_solicitud)),{
			firma: true
		}).then(() => {
			console.log("FIRMADO")
		})
	}
	else if (tipo_de_solicitud == "M"){
		updateDoc(getDoc(collection(db, "Solicitud_Modificacion_Prenda",id_solicitud)),{
			firma: true
		});
	}
	else if (tipo_de_solicitud == "A"){
		updateDoc(getDoc(collection(db, "Solicitud_Alzamiento_Prenda",id_solicitud)),{
			firma: true
		});
	}
}
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
            return
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
            return
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
            return
			//UNA VEZ LOS ALZAMIENTOS ESTAN LISTAS VER QUE HACER CON ELLAS ACA

			///////
		})
	}

    


}

export default {
    mounted() {
      this.clean()
      this.rellenarTabla()

    },
  name: 'MisSolicitudesNotario',
    data() {
        return {
            items: [],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Rep. Notaria','Fecha', 'Estado'],
            username: localStorage.mail,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal
        }
    },
    methods:{

        obtain_id_go(id, tipo){
            console.log("NOIZ ID")
            console.log(id)
            localStorage.id_revisar = id
            localStorage.tipo_revisar = tipo
            location.href = URL_REVISION
        },

        clean(){
            this.items.length = 0;
            this.inscripciones_encontradas.length = 0;
            this.modificaciones_encontradas.length = 0;
            this.alzamientos_encontrados.length = 0;
            
        },


        rellenarTabla(){

            console.log("DATADTA")
            console.log(localStorage.mail)
            buscador_solicitud(0,0,"T",localStorage.mail)

            console.log(this.items)
            console.log("DATADTA")
            console.log("-----------------------------------")
            console.log(this.items)
            console.log(this.inscripciones_encontradas)
            console.log(this.modificaciones_encontradas)
            console.log(this.alzamientos_encontrados)
            console.log("-----------------------------------")

            setTimeout(() => { 
                console.log("relleno tabla")
                if(this.inscripciones_encontradas.length>0){
                    console.log(this.inscripciones_encontradas);
                    var estad;
                    this.inscripciones_encontradas.forEach((insc)=>{
                        estad="En Edicion"
                        let item = {
                                "Rep": insc[1]["numeroRepertorioNotario"],
                                "Funcionario": insc[1]["usuarioCreador"],
                                "Fecha": insc[1]["fechaSuscripcion"],
                                "Estado": estad,
                                "ID": insc[0],
                                "Tipo": "I"}
                        console.log(item)
                        console.log(this.items)
                        this.items.push(item)
                        });

                    }
                if(this.modificaciones_encontradas.length>0){
                    this.modificaciones_encontradas.forEach((insc)=>{
                        estad="En Edicion"
                        let item = {
                                "N° Rep. Notaria": insc[1]["numeroRepertorioNotario"],
                                "Funcionario": insc[1]["usuarioCreador"],
                                "Fecha": insc[1]["fechaSuscripcion"],
                                "Estado": estad,
                                "ID": insc[0],
                                "Tipo": "M"}

                        this.items.push(item)
                        });

                    }
                if(this.alzamientos_encontrados.length>0){
                    this.alzamientos_encontrados.forEach((insc)=>{
                        estad="En Edicion"
                        let item = {
                                "N° Rep. Notaria": insc[1]["numeroRepertorioNotario"],
                                "Funcionario": insc[1]["usuarioCreador"],
                                "Fecha": insc[1]["fechaSuscripcion"],
                                "Estado": estad,
                                "ID": insc[0],
                                "Tipo": "A"}

                        this.items.push(item)
                        });

                    }
                //this.items=i
                console.log("MY ITEMS")
                console.log(this.items)}, 
            1000);

            
        },
        firmardoc(){
            firmarDocumento()
        },
            
        },

    /*created(){
        //this.items=[]
        this.rellenarTabla()
        
    }*/
    
}



</script>

<style scoped>

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 29%;
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