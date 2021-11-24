<template>



    <div id="contenedor" class="row">
        <div class="titleFormulario col">Monto Actuacion </div>  
        <div class="col titleMonto" id="monto2"> ${{this.monto}} </div> 

        <div class="titleFormulario col">Monto Anotaciones </div>  
        <div class="col titleMonto" id="monto3"> ${{this.monto}} </div> 

        <div class="titleFormulario col">Monto Total </div>  
        <div class="col titleMonto" id="monto"> ${{this.monto}} </div> 

    </div>

    
</template>

<script>
export default {
    name: 'Monto',
    data() {
        return {
            monto: "0", //AQUI SE TIENE QUE PONER EL MONTO, TAL VEZ SE DEBA PONER COMO UN PROPS
        }
    },
}
</script>

<style scoped>
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

.titleMonto{
    color: black;
    font-family: Roboto;
    font-weight: bold;
    font-size: 2em;
}
</style>