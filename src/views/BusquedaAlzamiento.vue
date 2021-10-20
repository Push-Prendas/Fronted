<template>
<div>
    <Menu :opciones= opcion />
    <Navbar :username= username />
    <div  class="d-flex justify-content-center contenedor row">
        <h1 class="title">Solicitud de alzamiento de contrato de prendas</h1>
        <div class="row d-flex justify-content-center item">
            <div class="col-2">
                <div class="titles d-flex justify-content-center">
                    REPERTORIO DE PRENDA
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text"  placeholder="N de Repertorio">
                    
                </div>
            </div>
            <div class="col-2">
                <div class="titles d-flex justify-content-center">
                    REPERTORIO
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text" placeholder="Año">
                    
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center item">
            <div class="col-4">
                <div class="titles d-flex justify-content-center">
                    IDENTIFICADOR DE ALGUN CONSTITUYENTE
                </div>
                <div class="d-flex justify-content-center">
                    <input type="text" class="nrepertorioleft" placeholder="ID DE CONSTITUYENTE">
                    
                </div>
            </div>
        </div>
        <button class="d-flex justify-content-center button" @click="busqueda()">Buscar</button>
    </div>
</div>

    
</template>

<script>
import Menu from '../components/Menu.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'BusquedaAlzamiento',
    data() {
        return {
            opcion: ['Mis solicitudes','Solicitud de inscripción de contrato de prendas', 'Solicitud de modificación de contrato de prendas', 'Solicitud de alzamiento de contrato de prendas', 'Consultar estado de una solicutud'],
            username: "Maria",
        }
    },
    methods:{
        busqueda(){
            
            this.$router.push({path: `/SolicitudAlzamientoario`})
        }
    },
    components: {
        Menu,
        Navbar
    },
}
</script>

<style scoped>
.contenedor{
    margin-top: 2em;
    color: #514BD5;
    
}

.item{
    margin-top: 5em;
    margin-bottom: 0em;
    font-family: Roboto;
    font-weight: bold;
}

.button{
    width: 20em;
    margin-top: 2em;
    color: #514BD5;
    font-family: Roboto;
    font-weight: bold;
    background: #CEF1FF;
    border-radius: 15em;
}
</style>