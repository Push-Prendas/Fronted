<template>
    <div id="contenedor" class="row">
        <div class="row">
            <div class="titleFormulario col" @change ="setData()">Contrato</div> 
            <div class="row ">
                <div class="col d-flex justify-content-start" @change ="setData()" v-for="(item,index) in items" :key="index">
                    <a :href="item.href" target="black"><font-awesome-icon style= "margin-right:5px" icon="file-download" /></a>
                </div>
            </div>
            
            
        </div>
        <div class="row">
            <div class="titleFormulario col" @change ="setData()">Anexos</div> 
            <div class="row">
                <div class="col d-flex justify-content-start" @change ="setData()" v-for="(item,index) in itemsAnexos" :key="index">
                <a :href="item.href" target="black"><font-awesome-icon style= "margin-right:5px" icon="file-download" /></a>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        items: {
            type: Array,
            default: new Array(),
        },
        itemsAnexos: {
            type: Array,
            default: new Array(),
        },
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