import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostForm from '../components/PostForm.vue'
import CrearUsuario from '../components/CrearUsuario.vue'

import EditarUsuario from '../components/EditarUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

   {
    path: '/crear',
    name: 'CrearUsuario',
    component: CrearUsuario
  },

   {
    path: '/editar',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
   {
    path: '/lista-usuarios',
    name: 'PostForm',
    component: PostForm
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
