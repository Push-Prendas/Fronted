<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />
        <div class="right">
            <h1> Revisión de documentos </h1>
            <AntecedentesFormulario :rol="rol" />
            <VehiculosLectura :tipoSolicitud="Alzamiento" />
            <!-- FALTA COLOCALAR LOS ARCHIVOS -->
            <div class="row d-flex justify-content-center" id="contenedor">
                <button class="col-2 titleButton">Rechazar</button>
                <button class="col-2 titleButton">Firmar FEA</button>
            </div>
        </div>
        
    </div>
</template>
<script scoped>
import AntecedentesFormulario from '../components/AntecedentesFormulario.vue'
import VehiculosLectura from '../components/VehiculoLecturaFormulario.vue'
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'


console.log("MY OPTS")
//console.log(localStorage.my_opts.split(','))
export default {
  name: 'RevisionDoc',
  data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            rol: localStorage.rol
        }
    },
  components: {
    AntecedentesFormulario,
    VehiculosLectura,
    Menu,
    Navbar,
  },
  
}
console.log(localStorage.my_opts)
</script>

<style scoped>


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

.right {
    margin-right: 10px;
    float: right;
    width: 100%;
    height: auto;
}
</style>