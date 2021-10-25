<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            
            <AntecedentesFormulario :rol="rol" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes"/>
            <AcreedorFormulario @gettipoPersona="gettipoPersona"  @getrun="getrun"
            @getid="getid" @getpais="getpais" @getrut="getrut" 
            @getrazonsocial="getrazonsocial" @getApaterno="getApaterno" @getAmaterno="getAmaterno" @getnombres="getnombres"/>
            <ConstituyentesFormulario @getConstituyentes="getConstituyentes" />
            <DeudoresFormulario @getDeudores="getDeudores"/>
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" @getnombreRequirente="getnombreRequirente" 
			@getrutRequirente="getrutRequirente" @getCorreoRequirente="getCorreoRequirente"
			@getFechaRequirente="getFechaRequirente"/>
            <VehiculosFormulario @getVehiculos="getVehiculos"/>
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" @click="crearInscripcion(false)">Guardar</button>
                <button class="col-2 titleButton" @click="crearInscripcion(true)">Enviar</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import AcreedorFormulario from '../components/AcreedorFormulario.vue'
import ConstituyentesFormulario from '../components/ConstituyentesFormulario.vue'
import DeudoresFormulario from '../components/DeudoresFormulario.vue'
import VehiculosFormulario from '../components/VehiculosFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import RequirenteFormulario from '../components/RequirenteFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {opciones} from "@/views/Dashboard"
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal)
console.log(opciones)

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

