import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/HomePage.vue'
const markdown = () => import('../pages/Markdown.vue')
const calendar = () => import('../pages/Calendar.vue')
const Login = () => import('../pages/login/Index.vue')
const productInfo = () => import('../components/productInfo.vue')
const korzinkaInfo = () => import('../pages/korzinkaVue.vue')
const tolovInfo = () => import('../pages/tolovMalumotlari.vue')
const productAdd = () => import('../components/AddProduct.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/info',
    name: 'ProductInfo',
    component: productInfo
  },
  {
    path: '/product',
    name: 'ProductAdd',
    component: productAdd
  },
  {
    path: '/korzinka_info',
    name: 'KorzinkaInfo',
    component: korzinkaInfo
  },
  {
    path: '/tolov_info',
    name: 'TolovMalumotlari',
    component: tolovInfo
  },
  {
    path: '/markdown',
    name: 'MArkdown',
    component: markdown
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: calendar
  },
  
  {
    path: '/telefon',
    name: 'TeleFonlar',
    component: () => import('../pages/Telefon.vue')
  },
  {
    path: '/kitob',
    name: 'PortfoliyaKitob',
    component: ()=> import('../pages/kitobCreat.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Yangiliklar.vue')
  },
  {
    path: '/news_info',
    name: 'NewsAbout',
    component: () => import('../pages/YangiliklarInfo.vue')
  },
  {
    path: '/yetkizish',
    name: 'YetkizishHizmati',
    component: () => import('../pages/YetkizishVue.vue')
  },
  {
    path: "/",
    name: 'LoginVue',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if(to.name=='LoginVue' && localStorage.getItem("token")){
     return next('/home')
  }
  return next()
})
export default router
