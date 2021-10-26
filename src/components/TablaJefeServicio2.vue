<template>
    <div id="TablaRevisor">
        <h1 class="d-flex justify-content-center" style="color:#514BD5">Rechazadas</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;" @dblclick="rellenarTabla()">
            <tr>
              <th scope="col">N° Repertorio Prenda</th>
              <th scope="col">Notaria</th>
              <th scope="col">Tipo</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
            <tr>
              <th>{{item.Rep}}</th>
              <th>{{item.Notaria}}</th>
              <th v-if="item.Tipo == 'I'">Inscripción</th>
              <th v-if="item.Tipo == 'M'">Modificación</th>
              <th v-if="item.Tipo == 'A'">Alzamiento</th>
              <th>{{item.Fecha}}</th>
    
            </tr>
          </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
import {db} from "@/main";
import { collection, getDocs} from "firebase/firestore";
console.log(usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal)
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
export default {
  name: 'TablaRevisor',
  props: {
        opcion:Array,
    
        rol :  {
            type: String,
            default: "REVISOR"
        }
  },
  data() {
        return {
            items: [],  //AQUI HAY QUE PONER LO QUE ENTRE DE LA REQUEST CON JSON
            thread : ['N° Rep. Notaria', 'Funcionario', 'Fecha', 'Estado'],
            username: usernameGlobal,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            emailUser:emailGlobal
        }
    },
  methods:{
        rellenarTabla() {
            console.log("relleno tabla")
            
            buscador_solicitud(4,0,"T", this.emailUser)
            if(this.inscripciones_encontradas.length>0){
                console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    if (insc[1]["nombre_notaria"] != ""){
                      let item = {
                              "Rep": insc[1]["numeroRepertorioNotario"],
                              "Funcionario": insc[1]["usuarioCreador"],
                              "Fecha": insc[1]["fechaSuscripcion"],
                              "Notaria": insc[1]["nombre_notaria"],
                              "Estado": estad,
                              "Tipo":"I"}
                      console.log(item)
                      console.log(this.items)
                      this.items.push(item)
                    }
                    });

                }
            if(this.modificaciones_encontradas.length>0){
                this.modificaciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    if (insc[1]["nombre_notaria"] != ""){
                      let item = {
                              "Rep": insc[1]["numeroRepertorioNotario"],
                              "Funcionario": insc[1]["usuarioCreador"],
                              "Fecha": insc[1]["fechaSuscripcion"],
                              "Notaria": insc[1]["nombre_notaria"],
                              "Estado": estad,
                              "Tipo":"I"}
                      console.log(item)
                      console.log(this.items)
                      this.items.push(item)
                    }
                    });

                }
            if(this.alzamientos_encontrados.length>0){
                this.alzamientos_encontrados.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    if (insc[1]["nombre_notaria"] != ""){
                      let item = {
                              "Rep": insc[1]["numeroRepertorioNotario"],
                              "Funcionario": insc[1]["usuarioCreador"],
                              "Fecha": insc[1]["fechaSuscripcion"],
                              "Notaria": insc[1]["nombre_notaria"],
                              "Estado": estad,
                              "Tipo":"I"}
                      console.log(item)
                      console.log(this.items)
                      this.items.push(item)
                    }
                    });

                }
            //this.items=i
            console.log(this.items)
            
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

.tamanoTipoDocumento{
    width: 10em;
}
</style>
