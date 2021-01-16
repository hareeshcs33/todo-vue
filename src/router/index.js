import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import DisplayTodoLayout from '@/components/display-todo-layout'
import Register from '@/components/register'

Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/',
    //   name: 'MainLayout',
    //   component: MainLayout
    // },
    {
      path: '/',
      name: 'displayTodoLayout',
      component: DisplayTodoLayout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
