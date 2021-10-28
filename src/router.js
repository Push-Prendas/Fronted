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
import FormularioModificacionALZPARCIAL from "./views/FormularioModificacionALZPARCIAL.vue"
import FormularioModificacionCAMBIOACREEDOR from "./views/FormularioModificacionCAMBIOACREEDOR.vue"
import FormularioModificacionOTRO from "./views/FormularioModificacionOTRO.vue"
import FormularioModificacionPROHIBACTO from "./views/FormularioModificacionPROHIBACTO.vue"

import BuscadorModificacion from "./views/BusquedaModificacion.vue"
import BuscadorJefeServicio from './views/BuscadorJefeServicio.vue'
import ComprobanteSolicutud from './views/ComprobanteSolicitud.vue'
import RecepcionDocBuscador from './views/BuscadorReceptor.vue'
import RevisionDocumentoNotario from './views/RevisionDocumentosNotario.vue'

import FormularioInscripcionEdit from './views/FormularioInscrpcionedicion.vue'
import FormularioAlzamientoEdit from './views/FormularioAlzamientoedicion.vue'
import FormularioModificacion1Edit from './views/FormularioModificacionALZPARCIALedicion.vue'
import FormularioModificacion2Edit from "./views/FormularioModificacionCAMBIOACREEDORedicion.vue"
import FormularioModificacion3Edit from "./views/FormularioModificacionPROHIBACTOedicion.vue"
import FormularioModificacion4Edit from "./views/FormularioModificacionOTROedicion.vue"


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
    path: "/Dashboard/:rol/:username/FormularioModificacionALZPARCIAL",
    name: "FormularioModificacionALZPARCIAL",
    component: FormularioModificacionALZPARCIAL,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/FormularioModificacionCAMBIOACREEDOR",
    name: "FormularioModificacionCAMBIOACREEDOR",
    component: FormularioModificacionCAMBIOACREEDOR,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/FormularioModificacionOTRO",
    name: "FormularioModificacionOTRO",
    component: FormularioModificacionOTRO,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/FormularioModificacionPROHIBACTO",
    name: "FormularioModificacionPROHIBACTO",
    component: FormularioModificacionPROHIBACTO,
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
    path: "/Dashboard/REVISOR/:username/ComprobanteSolicutud",
    name: "ComprobanteSolicutud",
    component: ComprobanteSolicutud,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Busqueda",
    name: "ModificaciondecontratodeprendasBusqueda",
    component: RecepcionDocBuscador,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/Tareas",
    name: "Tareas",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/JEFEDESERVICIO/:username/Informes",
    name: "InformeSolicitudes",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/MisSolicitudes",
    name: "MisSolicitudes",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/RevisionDoc",
    name: "RevisionDocumentoNotario",
    component: RevisionDocumentoNotario,
    props: true
  },
  {
    path: "/Dashboard/PAGADOR/:username/PagosPendientes",
    name: "PagosPendientes",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/PAGADOR/:username/ResumendePagos",
    name: "ResumendePagos",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/RECEPTOR/:username/RecepcionSolicitudes",
    name: "ResumendePagos",
    component: Dashboard,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/InscripciondecontratodeprendasEdit",
    name: "InscripciondecontratodeprendasEdit",
    component: FormularioInscripcionEdit,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudAlzamientoEdit",
    name: "solicitudAlzamiento",
    component: FormularioAlzamientoEdit,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudModificacion1Edit",
    name: "solicitudModificacion1",
    component: FormularioModificacion1Edit,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudModificacion2Edit",
    name: "solicitudModificacion2",
    component: FormularioModificacion2Edit,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudModificacion3Edit",
    name: "solicitudModificacion3",
    component: FormularioModificacion3Edit,
    props: true
  },
  {
    path: "/Dashboard/:rol/:username/solicitudModificacion4Edit",
    name: "solicitudModificacion4",
    component: FormularioModificacion4Edit,
    props: true
  },
  {
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