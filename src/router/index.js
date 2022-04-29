import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category/TopCategory'
import SubCategory from '@/views/category/SubCategory'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')
const Goods = () => import('@/views/goods/index')
const Login = () => import('@/views/login/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory },
      { path: '/product/:id', component: Goods }
    ]
  },
  { path: '/login', component: Login }
]
// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  routes,
  // 切换路由的时候滚动到顶部
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
