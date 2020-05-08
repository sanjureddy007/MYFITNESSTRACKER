import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import welcome from '../views/welcome.vue'
import BMI from '../views/BMI.vue'
import { CurrentUser } from '../models/Users';
import Excercise  from '../views/Excercise.vue'
import Heart from '../views/Heart.vue'
import Nutrition from '../views/Nutrition.vue'
import Hydrate from '../views/Hydrate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Signup
    },  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/BMI',
    name: 'BMI',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BMI
  },
  {
    path: '/Heart',
    name: 'Heart',
    component:Heart
  },
  {                     
    path: '/Nutrition',
    name: 'Nutrition',
    component:Nutrition
  },
  
  {
    path: '/Hydrate',
    name: 'Hydrate',
    component:Hydrate
  },
  {
    path: '/Excercise',
    name: 'Excercise',
    component:Excercise,
    meta: {isSecret:true}
  },
  
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});

export default router
