<template>
    <div id="navbar">
        <div class="col-3 logo">
            <img class="logo" src="../assets/LogoDelRegistroCivil.png" alt="dog" width="100px" height="100px">
        </div>
        <div class="col-5">
            <span class="username username-background">{{username}} <router-link to="/" class="logout"> <font-awesome-icon style= "margin-right:5px" icon="door-open" /> </router-link></span>
             
        </div>
        <div class="col">
           
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
        username:String
  }
}

</script>
<style scoped>

:root {
    --white: ffffffff;
}

.logout{
    color: white;
}
#navbar{
    background-color: #E4E4E4;
    height: 8em;  
}

.logo{
    position: relative;
    padding-top: 3px;

}

.username{
    width: 220px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 0px;
    right: 6%;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 24px;
    opacity: 1;
    text-align: center center;
}

.logout{
    float: right;
    margin-right: 10px;
}
.username-background{
    background-color: #514BD5;
    border-radius: 0px 0px 20px 20px;
}

</style>