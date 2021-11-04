import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

library.add(faDoorOpen, faFileDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA9gBWMZotZCouSnpNI3nve6lETyp0JWsQ",
  authDomain: "prendas-98afc.firebaseapp.com",
  databaseURL: "https://prendas-98afc-default-rtdb.firebaseio.com",
  projectId: "prendas-98afc",
  storageBucket: "prendas-98afc.appspot.com",
  messagingSenderId: "275877377208",
  appId: "1:275877377208:web:cbf8c0ebc77f8788a0704d",
  measurementId: "G-C1D2PNB3M3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export {auth, db, storage}
     /*
	TIPOS DE USUARIO/ROL
		0 -> ADMIN
		1 -> FUNCIONARIONOTARIA
		2 -> NOTARIO
		3 -> PAGADOR
		4 -> REVISOR
		5 -> JEFEDESERVICIO
		6 -> FUNCIONARIOOFICINA
		7 -> RECEPTOR
*/
/*
import { doc, setDoc } from "firebase/firestore";
import {  createUserWithEmailAndPassword } from "firebase/auth";
async function create_user2(email, password,nombre_usuario,rol_usuario){
    var user;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        user = userCredential.user
        console.log(user)
    }).catch(err=>{
        console.log(err.message)
    });
    setDoc(doc(db, "Usuario", email), {
        abogado_activo: false,
        mail: email,
        nombre: nombre_usuario,
        rol: rol_usuario,
        NotariaID: -1,
        OficinaID: -1
        }).then(() => {
        console.log("USER CREATED "+email)

        }).catch((error) => {
        console.log(error.message)
        }) 

}
create_user2("receptor1@receptor1.cl","receptor1", "RECEPTO 1", "RECEPTOR" )
*/


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
