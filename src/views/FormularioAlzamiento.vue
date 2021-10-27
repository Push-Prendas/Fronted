<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div id="contenedor" >
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" @getnombreRequirente="getnombreRequirente" 
			@getrutRequirente="getrutRequirente" @getCorreoRequirente="getCorreoRequirente"
			@getFechaRequirente="getFechaRequirente" @change="getPatentes()"/>
            <AntecedentesFormularioALZA :rol="rol" :esInsc="false" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria" @change="getPatentes()"/>
            <VehiculosFormulario :tipoSolicitud="Alzamiento" :items="patentes" />
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" @click="alzar(false)">Guardar</button>
                <button class="col-2 titleButton" @click="alzar(true)">Enviar</button>
            </div>
        </div>
        
    </div>
</template>

<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormularioALZA from '../components/AntecedentesFormularioMODIF-ALZA.vue'
import VehiculosFormulario from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
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

    console.log("LOL FILES")

    if(tipo == 0){// INSCRIPCION
        INSCRIPCION = id
    }
    else if(tipo == 1){//MODIFICACION
        MODIFICACION = id
    }
    else if(tipo == 2){//ALZAMIENTO
        ALZAMIENTO = id
    }

    console.log("INSCRIPCION: " + INSCRIPCION)
    console.log("MODIFICACION: " + MODIFICACION)
    console.log("ALZAMIENTO: " + ALZAMIENTO)

	getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
		var id_inspeccion = pat_data.docs.length
		var pt = pat_data.docs[id_inspeccion-1]
		repertorio = pt.data().numero_repertorio_RPsD
		
	}).then(() => {

	getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
		var document_id = doc_data.docs.length
		console.log("Entro")
        console.log(contratos.length)
		//const storageRef = ref(storage); 					
		for(var i = 0; i<contratos.length; i++){
			const fileRef = ref(storage,contratos[i].name);
			await uploadBytes(fileRef,contratos[i]);
			const url_file = await getDownloadURL(fileRef)
            console.log("CONTRATO")
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
            console.log("ADJUNTO")
			setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
				idInscripcion: INSCRIPCION,
				id_alzamiento: ALZAMIENTO,
				id_modificacion: MODIFICACION,
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

function alzamiento(
    numero_requiriente,//
    tipo_de_documento,//
    fecha_de_otorgamiento,//
    fecha_de_suscripcion,//
    fecha_de_autorizacion,//
    fecha_de_protocolizacion,//
    notaria,//
    numero_repertorio_notaria,//
    nombre_requirente,//EL NOMBRE DEL REQUIRENTE LE CORRESPONDE EL GRUPO DE SERVICIOS
    correo,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
    fecha,//
    contratos=[],//
    archivos=[],//
    activo_fijo,//
    bienes_agropecuarios,//
    derechos_intangibles,
    vehiculos,
    año_repertorio_RPsD,//AGREGADO RECIENTMENTE FALTA PONER EN LA VISTA
    numero_repertorio_RPsD,
    send_flag,
    rol_oficina=false,
    name_oficina
    //AGREGADO RECIENTMENTE FALTA PONER EN LA VISTA
    ){
        var validate = true
        console.log("VERYFING...")
        console.log(name_oficina)
        

        //FILTRO
        //PARA FILTRAR EL AÑO SE PUEDE PONER UN MINIMO Y MAXIMO EN EL INPUT DE FECHAS

        /*
        var run_req_code = numero_requiriente.split('-');
        if(!validate_run(run_req_code[0],run_req_code[1])){
            validate = false
            console.log("RUN REQUIRIENTE INVALIDO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }*/
            
        //SE VERIFICA EL NUMERO DE REPERTORIO DONDE SU LARGO TIENE QUE SER 9
        console.log(numero_repertorio_notaria)
        if(numero_repertorio_notaria.length != 9 && !validate_number(numero_repertorio_notaria)){

            validate = false
            console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
            //FRONTEND => MOSTRAR ERROR
    
            //////////////////////////
        }

    if(validate){
    var estado_inicial = 0 //GUARDADO
    console.log("validate")
    if(send_flag){ ///VERIFICAR SI VIENE O NO DE OFICINA
        if(rol_oficina)
            estado_inicial = 3 //ENVIADO DESDE OFICINA
        else
            estado_inicial = 1 //ENVIADO DESDE NOTARIA

    
    }

    console.log("MY DATA")
    console.log(activo_fijo)
    console.log(estado_inicial)

    var ids = null
    getDocs(collection(db,"Solicitud_Alzamiento_Prenda")).then((pat_data) => {


        ids = pat_data.docs.length;


    }).then(() => {

        setDoc(doc(collection(db,"Solicitud_Alzamiento_Prenda"),ids.toString()),{//se le hace un camino extra, no pude acortar, pero es con el mismo id asi que no deberia haber problemas
            tipo_de_documento: tipo_de_documento,
            fecha_de_otorgamiento: fecha_de_otorgamiento,
            fecha_de_suscripcion: fecha_de_suscripcion,
            fecha_de_autorizacion: fecha_de_autorizacion,
            fecha_de_protocolizacion: fecha_de_protocolizacion,
            notaria: notaria,
            numero_repertorio_notaria: numero_repertorio_notaria,
            numero_requiriente: numero_requiriente,
            nombre_requiriente: nombre_requirente,
            correo: correo,
            fecha: fecha,
            estadoPrimario: estado_inicial,
            estadoSecundario: 0,
            activo_fijo: activo_fijo,
            bienes_agropecuarios: bienes_agropecuarios,
            prendaVehiculo: vehiculos,
            derechos_intangibles: derechos_intangibles,
            año_repertorio_RPsD: año_repertorio_RPsD,
            numero_repertorio_RPsD: numero_repertorio_RPsD,
            oficina: "mi oficina"



    })
    if(estado_inicial == 1){// 1 significa que esta en revision en la notaria

        Subir_archivos_en_oficina(contratos,archivos, ids.toString(), 2)   
    }
    })

    }
}

export default {
  name: 'Dashboard',
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
            constituyentes: [],
            deudores: [],
			vehiculos: [],
			contrato: null,
			anexos: null,
			notaria:'',
        }
    },
  props: {
        rol :  {
            type: String,
            default: localStorage.rol
        },

  },
  components: {
    AntecedentesFormularioALZA,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar,
    RequirenteFormulario,
  },
  methods:{
       
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
        alzar(flags){
            console.log("MIS BIENES")
            console.log(this.Bienes[0])
            console.log(this.Bienes[1])
            console.log(this.Bienes[2])
            console.log(this.Bienes[3])
            alzamiento(
                this.nDocRequirente,//
                this.tipoDoc.toString(),//
                this.FOtorgamiento.toString(),//
                this.FSuscripcion.toString(),//
                this.FAutorizacion.toString(),//
                this.FProtocolizacion.toString(),//
                this.notaria,//
                (this.RepNotaria+"-"+this.anioRepNotaria).toString(),////
                this.nombreRequirente,//EL NOMBRE DEL REQUIRENTE LE CORRESPONDE EL GRUPO DE SERVICIOS
                this.correoRequirente,//EN EL HTML SE PUEDE USAR EL INPUT TEXT DE MAIL PARA VERIFICAR
                this.fechaRequirente,//
                this.contrato,//
                this.anexos, 
                this.Bienes[0],
                this.Bienes[1], 
                this.Bienes[2], 
                this.Bienes[3],
                flags,
                localStorage.esoficina,
                "Mi oficina"
            )
        }
  }
  
}
</script>

<style scoped>
#contenedor{
    width: 60em;
    margin-left: 18%;
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