<template>
    <div id="dashboard">
        <Menu :opciones= opcion />
        <Navbar :username= username />

    </div>
</template>

<script>
import Menu from '../../components/Menu.vue'
import Navbar from '../../components/Navbar.vue'

export default ({
    data() {
        return {
            opcion: localStorage.my_opts.split(','),
            username: localStorage.user,
            items: []
        }
    },
    name: 'Dashboard',
    components: {
        Menu,
        Navbar,
    },
})
</script>

<style scoped>
.zui-table-rounded thead th:first-child {
    border-radius: 10px 0 0 0;
}
.zui-table-rounded thead th:last-child {
    border-radius: 0 10px 0 0;
}

.zui-table-rounded tbody tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
}
.zui-table-rounded tbody tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
}

.tamanoTipoDocumento{
    width: 10em;
}

.status{
    padding-left: 5px; 
    padding-right: 5px; 
    background-color:#B9AA23;
    color: white;
    border-radius: 15px;

}

.contenedor{
    margin-top: 2em;
    color: #514BD5;
    width: 80%;

}
.right {
    margin-right: 10px;
    float: right;
    width: 80%;
    height: auto;
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
    color: white;
    font-family: Roboto;
    font-weight: bold;
    background: #514BD5;
    border-radius: 15em;
}
</style>
