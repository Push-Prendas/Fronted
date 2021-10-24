<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col">Recepción Solicitudes</div> 
            <div class="container" >
                <div class="row">
                    <div class="col-lg-4"  style="background-color:white">
                        <h3>N° Repertorio Notaria</h3> 
                        <input type="search" placeholder="N° Repertorio Notaria">
                    </div>
                    <div class="col-lg-4"  style="background-color:white">
                        <h3>N° Repertorio Prenda</h3> 
                        <input type="search" placeholder="N° Repertorio Prenda">
                    </div>
                </div>
                <div class = "row">
                    <button class="buttonRec">Recepcionado</button>
                </div>
                
            </div> 
            
        </div>
        
    </div>
</template>

<script>
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal, rolGlobal,usernameGlobal)
export default {
  name: 'AcreedorFormularios',
  data() {
        return {
            option:'natural',
            headers: ['Tipo', 'Id', 'Name'],
            items: [{}],
        }
    },

    methods:{
        changeOption(){
            var selectBox = document.getElementById("tipoDePersona");
            this.option = selectBox.options[selectBox.selectedIndex].value; 
            console.log(this.option);
        },
        add(item) {
            this.items.push(item);
        }
    }

}

</script>


<style scoped>

:root {
    --blueOscuro: #514BD5;
}
#contenedor{
    width: 60em;
    margin-left: 34%;
    margin-top: 2%;
}

.titleFormulario{
    color: #514BD5;
    font-size: 25px;
    font-family: Roboto;
    font-weight: bold;
    background: white;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
    text-align: center; 
}

.tamanoTipoDocumento{
    width: 10em;
}

.titles{
    margin-bottom: 0.5em;
    margin-top: 1em;
    font-weight: bold;
}

.encabezadoTabla{
    background:#CEF1FF;
    color: #514BD5;
    border-top-left-radius: 5em;
    border-radius: 15em 0em 0em 15em;
}

.bodyTabla{
    background: #E5E5E5;
}


.buttonRec{
    background: #18e945;
    color: white;
    border-radius: 15em;
    width: 10em;
    padding: 0em;
    margin-left: 15em;
    margin-right: 30em;
    margin-top: 4em;
    height: 2em;
}

.conainter{
    align-items: start;
}
</style>