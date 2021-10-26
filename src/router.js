import Vue from "vue";
import VueRouter from 'vue-router'

import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import usuariosAdmin from "./views/Admin/usuarios.vue";
import notariasAdmin from "./views/Admin/notarias.vue";
import oficinasAdmin from "./views/Admin/oficinas.vue";
import FormularioInscripcion from "./views/FormularioInscrpcion.vue"
import BusquedaAlzamiento from "./views/BusquedaAlzamiento.vue"
import FormularioAlzamiento from "./views/FormularioAlzamiento.vue"
import FormularioModificacion from "./views/FormularioModificacion.vue"
import BuscadorModificacion from "./views/BusquedaModificacion.vue"
import BuscadorJefeServicio from './views/BuscadorJefeServicio.vue'
import ComprobanteSolicutud from './views/ComprobanteSolicitud.vue'
import RecepcionDocBuscador from './views/BuscadorReceptor.vue'
import RevisionDocumentoNotario from './views/RevisionDocumentosNotario.vue'


const routes = [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/Dashboard/:rol/:username",
      name: "Dashboard",
      component: Dashboard,
      props: true
    },
    {
      path: "/Dashboard/:rol/:username/Usuarios",
      name: "usuariosAdmin",
      component: usuariosAdmin,
      props: true
    },
    {
      path: "/Dashboard/:rol/:username/Notarias",
      name: "notariasAdmin",
      component: notariasAdmin,
      props: true
    },
    {
      path: "/Dashboard/:rol/:username/Oficinas",
      name: "oficinasAdmin",
      component: oficinasAdmin,
      props: true
    },
   {
    path: "/Dashboard/:rol/:username/Inscripciondecontratodeprendas",
    name: "Inscripciondecontratodeprendas",
    component: FormularioInscripcion,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Alzamientodecontratodeprendas",
    name: "Alzamientodecontratodeprendas",
    component: BusquedaAlzamiento,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudAlzamiento",
    name: "solicitudAlzamiento",
    component: FormularioAlzamiento,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/ModifContPrendas",
    name: "ModifContPrendas",
    component: FormularioModificacion,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Modificaciondecontratodeprendas",
    name: "Modificaciondecontratodeprendas",
    component: BuscadorModificacion,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Buscador",
    name: "ModificaciondecontratodeprendasBuscador",
    component: BuscadorJefeServicio,
    props: true
  },
  {
    path: "/Dashboard/REVISOR/:username/Tareas",
    name: "ModificaciondecontratodeprendasTareas",
    component: ComprobanteSolicutud, //No va comprobante
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Busqueda",
    name: "ModificaciondecontratodeprendasBusqueda",
    component: RecepcionDocBuscador,
    props: true
  },
  {
    path: "/Dashboard/JEFEDESERVICIO/:username/Tareas",
    name: "ModificaciondecontratodeprendasTareas",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/NOTARIO/:username/MisSolicitudes",
    name: "MisSolicitudesNotario",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/REVISOR/:username/RevisionDoc",
    name: "RevisionDocumentoNotario",
    component: RevisionDocumentoNotario,
    props: true
  },
  {
    path: "/Dashboard/PAGADOR/:username/PagosPendientes",
    name: "PagosPendientes",
    component: Dashboard,
    props: true
  },{
    path: '*',
    name: 'catchAll',
    component: Login
 }
  ];




  const router = new VueRouter({
    mode: "history",
    routes
  });
  

  Vue.use(VueRouter)

  export default router;