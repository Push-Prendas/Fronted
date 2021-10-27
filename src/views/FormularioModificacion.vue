<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <AntecedentesFormularioALZA :rol="rol" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria"/> 
            <AcreedorFormulario @gettipoPersona="gettipoPersona"  @getrun="getrun"
            @getid="getid" @getpais="getpais" @getrut="getrut" 
            @getrazonsocial="getrazonsocial" @getApaterno="getApaterno" @getAmaterno="getAmaterno" @getnombres="getnombres"/>
            <VehiculosFormulario :tipoSolicitud="Modificacion" @getVehiculos="getVehiculos" />
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Guardar</button>
                <button class="col-2 titleButton" @click="modificar()">Enviar</button>
            </div>
        </div>
        
        
    </div>
</template>
<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormularioALZA from '../components/AntecedentesFormularioMODIF-ALZA.vue'
import AcreedorFormulario from '../components/AcreedorFormulario.vue'
import VehiculosFormulario from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
//VALIDA EL NUMERO DE REPERTORIO
function validate_number(inputNumber){
    if(!inputNumber.includes("-")) return false;
    inputNumber = inputNumber.split("-");
    let number = inputNumber[0];
    let year = inputNumber[1];
    let curYear = new Date().getFullYear();
    if(isNaN(number) || number.includes("e") || number.length != 4) return false; //e counts as infinity
    if(year>curYear || isNaN(year) || year.length < 4) return false;
    return true;
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
		var document_id = doc_data.docs.length
		console.log("Entro")
		//const storageRef = ref(storage); 					
		for(var i = 0; i<contratos.length; i++){
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

function  inscripcion_modificacion(
    tipo_de_documento,//
    fecha_de_suscripcion,//
    fecha_de_otorgamiento,//
    fecha_de_protocolizacion,//
    fecha_de_autorizacion,//
    notaria="",//
    numero_repertorio_notaria,//
    parrafo_modificacion_generica,//EL PARRAFO ES PURO TEXTO Y FALTA AGREARLO A LAS VISTAS
    tipo_de_persona,//
    nombre_acreedor,//EL NOMBRE DEL ACREEDOR LE CORRESPONDE EL GRUPO DE SERVICIOS
    rut_acreedor,//""
    nombre_requirente="",//EL NOMBRE DEL REQUIRENTE  LE CORRESPONDE EL GRUPO DE SERVICIOS
    run_requiriente="",//
    estadoPrimario,//
    contratos=[],//
    archivos=[],//
    activo_fijo,//
    bienes_agropecuarios,//
    derechos_intangibles,//
    vehiculos,//EL VEHICULOS LE CORRESPONDE EL GRUPO DE SERVICIOS Y HAY BUSCAR LOS VEHICULOS QUE LE PERTENECE A LA MODIFICACION
    GrabarEnagenar,//
    correo_requirente="",//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
    fecha_requirente=""//
    ){


        var validate = true;


        //FILTRO
        //PARA FILTRAR EL AÑO SE PUEDE PONER UN MINIMO Y MAXIMO EN EL INPUT DE FECHAS


        console.log(numero_repertorio_notaria)
        if(numero_repertorio_notaria.length != 9 && !validate_number(numero_repertorio_notaria)){

            validate = false
            console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }

        //console.log("verificar")
        //console.log(rut_acreedor)

        /*

        var rut_acc_code = rut_acreedor.split('-');
        if(!validate_run(rut_acc_code[0],rut_acc_code[1])){
            validate = false
            console.log("RUN ACREEDOR INVALIDO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }

        var run_req_code = run_requiriente.split('-');
        if(!validate_run(run_req_code[0],run_req_code[1])){
            validate = false
            console.log("RUN REQUIRIENTE INVALIDO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }*/



        if(validate){

        //SUBIR O GUARDAR LA SOLICITUD
        var ids = null
        getDocs(collection(db,"Solicitud_Modificacion_Prenda")).then((pat_data) => {
            ids = pat_data.docs.length;
            console.log(ids)
            console.log("submit")
            
        }).then(() => {
            setDoc(doc(collection(db,"Solicitud_Modificacion_Prenda"),ids.toString()),{
                tipo_de_documento: tipo_de_documento,
                fecha_de_suscripcion: fecha_de_suscripcion,
                fecha_de_otorgamiento: fecha_de_otorgamiento,
                fecha_de_protocolizacion: fecha_de_protocolizacion,
                fecha_de_autorizacion: fecha_de_autorizacion,
                numero_repertorio_notaria: numero_repertorio_notaria,
                parrafo_modificacion_generica: parrafo_modificacion_generica,
                tipo_de_persona: tipo_de_persona,
                nombre_acreedor: nombre_acreedor,
                rut_acreedor: rut_acreedor,
                nombre_requirente: nombre_requirente,
                run_requiriente: run_requiriente,
                estadoPrimario: estadoPrimario,
                estadoSecundario: 0,
                activo_fijo: activo_fijo,
                bienes_agropecuarios: bienes_agropecuarios,
                derechos_intangibles: derechos_intangibles,
                vehiculos: vehiculos,
                notaria: notaria,
                GrabarEnagenar: GrabarEnagenar,
                correo_requirente: correo_requirente,
                fecha_requirente: fecha_requirente,
                revisorAsignado :-1
            })//18
            
            console.log("entros")
            if(estadoPrimario == 1){// 1 significa que esta en revision en la notaria

                Subir_archivos_en_oficina(contratos,archivos)
                console.log("enviado")
            }



        
        })
    }
    }

export default {
  name: 'formularioModificacion',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            tipoDoc:'',
            FOtorgamiento: '',
            FSuscripcion: '',
            FAutorizacion: '',
            FProtocolizacion: '',
            RepNotaria: '',
            anioRepNotaria: '',
            ProhibGravEnajenar: false,
            tipoPersona:'Natural',
            run: '',
            id: '',
            pais: '',
            rut: '',
            razonsocial: '',
            Apaterno: '',
            Amaterno: '',
            nombres: '',
			nombreRequirente: '',
            nDocRequirente: '',
            correoRequirente: '',
            fechaRequirente: '',
            Bienes: [],
            constituyentes: [{}],
            deudores: [{}],
			vehiculos: [{}],
			contrato: null,
			anexos: null,
        }
    },

  props:{
      rol: {
          type: String,
          default: localStorage.rol
      }

    },
  components: {
    AntecedentesFormularioALZA,
    AcreedorFormulario,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar
  },
  methods: {

        getNotaria(data){
		this.notaria=data
		},
        gettipoDoc(data) { 
        this.tipoDoc = data
        },
        getFOtorgamiento(data) {
        this.FOtorgamiento = data
        },
        getFSuscripcion(data) {
        this.FSuscripcion = data
        },
        getFAutorizacion(data) {
        this.FAutorizacion = data
        },
        getFProtocolizacion(data) {
        this.FProtocolizacion = data
        },
        getRepNotaria(data) {
        this.RepNotaria = data
        },
        getanioRepNotaria(data) {
        this.anioRepNotaria = data
        },
        getProhibGravEnajenar(data) {
        this.ProhibGravEnajenar = data
        },
        gettipoPersona(data) { 
            this.tipoPersona = data
        },
        getrun(data) {
        this.run = data
        },
        getid(data) {
        this.id = data
        },
        getpais(data) {
        this.pais = data
        },
        getrut(data) {
        this.rut = data
        },
        getrazonsocial(data) {
        this.razonsocial = data
        },
        getApaterno(data) {
        this.Apaterno = data
        },
        getAmaterno(data) {
        this.Amaterno = data
        },
		getnombreRequirente(data) {
        this.nombreRequirente = data
        },
        getrutRequirente(data) {
        this.nDocRequirente = data
        },
        getCorreoRequirente(data) {
        this.correoRequirente = data
        },
        getFechaRequirente(data) {
        this.fechaRequirente = data
        },
        getnombres(data) {
        this.nombres = data
        },
        getBienes(data) {
			this.Bienes = data        
        },
        getConstituyentes(data) {
        this.constituyentes = data
        console.log("Constituyentes:"+this.constituyentes)
        },
        getDeudores(data) {
        this.deudores = data
        console.log("Deudores:"+this.deudores)
        },
		getVehiculos(data) {
        this.vehiculos = data
        //console.log("Vehiculos:"+this.vehiculos[0]["patente"],)
        },
		getContrato(data) {
        this.contrato = data
        console.log("Contrato:"+this.contrato)
        },
		getAnexos(data) {
        this.anexos = data
        console.log("Anexos:"+this.anexos)
        },
        modificar(){//agregar flags
            inscripcion_modificacion(
                this.tipoDoc.toString(),//
                this.FSuscripcion.toString(),//
                this.FOtorgamiento.toString(),//
                this.FProtocolizacion.toString(),//
                this.FAutorizacion.toString(),//
                this.notaria,//
                (this.RepNotaria+"-"+this.anioRepNotaria).toString(),////
                "parrafo_modificacion_generica",//EL PARRAFO ES PURO TEXTO Y FALTA AGREARLO A LAS VISTAS
                this.tipoPersona,//
                this.nombres,//EL NOMBRE DEL ACREEDOR LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.run,//
                this.nombreRequirente,//EL NOMBRE DEL REQUIRENTE  LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.nDocRequirente,//
                [].push(this.contrato),//
                this.anexos, 
                this.Bienes[0],
                this.Bienes[1], 
                this.Bienes[2], 
                this.Bienes[3],//EL VEHICULOS LE CORRESPONDE EL GRUPO DE SERVICIOS Y HAY BUSCAR LOS VEHICULOS QUE LE PERTENECE A LA MODIFICACION
                this.ProhibGravEnajenar,//
                this.correoRequirente,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
                this.fechaRequirente//
            )
  }
  
}
}
</script>

<style scoped>
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
}
.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}


.titleButton{
    color: #514BD5;
    font-family: Roboto;
    font-weight: bold;
    background: #CEF1FF;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
}
</style>