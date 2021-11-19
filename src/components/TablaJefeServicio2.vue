<template>
    <div id="TablaRevisor">
        <h1 class="d-flex justify-content-center" style="color:#514BD5">Rechazadas</h1>
        <div style="padding:50px; margin-left:300px">
           <table class="table table-sm table-hover zui-table-rounded" >
          <thead style="color: white;background-color: #514BD5;" @dblclick="rellenarTabla()">
            <tr>
              <th scope="col">N° Rep Prenda</th>
              <th scope="col">N° Rep Notaria</th>
              <th scope="col">Oficina/Notaria</th>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo</th>
              <th scope="col">Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="bodyTabla"  v-for="(item,index) in items" :key="index" >
            <tr>
              <th scope="row">{{item.Rep}}</th>
              <th scope="row">{{item.Not}}</th>
              <th scope="row">{{item.Oficina}}</th>
              <th scope="row">{{item.Fecha}}</th>
              <th v-if="item.Tipo == 'I'">Inscripción</th>
              <th v-if="item.Tipo == 'M'">Modificación</th>
              <th v-if="item.Tipo == 'A'">Alzamiento</th>
              <td> 
                  <div class="btn-group" role = "group" aria-label="Basic example">
                      <th class="status">{{item.Estado}}</th>
                  </div>
              </td>
             <th class="rounded-pill" type="button" style="padding-left: 5px; padding-right: 5px; background-color:grey" @click="obtain_id_judge(item.id, item.Tipo)" >Revisar</th>
    
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


var username = localStorage.user
const IR= "/Dashboard/" + localStorage.rol + "/" + username + "/RevisionDocumentosJefeRevisor"



async function buscador_solicitud(tipo_de_solicitud){

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
    ///1 -> HUBO INTENCION DE PAGAR PERO NO ESTA CONFIRMADO
    ///2 -> PAGADO

    ///TIPO DE SOLICITUD: BUSCA ALGUNA CLASE DE SOLICITUD EN ESPECIFICA
    ///I -> INSCRIPCION
    ///M -> MODIFICACION
    ///A -> ALZAMIENTO
    ///T -> TODAS

    ///USER ID: BUSCA LAS SOLICITUDES CREADAS POR EL USER ID, SI NO SE QUIERE BUSCAR POR USER ID Y SE QUIERE SOLO CON
    ///         LOS CRITERIOS ANTERIORES EL ARGUMENTO ES -1

    

    if(tipo_de_solicitud == "T" || tipo_de_solicitud == "I"){
        getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
            var all_insc = sol_data.docs
            all_insc.forEach((doc) => {
                var insc_data = doc.data();
                if(insc_data.estadoPrimario == 6 && insc_data.estadoSecundario >= 1){
                    inscripciones_encontradasGlobal.push([doc.id, insc_data])
                }
            })
        })

    }
    if(tipo_de_solicitud == "T" || tipo_de_solicitud == "M"){
        getDocs(collection(db, "Solicitud_Modificacion_Prenda")).then((sol_data) => {
            var all_insc = sol_data.docs
            all_insc.forEach((doc) => {
                var insc_data = doc.data();
                if(insc_data.estadoPrimario == 6 && insc_data.estadoSecundario >= 1){       
                    modificaciones_encontradasGlobal.push([doc.id, insc_data])
                }
            })
        })

    }
    if(tipo_de_solicitud == "T" || tipo_de_solicitud == "A"){
        getDocs(collection(db, "Solicitud_Alzamiento_Prenda")).then((sol_data) => {
            var all_insc = sol_data.docs
            all_insc.forEach((doc) => {
                var insc_data = doc.data();
                if(insc_data.estadoPrimario == 6 && insc_data.estadoSecundario >= 1){       
                    alzamientos_encontradosGlobal.push([doc.id, insc_data])
                }
            })
        })
    }
}
export default {
    mounted() {
      this.clean()
      this.rellenarTabla()
    },
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
            username: localStorage.user,
            inscripciones_encontradas: inscripciones_encontradasGlobal,
            modificaciones_encontradas : modificaciones_encontradasGlobal,
            alzamientos_encontrados : alzamientos_encontradosGlobal,
            emailUser:localStorage.mail
        }
    },
  methods:{
rellenarTabla() {
            console.log("relleno tabla")
            
            buscador_solicitud("T")
            setTimeout(() => {
            if(this.inscripciones_encontradas.length>0){
                console.log(this.inscripciones_encontradas);
                var estad;
                this.inscripciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "id" : insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Tipo":"I"}
                    console.log(item)
                    console.log(this.items)
                    this.items.push(item)
                    });

                }
            if(this.modificaciones_encontradas.length>0){
                this.modificaciones_encontradas.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "id" : insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Tipo":"I"}

                    this.items.push(item)
                    });

                }
            if(this.alzamientos_encontrados.length>0){
                this.alzamientos_encontrados.forEach((insc)=>{
                    if(insc[1]["estadoPrimario"]==1){
                        estad="Por Firmar"
                    }else{
                        estad="Notif. Rechazo"
                    }
                    let item = {
                            "id" : insc[0],
                            "Rep": insc[1]["numeroRepertorioContratoPrenda"],
                            "Not":insc[1]["numeroRepertorioNotario"],
                            "Oficina": insc[1]["oficina"],
                            "Fecha": insc[1]["fechaRequirente"],
                            "Estado": estad,
                            "Tipo":"I"}

                    this.items.push(item)
                    });

                }
            //this.items=i
            console.log(this.items)
            },3000)
            }        
        ,clean(){
            this.items.length = 0;
            this.inscripciones_encontradas.length = 0;
            this.modificaciones_encontradas.length = 0;
            this.alzamientos_encontrados.length = 0;
        },obtain_id_judge(id, tipo){
            console.log("NOIZ ID")
            console.log(id)
            localStorage.id_judge = id
            localStorage.tipo_judge = tipo



            this.$router.push({path: IR})
            //location.href = '/Dashboard/REVISOR/'+username+'/RevisionDocumentosRevisor'
            
        },
            
            
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
