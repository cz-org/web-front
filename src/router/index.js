

import Nofound from '@/components/nofound.vue'
import Home from '@/views/Home.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router=createRouter(
  {
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
      {
        path: "/login",
        name: "Login",
        meta:{name:"登录"},
        component: LoginView
      },
      {
        path: "/",
        name: "Home",
        meta:{name:"主页面"},
        component: Home
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Nofound },
)
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  }

  const user = localStorage.getItem("user");
  if (!user && to.path !== '/login' && to.path !== '/register') {
    return next("/login");
  }
  next();
})
export default router