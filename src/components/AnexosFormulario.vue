<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col" @change ="setData()">Anexos</div> 
            <div class="input-group mb-3 " @change ="setData()">
                <label  for="anexos"></label><input type="file" multiple class="form-control" id="anexos" @change ="setData()">
                
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
        setData(){
            this.$emit("getAnexos", document.getElementById("anexos").files)
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
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
    width: 10em;
    margin-bottom: 2em;
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


.buttonAdd{
    background: #514BD5;
    color: white;
    border-radius: 15em;
    width: 1em;
    padding: 0em;
    margin-left: 10em;
    margin-right: 30em;
    height: 2em;
}
</style>