import Vue from 'vue'
import Router from 'vue-router'


const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Profile = ()=> import('../views/profile/Profile')

Vue.use(Router)

const routes=[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router=new Router({
  routes,
  mode:'history'
})
export default router
