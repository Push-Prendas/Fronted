<template>
    <div id="dashboard" >
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right" ref="content">
            <RequirenteFormulario  v-if="rol == 'FUNCIONARIOOFICINA'" @getnombreRequirente="getnombreRequirente" 
			@getrutRequirente="getrutRequirente" @getCorreoRequirente="getCorreoRequirente"
			@getFechaRequirente="getFechaRequirente"/>
            <AntecedentesFormulario :rol="rol" @gettipoDoc="gettipoDoc"  @getFOtorgamiento="getFOtorgamiento"
            @getFSuscripcion="getFSuscripcion" @getFAutorizacion="getFAutorizacion" @getFProtocolizacion="getFProtocolizacion" 
            @getRepNotaria="getRepNotaria" @getanioRepNotaria="getanioRepNotaria" @getProhibGravEnajenar="getProhibGravEnajenar"
            @getBienes="getBienes" @getNotaria="getNotaria"/>
            <AcreedorFormulario @gettipoPersona="gettipoPersona"  @getrun="getrun"
            @getid="getid" @getpais="getpais" @getrut="getrut" 
            @getrazonsocial="getrazonsocial" @getApaterno="getApaterno" @getAmaterno="getAmaterno" @getnombres="getnombres"/>
            <ConstituyentesFormulario @getConstituyentes="getConstituyentes" :modo="'Escribir'"/>
            <DeudoresFormulario @getDeudores="getDeudores" :modo="'Escribir'"/>
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
import {db,storage} from "@/main";
import { collection, getDocs, setDoc, doc, updateDoc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
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
import jsPDF  from 'jspdf';
import html2canvas from 'html2canvas';
//import { getStorage } from "firebase/storage";
//import { getApp,initializeApp  } from "firebase/app";


  
//initializeApp()

//const storage2 = getStorage(firebaseApp);


  
//const app = initializeApp(firebaseConfig);
var preciosGlobal = []
var my_rpsd;



//const storage2 = getStorage();

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
	tipo_persona_acreedor, run_acreedor, nombres_acreedor,  pais_persona,
	constituyentes=[], deudores=[], vehiculos=[], contratos=[], archivos=[], rol_oficina=false, Oficina, userid
	){

	//Manejar estado de solicitud primario y secundario"
	console.log("loading")
	//VALIDACION DE DATOS
	var validate = true;
	console.log("PERSONAS DE LA SOLICITUD")
	console.log(constituyentes)
	console.log(deudores)
	console.log(vehiculos)
	
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
		alert("Numero repertorio notario en formato incorrecto")

		//////////////////////////
	}
	console.log("OFICINA: " + rol_oficina)

	if(!rol_oficina){
		if(contratos.length == 0){
			validate = false
			console.log("NO HAY CONTRATO")
			alert("No hay contrato")
		}		
	}

	
	//ADEMAS DE VER TODAS LAS VALIDACIONES DE TIPO VER CON GRUPO DE SERVICIOS LO DE VERIFICADOR DE PATENTES

	//SUBIR A LA BASE DE DATOS
	if(validate){
		var estado_inicial = 0 //GUARDADO
		console.log("validate")
		if(send_flag){ ///VERIFICAR SI VIENE O NO DE OFICINA
			if(parseInt(localStorage.esoficina)){
				console.log("validate asignando estado")
				estado_inicial = 3 //ENVIADO DESDE OFICINA
			}else{
				console.log("validate asignando estado")
				estado_inicial = 1 //ENVIADO DESDE NOTARIA
			}
		
		}
		//Contar elementos en la lista para dar una ID
		//En este caso funciona porque nosotros NUNCA borramos algo de la base de datos REALMENTE
		getDocs(collection(db, "Solicitud_Inscripcion_Prenda")).then((sol_data) => {
			var id = sol_data.docs.length + 1;
			console.log("validate creando inscripcion")
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
				fechaRequirente: fecha_requiriente,
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
					if(vehiculos.length>0){
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
					
					}

				});
				getDocs(collection(db, "Persona_Solicitud")).then((per_data) => {
					var persona_id = per_data.docs.length + 1;
					console.log(persona_id)
					setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
						tipoContratante: 0, //Acreedor
						tipoAcreedor: tipo_persona_acreedor,
						runPersona: run_acreedor,
						nombrePersona: nombres_acreedor,
						idInscripcion: id,
						paisPersona: pais_persona
					});
					persona_id+=1;
					constituyentes.forEach((con) => {
						let pais = con["Pais"]

						setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
							///Constituyentes es una lista de listas, cada sublista se compone de
							///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
							///3->pais persona
							
							tipoContratante: 1, //Constituyente
							tipoAcreedor: con["Tipo"],
							runPersona: con["Id"],
							nombrePersona: con["Name"],//EN JURIDICA ES RAZON SOCIAL 
							idInscripcion: id,
							paisPersona: pais
						});
						persona_id+=1;
					})
					if(deudores.length>0){
						deudores.forEach((de) => {
							let pais = de["Pais"]
							if(pais == ""){
								pais = "Chile"
							}
							setDoc(doc(collection(db, "Persona_Solicitud"),persona_id.toString()),{
								///Deudores es una lista de listas, cada sublista se compone de
								///0->tipo_contratante, 1->run o rut de persona, 2 -> Nombre
								///3->pais persona
								tipoContratante: 2, //Deudores
								tipoAcreedor: de["Tipo"],
								runPersona: de["Id"],
								nombrePersona: de["Name"],
								idInscripcion: id,
								paisPersona: pais
							});
							persona_id+=1;
						})

					}


				});
				//REVISAR DOCUMENTOS
				var repertorio = null
				console.log("validate revisando documents")
				getDocs(collection(db,"Document_RPsD")).then((pat_data) => {
					var id_inspeccion = pat_data.docs.length
					var pt = pat_data.docs[id_inspeccion-1]
					repertorio = pt.data().numero_repertorio_RPsD
					
				}).then(() => {
				console.log("validate revisando documents 2")

				getDocs(collection(db, "Document_RPsD")).then(async(doc_data) => {
					var document_id = doc_data.docs.length
					console.log("Entro")

					console.log(contratos)
					console.log(archivos)



					console.log("---------------------")
					//const storageRef = ref(storage); 	
					//console.log(storageRef.id)				
					for(var i = 0; i<contratos.length; i++){

						const fileRef = ref(storage,contratos[i].name);
						await uploadBytes(fileRef,contratos[i]);
						const url_file = await getDownloadURL(fileRef)
						console.log("MY URL")
						console.log(url_file)
						console.log(document_id.toString())
						console.log("---------------------")
						setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
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
						setDoc(doc(collection(db, "Document_RPsD"),document_id.toString()),{
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

				})

			}).then(() => {
				console.log("EVERYTHING ITS SEND SUCCESFULLY---")
				if (send_flag==false){
					//TODO: HACER QUE SE GUARDEN LOS DOCS
					alert("Solicitud Guardada Exitosamente")
				}else{
					console.log("PAGANDO EN CAJA")
					//PARA FRONTED: SI QUIEREN HACER ALGO DESPUES DE QUE SE SUBA EL FORMULARIO PONGANLO ACA
					if (rol_oficina){
						modifySecondaryStatus("I",id.toString(),1,userid)
						setTimeout(() => {
							var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4033/api/checkout/pay'
							var params = '{"id_persona":"' + localStorage.rutLog + '", "numero_repertorio":"' + my_rpsd + '", "monto":' + monto_total +'}'
							fetch(url, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: params
							}).then((response)=>{
								response.json().then((reqResult) => {
									alert(reqResult.msg)
									console.log("PAGADO")
									modifySecondaryStatus("I",id.toString(),2,userid)
									this.redirect()					
								})
							})
						}, 1500);
						
					}	
					alert("Solicitud Enviada Exitosamente")
					if(!rol_oficina)
						this.redirect()
				}
				
	


				//
			})
		})
		});

		////LLAMADA A SERVICIOS////
		

	}

}



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
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
					numeroRepertorioContratoPrenda: counter + "-" + year.toString()
				});
			}
		}
		else{
			if (tipo_de_solicitud == "I"){
				updateDoc(doc(db, "Solicitud_Inscripcion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,

				}).then(() => {
					console.log("ACTUALIZADO")
				})

			}
			else if (tipo_de_solicitud == "M"){
				updateDoc(doc(db, "Solicitud_Modificacion_Prenda",id_solicitud),{
                    
					estadoSecundario: estado_secundario,
				});
			}
			else if (tipo_de_solicitud == "A"){
				updateDoc(doc(db, "Solicitud_Alzamiento_Prenda",id_solicitud),{
                    
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


function see_prices(){
	getDocs(collection(db,"Precios")).then((price_Data) => { 
		var my_prices = price_Data.docs
		my_prices.forEach((p) => {
			var p_data = p.data();
			preciosGlobal.push(p_data)
		})
		console.log(preciosGlobal)
	})
}


export default {
  mounted(){
	see_prices()
	setTimeout(() => {
		console.log("DINERO")
		const monto = document.getElementById('monto')
		monto.innerHTML = "$" + preciosGlobal[0]["precio"]
	}, 1500);
  },
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
            fechaRequirente: this.currentDateTime(),
            Bienes: [false, false, false, false],
            constituyentes: [],
            deudores: [],
			vehiculos: [],
			contrato: [],
			anexos: [],
			notaria:''
        }
    },
  props: {

        rol :  {
            type: String,
            default: localStorage.rol
        }
  },
  methods: {
		redirect(){
			document.getElementById("tabladeudores").value =[]
			document.getElementById("tablaconstituyentes").value =[]
			document.getElementById("tablapatentesinscripcion").value =[]

			this.$router.push({path:`/Dashboard/${localStorage.rol}/${localStorage.user}/MisSolicitudes`})

		},
		currentDateTime() {
		const current = new Date();
		const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
		return date;
		},
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
		downloadWithCSS() {
            const doc = new jsPDF();
            /** WITH CSS */
            var canvasElement = document.createElement('canvas');
                html2canvas(this.$refs.content,{scale:1}, { canvas: canvasElement 
                }).then(function (canvas) {
                const img = canvas.toDataURL("image/jpeg",0.8);
                doc.addImage(img,'JPEG',20,20,120,120);
                doc.save("sample.pdf");
            });
        },
        crearInscripcion(flags){
            this.downloadWithCSS()
			var runacreedor;
			var nombreacreedor;
			if(this.tipoPersona == "Natural"){
				runacreedor = this.run
				nombreacreedor = this.nombres + " " + this.Apaterno + " " + this.Amaterno
			}else if(this.tipoPersona == "Juridica"){
				runacreedor = this.rut
				nombreacreedor = this.razonsocial
			}else{
				runacreedor = this.id
				nombreacreedor = this.nombres
			}
			var oReq = new XMLHttpRequest();
			var url = 'http://ec2-75-101-231-83.compute-1.amazonaws.com:4030/api/users/user?run=' + runacreedor  
			oReq.open("GET", url);
			oReq.send();
			setTimeout(() => {
				oReq.onload = ()=>{
					if(oReq.status == 200){
						var reqResult = JSON.parse(oReq.response);
						if (reqResult.valid){
							enviar_solicitud_de_inscripcion_prenda(this.tipoDoc.toString(),
							this.FSuscripcion.toString(),
							this.FOtorgamiento.toString(),
							this.FProtocolizacion.toString(),
							this.FAutorizacion.toString(), 
							(this.RepNotaria+"-"+this.anioRepNotaria).toString(),
							this.ProhibGravEnajenar,
							this.notaria, 
							this.nombreRequirente, 
							this.nDocRequirente, 
							this.correoRequirente,
							this.fechaRequirente,
							this.Bienes[0],
							this.Bienes[1], 
							this.Bienes[2], 
							this.Bienes[3], 
							preciosGlobal[0]["precio"], 
							flags, 
							this.tipoPersona, 
							runacreedor.toString(), //id , rut y run
							nombreacreedor, 
							this.pais, 
							this.constituyentes, 
							this.deudores, 
							this.vehiculos, 
							this.contrato, 
							this.anexos, 
							localStorage.rol == 'FUNCIONARIOOFICINA',
							"mi oficina",
							localStorage.mail
							)
						}
						else{
							alert(reqResult.msg)
						}
					}
				}
			}, 2000);
			
			this.$router.push({path: `/Dashboard/${localStorage.rol}/${localStorage.user}/MisSolicitudes`, params: {username: localStorage.user, rol: localStorage.rol}})

		},
		
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