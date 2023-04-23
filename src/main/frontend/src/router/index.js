import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/IniciarSesion',
      name: 'IniciarSesion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Registrate',
      name: 'Registrate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    }, {
      path: '/primeraSerie',
      name: 'primeraserie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrimeraSerie.vue')
    },

    {
      path: '/SegundaSerie',
      name: 'segundaserie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SegundaSerie.vue')
    },

    {
      path: '/TerceraSerie',
      name: 'terceraserie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TerceraSerie.vue')
    },

    {
      path: '/Firmas',
      name: 'firmas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Firmas.vue')
    },

  
  
    {
      path: '/Diviertete',
      name: 'diviertete',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Diviertete.vue')
    },
  {
    path: '/PiedraPapelTijera',
    name: 'piedrapapeltijera',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/PiedraPapelTijera.vue')
  },
   
  {
    path: '/Tragaperras',
    name: 'tragaperras',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Tragaperras.vue')
  },

  {
  path: '/CaraCruz',
  name: 'caracruz',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/CaraCruz.vue')
},

  {
  path: '/Contacto',
  name: 'contacto',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/Contacto.vue')
  },

  {
  path: '/Fabricacion',
  name: 'fabricacion',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/Fabricacion.vue')
  },

  {
    path: '/Eventos',
    name: 'eventos',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Eventos.vue')
  }

  
  ]
})

export default router
