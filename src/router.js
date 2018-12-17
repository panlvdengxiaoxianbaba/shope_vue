import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import Details from './views/Details'
import Products from './views/Products'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Reg from './views/Reg'
import User from './views/User'
import Cart from './views/Cart'
//ES6

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index },
        { path:"index",component:Index},
        { path:"details", component: Details },
        { path:"products", component: Products},
    ]},
    { path: '/login', component: Login ,children:[
      {path:'/user',component:User}, 
      {path:'/reg',component:Reg},
      {path:'/cart',component:Cart}
    ]},
    { path: '/*', component:NotFound }
  ]
})
