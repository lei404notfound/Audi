import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'

//引入第三方组件库 mint ui
//1.完整引入mint-ui组件库中的所有组件
import MintUI from "mint-ui"
//2.单独引入mint-ui组件库中的样式文件
import "mint-ui/lib/style.css"
//3.将mint-ui注册到vue实例中
Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(BaiduMap,{
  ak:'g2UFK7R9l92Paqk0lfGOhcGvSUbScgl6'
})
//4.将字体图标引入当前项目中
import "./font/iconfont.css"
import "./icon/login/iconfont.css"
import "./icon/right/iconfont.css"
import "./icon/login-title/iconfont.css"
//5.引入axios第三方ajax模块
import axios from "axios"
//6.配置axios基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/";
//7.配置axios保存session信息,不加会导致session丢失
axios.defaults.withCredentials=true;
//8.将axios注册vue实例中
//由于axios不支持use将实例添加到vue原型
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
