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
            <VehiculosFormulario :tipoSolicitud="Modificacion" @getVehiculos="getVehiculos" />
            <ContratoFormulario  v-if="rol !== 'FUNCIONARIOOFICINA'" @getContrato="getContrato"/>
            <AnexosFormulario v-if="rol !== 'FUNCIONARIOOFICINA'" @getAnexos="getAnexos"/>
            <Monto/>
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Guardar</button>
                <button class="col-2 titleButton">Enviar</button>
            </div>
        </div>
        
        
    </div>
</template>
<script scoped>

import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import AcreedorFormulario from '../components/AcreedorFormulario.vue'
import VehiculosFormulario from '../components/VehiculoLecturaFormulario.vue'
import ContratoFormulario from '../components/ContratoFormulario.vue'
import AnexosFormulario from '../components/AnexosFormulario.vue'
import Monto from '../components/Monto.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
import {opciones} from "@/views/Dashboard"
import { usernameGlobal, emailGlobal, rolGlobal, esOFICINAGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal, esOFICINAGlobal)
console.log(opciones)



export default {
  name: 'formularioModificacion',
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
        /*
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
        */
  },
  components: {
    AntecedentesFormulario,
    AcreedorFormulario,
    VehiculosFormulario,
    ContratoFormulario,
    AnexosFormulario,
    Monto,
    Menu,
    Navbar
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