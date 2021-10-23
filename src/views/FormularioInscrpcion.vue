<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <AntecedentesFormulario :rol="rolGlobal" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"/>
            <AcreedorFormulario @gettipoPersona="gettipoPersona"  @getrun="getrun"
            @getid="getid" @getpais="getpais" @getrut="getrut" 
            @getrazonsocial="getrazonsocial" @getApaterno="getApaterno" @getAmaterno="getAmaterno" @getnombres="getnombres"/>
            <ConstituyentesFormulario />
            <DeudoresFormulario />
            <RequirenteFormulario  v-if="rol == 'Oficina'"/>
            <VehiculosFormulario />
            <ContratoFormulario />
            <AnexosFormulario/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton" >Guardar</button>
                <button class="col-2 titleButton" @click="crearInscripcion">Enviar</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import {db, storage} from "@/main";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
//import {tipoDoc,FOtorgamiento, FSuscripcion, FAutorizacion, FProtocolizacion, RepNotaria, anioRepNotaria, ProhibGravEnajenar} from '../components/AntecedentesFormulario.vue'
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
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
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
function validate_run(rut, digit){
	rut = rut.split("");
	rut.reverse();
	var counter = 2;
	var suma = 0;
	for(var num of rut){
		if(counter == 8) counter = 2;
		suma += num * counter;
		counter ++;
	}
	var trunc = Math.trunc(suma/11);
	var resto = suma - trunc * 11;
	var final = 11 -resto;
	return final == digit;
}
function enviar_solicitud_de_inscripcion_prenda(tipo_documento, fecha_suscripcion, fecha_otorgamiento_escritura, fecha_protocolizacion_contrato_privado, fecha_privada,
	numero_repertorio_notario, numero_repertorio_contrato_prenda, repertorio_notaria_year, prohibicion_gravar_enajenar, notaria, nombre_requirente,
	run_requiriente, activo_fijo, bienes_agropecuarios, derechos_intangibles, prenda_vehiculo, monto_total, send_flag,
	tipo_persona_acreedor=0, run_acreedor="", apellido_materno_acreedor="", apellido_paterno_acreedor="", nombres_acreedor="", razon_social = "", pais_persona="",
	constituyentes=[], deudores=[], vehiculos=[], contratos=[], archivos=[], rol_oficina=false
	){
	//Manejar estado de solicitud primario y secundario"
	console.log("loading")
	//VALIDACION DE DATOS
	var validate = true;
	vehiculos.forEach((v) => {
		if(v[1]){
			console.log("VALIDANDO PATENTES")
			//INVOCAR SERVICIO DEL PATENTE


			//RESULTADOS DEL SERVICIO DE PATENTE
		}
	})

	if(!prenda_vehiculo && vehiculos.length > 0){
		prenda_vehiculo = true;
	}

	//if(numero_repertorio_notario.length != 9 && !validate_number(numero_repertorio_notario)){

		//validate = false
		//console.log("NUMERO REPERTORIO NOTARIO FORMATO INCORRECTO")
		//FRONTEND => MOSTRAR ERROR

		//////////////////////////
	//}

	if(numero_repertorio_contrato_prenda.length != 9 && !validate_number(numero_repertorio_contrato_prenda)){
		validate = false
		console.log("NUMERO REPERTORIO CONTRATO PRENDA FORMATO INCORRECTO")
		//FRONTEND => MOSTRAR ERROR

		//////////////////////////
	}

	var run_req_code = run_requiriente.split("-");
	if(!validate_run(run_req_code[0],run_req_code[1])){
		validate = false
		console.log("RUN REQUIRIENTE INVALIDO")
		//FRONTEND => MOSTRAR ERROR

		//////////////////////////
	}

	var run_acc_code = run_acreedor.split("-");
	if(!validate_run(run_acc_code[0],run_acc_code[1])){
		validate = false
		console.log("RUN ACREEDOR INVALIDO")
		//FRONTEND => MOSTRAR ERROR

		//////////////////////////
	}

	constituyentes.forEach((consts) => {
		var run_const_code = consts[1].split("-");
		if(!validate_run(run_const_code[0],run_const_code[1])){
			validate = false
			console.log("RUN CONSTITUYENTE INVALIDO")
			//FRONTEND => MOSTRAR ERROR
	
			//////////////////////////
		}
	});

	deudores.forEach((deu) => {
		var run_deudor_code = deu[1].split("-");
		if(!validate_run(run_deudor_code[0],run_deudor_code[1])){
			validate = false
			console.log("RUN DEUDOR INVALIDO")
			//FRONTEND => MOSTRAR ERROR
	
			//////////////////////////
		}
	});

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
			var id = sol_data.docs.length;
			console.log(id)
			//INSCRIPCION
			setDoc(doc(collection(db, "Solicitud_Inscripcion_Prenda"),id.toString()), {
				privacidadDocumento: tipo_documento,
				fechaSuscripcion: fecha_suscripcion,
				fechaOtorgamientoEscritura: fecha_otorgamiento_escritura,
				fechaProtocolizacionContratoPrivado: fecha_protocolizacion_contrato_privado,
				fechaAutorizacionContratoPrivado: fecha_privada,
				numeroRepertorioNotario: numero_repertorio_notario,
				numeroRepertorioContratoPrenda: numero_repertorio_contrato_prenda,
				repertorioNotariaYear: repertorio_notaria_year,
				prohibicionGravarEnajenar: prohibicion_gravar_enajenar,
				nombre_notaria: notaria,
				nombreRequiriente: nombre_requirente,
				runRequiriente: run_requiriente,
				activoFijo: activo_fijo,
				bienesAgropecuarios: bienes_agropecuarios,
				derechosIntangibles: derechos_intangibles,
				prendaVehiculo: prenda_vehiculo,
				montoTotal: monto_total,
				estadoPrimario: estado_inicial,
				estadoSecundario: 0,
				usuarioCreador: localStorage.getItem("user_loged"),
				firma: false
			}).then(() => {
				//TABLAS RELACIONADAS
				getDocs(collection(db, "Patente_por_Inscripcion")).then((pat_data) => {
					var patente_id = pat_data.docs.length;
					console.log(patente_id)
					vehiculos.forEach((ve) => {
						///Vehiculos es una lista de listas que guarda vehiculos
						///cada indice de la sublista es 0->PPU, 1->InscripcionPrendaRVM, 2->Prohibicion, 3->alzamiento
						setDoc(doc(collection(db, "Patente_por_Inscripcion"),id.toString()),{
							patente: ve[0],
							inscripcionPrendaRVM: ve[1],
							inscripcionProhibicionGravarEnajenar: ve[2],
							alzamiento: false,
							idInscripcion: id
						});
						patente_id+=1;
					})
					
				});
				getDocs(collection(db, "Persona_Solicitud")).then((per_data) => {
					var persona_id = per_data.docs.length;
					console.log(persona_id)
					setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
						tipoContratante: 0, //Acreedor
						tipoAcreedor: tipo_persona_acreedor,
						runPersona: run_acreedor,
						nombrePersona: nombres_acreedor + " " + apellido_paterno_acreedor + " " + apellido_materno_acreedor,
						idInscripcion: id,
						razonSocial: razon_social,
						paisPersona: pais_persona
					});
					persona_id+=1;
					constituyentes.forEach((con) => {
						setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
							///Constituyentes es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2,3,4-> nombre apellido paterno y materno resp
							///5->razon social, 6->pais persona
							tipoContratante: 1, //Constituyente
							tipoAcreedor: con[0],
							runPersona: con[1],
							nombrePersona: con[2] + " " + con[3] + " " + con[4],
							idInscripcion: id,
							razonSocial: con[5],
							paisPersona: ""
						});
						persona_id+=1;
					})
					deudores.forEach((de) => {
						setDoc(doc(collection(db, "Persona_Solicitud"),id.toString()),{
							///Constituyentes es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2,3,4-> nombre apellido paterno y materno resp
							///5->razon social, 6->pais persona
							tipoContratante: 2, //Deudores
							tipoAcreedor: de[0],
							runPersona: de[1],
							nombrePersona: de[2] + " " + de[3] + " " + de[4],
							idInscripcion: id,
							razonSocial: de[5],
							paisPersona: ""
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
					//const storageRef = ref(storage); 					
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
        getnombres(data) {
        this.nombres = data
        },
        crearInscripcion(){
            enviar_solicitud_de_inscripcion_prenda({
                tipo_documento: this.tipoDoc.toString(),
                fecha_suscripcion: this.FSuscripcion.toString(),
                fecha_otorgamiento_escritura: this.FOtorgamiento.toString(),
                fecha_protocolizacion_contrato_privado: this.FProtocolizacion.toString(),
                fecha_privada: this.FAutorizacion.toString(), 
                numero_repertorio_notario: (this.RepNotaria+"-"+this.anioRepNotaria).toString(),
                numero_repertorio_contrato_prenda: "0000-2021".toString(),
                repertorio_notaria_year: this.anioRepNotaria.toString(),
                prohibicion_gravar_enajenar: this.ProhibGravEnajenar.toString(),
                notaria: "mi notaria", 
                nombre_requirente: "cristoan", 
                run_requiriente: "19635636-3", 
                activo_fijo: true,
                bienes_agropecuarios: false, 
                derechos_intangibles: false, 
                prenda_vehiculo: false, 
                monto_total: 100, 
                send_flag: true, 
                tipo_persona_acreedor: this.tipoPersona.toString(), 
                run_acreedor: this.run.toString(), 
                apellido_materno_acreedor: this.Amaterno.toString(), 
                apellido_paterno_acreedor: this.Apaterno.toString(), 
                nombres_acreedor: this.nombres.toString(), 
                razon_social: null, 
                pais_persona: null, 
                constituyentes: [], 
                deudores: [], 
                vehiculos: [], 
                contratos: [], 
                archivos: [], 
                rol_oficina: true
                 })
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