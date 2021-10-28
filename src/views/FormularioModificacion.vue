<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div>
            <AntecedentesFormulario :rol="rol" />
            <AcreedorFormulario />
            <VehiculosFormulario :tipoSolicitud="Modificacion" />
            <ContratoFormulario />
            <AnexosFormulario/>
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

export default {
  name: 'formularioModificacion',
  data() {
        return {
            opcion: ['Mis solicitudes','Solicitud de inscripción de contrato de prendas', 'Solicitud de modificación de contrato de prendas', 'Solicitud de alzamiento de contrato de prendas', 'Consultar estado de una solicutud'],
            username: "Maria",
        }
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