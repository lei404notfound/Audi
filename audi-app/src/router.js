import Vue from 'vue'
import Router from 'vue-router'
//为Exam01.vue组件指定访问路径
import Login from "./components/audi/Login.vue"
import Sport from "./components/audi/Sport.vue"
import Index from "./components/audi/Index.vue"
import Buy from "./components/audi/Buy.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/Login",component:Login},
    {path:"/Sport",component:Sport},
    {path:"/Index",component:Index},
    {path:"/Buy",component:Buy}
  ]
})