function enviar_solicitud_de_inscripcion_prenda(tipo_documento, fecha_suscripcion, fecha_otorgamiento_escritura, fecha_protocolizacion_contrato_privado, fecha_autorizada,
	numero_repertorio_notario, prohibicion_gravar_enajenar, notaria, nombre_requirente,
	run_requiriente,correo_requiriente, fecha_requiriente, activo_fijo, bienes_agropecuarios, derechos_intangibles, prenda_vehiculo, monto_total, send_flag,
	tipo_persona_acreedor=0, run_acreedor="", nombres_acreedor="",  pais_persona="",
	constituyentes=[], deudores=[], vehiculos=[], contratos=[], archivos=[], rol_oficina=false, Oficina, userid
	){

	//Manejar estado de solicitud primario y secundario"
	console.log("loading")
	//VALIDACION DE DATOS
	var validate = true;
	///Personas es una lista de listas, cada sublista se compone de
	///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
	///3->pais persona
	///[["Natural","20000000-K","Juanito Perez","Chile"],["Juridico","50000000-K","Empresa","Chile"]]

	vehiculos.forEach((v) => {
		if(v[0]){
			console.log("VALIDANDO PATENTES")
			//INVOCAR SERVICIO DEL PATENTE


			//RESULTADOS DEL SERVICIO DE PATENTE
		}
	})

	if(!prenda_vehiculo && vehiculos.length > 0){
		prenda_vehiculo = true;
	}

	//NUMERO REPERTORIO NOTARIO: FOLIO-YEAR
	console.log(numero_repertorio_notario)
	if((numero_repertorio_notario).length != 9 || !validate_number(numero_repertorio_notario)){

		validate = false
		console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
		//FRONTEND => MOSTRAR ERROR

		//////////////////////////
	}

	if(!rol_oficina && contratos.length == 0){
		validate = false
		console.log("NO HAY CONTRATO")
	}

	//ADEMAS DE VER TODAS LAS VALIDACIONES DE TIPO VER CON GRUPO DE SERVICIOS LO DE VERIFICADOR DE PATENTES

	//SUBIR A LA BASE DE DATOS
	if(validate){
		var estado_inicial = 0 //GUARDADO
		console.log("validate")
		if(send_flag){ ///VERIFICAR SI VIENE O NO DE OFICINA
			if(rol_oficina)
				estado_inicial = 3 //ENVIADO DESDE OFICINA
			else
				estado_inicial = 1 //ENVIADO DESDE NOTARIA
		
		}
		//Contar elementos en la lista para dar una ID
		//En este caso funciona porque nosotros NUNCA borramos algo de la base de datos REALMENTE
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var id = sol_data.docs.length + 1;
			console.log(id)
			//INSCRIPCION
			setDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),id.toString()), {
				privacidadDocumento: tipo_documento,
				fechaSuscripcion: fecha_suscripcion,
				fechaOtorgamientoEscritura: fecha_otorgamiento_escritura,
				fechaProtocolizacionContratoPrivado: fecha_protocolizacion_contrato_privado,
				fechaAutorizacionContratoPrivado: fecha_autorizada,
				numeroRepertorioNotario: numero_repertorio_notario,
				numeroRepertorioContratoPrenda: -1,
				prohibicionGravarEnajenar: prohibicion_gravar_enajenar,
				nombre_notaria: notaria,
				nombreRequiriente: nombre_requirente,
				runRequiriente: run_requiriente,
				correoRequiriente: correo_requiriente,
				fechaRequiriente: fecha_requiriente,
				activoFijo: activo_fijo,
				bienesAgropecuarios: bienes_agropecuarios,
				derechosIntangibles: derechos_intangibles,
				prendaVehiculo: prenda_vehiculo,
				montoTotal: monto_total,
				estadoPrimario: estado_inicial,
				estadoSecundario: 0,
				usuarioCreador: userid,
				oficina: Oficina,
				firma: false
			}).then(() => {
				//TABLAS RELACIONADAS
				getDocs(collection(db, "Patente_por_Inscripcion")).then((pat_data) => {
					var patente_id = pat_data.docs.length + 1;
					console.log(patente_id)
					vehiculos.forEach((ve) => {
						///Vehiculos es una lista de listas que guarda vehiculos
						///cada indice de la sublista es 0->PPU, 1->InscripcionPrendaRVM, 2->Prohibicion, 3->alzamiento
						setDoc(doc(collection(db, "Patente_por_Inscripcion"),id.toString()),{
							patente: ve["patente"],
							inscripcionPrendaRVM: ve["rvm"],
							inscripcionProhibicionGravarEnajenar: ve["GoE"],
							alzamiento: false,
							idInscripcion: id
						});
						patente_id+=1;
					})
					
				});
				getDocs(collection(db, "Persona_Solicitud")).then((per_data) => {
					var persona_id = per_data.docs.length + 1;
					console.log(persona_id)
					setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
						tipoContratante: 0, //Acreedor
						tipoAcreedor: tipo_persona_acreedor,
						runPersona: run_acreedor,
						nombrePersona: nombres_acreedor,
						idInscripcion: id,
						paisPersona: pais_persona
					});
					persona_id+=1;
					constituyentes.forEach((con) => {
						setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
							///Constituyentes es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
							///3->pais persona
							tipoContratante: 1, //Constituyente
							tipoAcreedor: con["Tipo"],
							runPersona: con["Id"],
							nombrePersona: con["Name"],
							idInscripcion: id,
							paisPersona: "Chile"
						});
						persona_id+=1;
					})
					deudores.forEach((de) => {
						setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
							///Deudores es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
							///3->pais persona
							tipoContratante: 2, //Deudores
							tipoAcreedor: de["Tipo"],
							runPersona: de["Id"],
							nombrePersona: de["Name"],
							idInscripcion: id,
							paisPersona: "Chile"
						});
						persona_id+=1;
					})


				});
				//REVISAR DOCUMENTOS
				var repertorio = null
				getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
					var id_inspeccion = pat_data.docs.length
					var pt = pat_data.docs[id_inspeccion-1]
					repertorio = pt.data().numero_repertorio_RPsD
					
				}).then(() => {

				getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
					var document_id = doc_data.docs.length
					console.log("Entro")
					const storageRef = ref(storage); 	
					console.log(storageRef.id)				
					for(var i = 0; i<contratos.length; i++){
						const fileRef = ref(storage,contratos[i].name);
						await uploadBytes(fileRef,contratos[i]);
						const url_file = await getDownloadURL(fileRef)
						setDoc(doc(collection(db, "Document_RPsD"),id.toString()),{
							id_alzamiento: "",
							id_modificacion: document_id.toString(),
							idInscripcion: id,
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
						setDoc(doc(collection(db, "Document_RPsD"),id.toString()),{
							idInscripcion: id,
							id_alzamiento: "",
							id_modificacion: document_id.toString(),
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
				alert("Solicitud Enviada Exitosamente")
				//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
				


				//
			})

		})
		});
	}

}
export default {
  name: 'Dashboard',
  data() {
        return {
            opcion: opciones,
            username: usernameGlobal,
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
  props: {

        rol :  {
            type: String,
            default: rolGlobal
        }
  },
  methods: {
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
        crearInscripcion(flags){
			var runacreedor;
			var nombreacreedor;
			if(this.tipoPersona == "Natural"){
				runacreedor = this.run
				nombreacreedor = this.nombres
			}else if(this.tipoPersona == "Juridica"){
				runacreedor = this.rut
				nombreacreedor = this.razonsocial
			}else{
				runacreedor = this.id
				nombreacreedor = this.nombres
			}
            enviar_solicitud_de_inscripcion_prenda(this.tipoDoc.toString(),
				this.FSuscripcion.toString(),
                this.FOtorgamiento.toString(),
                this.FProtocolizacion.toString(),
                this.FAutorizacion.toString(), 
                (this.RepNotaria+"-"+this.anioRepNotaria).toString(),
                this.ProhibGravEnajenar,
                "mi notaria", 
                this.nombreRequirente, 
                this.nDocRequirente, 
				this.correoRequirente,
				this.fechaRequirente,
                this.Bienes[0],
                this.Bienes[1], 
                this.Bienes[2], 
                this.Bienes[3], 
                100, 
				flags, 
				this.tipoPersona, 
                runacreedor.toString(), //id , rut y run
                nombreacreedor, 
                this.pais, 
				this.constituyentes, 
                this.deudores, 
                this.vehiculos, 
                [].push(this.contrato), 
                this.anexos, 
                esOFICINAGlobal,
				"mi oficina",
				emailGlobal
                )
			
		}
  },
  components: {
    AntecedentesFormulario,
    AcreedorFormulario,
    ConstituyentesFormulario,
    DeudoresFormulario,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Menu,
    Navbar,
    RequirenteFormulario,
    Monto
  },
  
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