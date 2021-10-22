<template>
    <div id="menu">
        <div class="border">
            <div class="otro">
                <div v-for="(opcion,index) in opciones" :key="index"  :class="[opcionesClass(index),'style-opciones']">
                    <span  class="opciones" @click ="selectAnswer(index)" >{{opcion}} </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { usernameGlobal, emailGlobal, rolGlobal}  from "@/views/Login"
console.log(emailGlobal)
export default {
  name: 'Menu',
  data() {
        return {
            selectedIndex:null,
            answered: false
        }
    },
props: {
        opciones:Array,
        username:{
            type: String,
            default: usernameGlobal
        },
        rol :  {
            type: String,
            default: rolGlobal
        }
  },
  methods:{
      selectAnswer(index) {
            this.selectedIndex = index
            
        },
      opcionesClass(index){
          let answerClass = ''
          var op = this.opciones[index].replaceAll(' ','')
          console.log("esto es lo que quiero---:"+op)

            if (!this.answered && this.selectedIndex === index)
            {
                answerClass = 'selected'
                this.$router.push({path: `/Dashboard/${rolGlobal}/${usernameGlobal}/${op}`, params: {username: usernameGlobal, rol: rolGlobal, opciones: op}})

            }
            else if (this.answered && this.correctIndex === index)
            {
                answerClass = 'correct'
                //this.$router.push({path: `/Dashboard/Admin/${this.username}/${this.opciones[index]}`, params: {username: this.username, rol: this.rol, opciones: this.opciones[index]}})

            }

            return answerClass
      }
  }
}

</script>

<style scoped>
#menu{
    height: 100%;
}
.selected{
    background-color: #CEF1FF;
}
.correct{
    background-color: rgba(196,196,196,1);
}

.border{
    width: 20em;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #C4C4C4;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 7.9em;
    left: 0px;
    overflow: hidden;
    
}

.otro{
    width: 19.9em;
    height: 100%;
    background: rgba(196,196,196,1);
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
    border-style: solid;
}
.style-opciones{
    border: 1px;
    border-bottom-style: solid ;
    padding: 2%; 
}
.opciones{
    text-align: center;
    font-size: 30px;
    font-family: Roboto;
    font-weight: Bold;
    color: rgba(81,75,213,1);
    padding: 2%;
}

</style>