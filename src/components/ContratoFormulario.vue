<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col">Contrato</div> 
            <div class="input-group mb-3 ">
                <label class="input-group-text " for="inputGroupFile02">Upload</label><input type="file" class="form-control" id="inputGroupFile02">
                
            </div>
            
        </div>

    </div>
</template>

<script>
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