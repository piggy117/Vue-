// 项目的JS打包入口文件
// 1，导入Vue
import Vue from 'vue'

// 4，导入MintUI组件库
import MintUI from 'mint-ui'

// 5，导入Mint-UI的样式表
import 'mint-ui/lib/style.css'

// 6，使用vue.use来批量注册MintUI的组件
Vue.use(MintUI)

// 7，导入MUI样式表
import '../lib/mui/css/mui.min.css'

// 8,导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css'



// 9, 配置路由
// import VueRouter from 'vue-router'

// // 10,安装路由
// Vue.use(VueRouter)

// // 11，请求router
// import HomeContainer from './components/tabbars/HomeContainer.vue'
// import SearchContainer from './components/tabbars/SearchContainer.vue'
// import MemberContainer from './components/tabbars/MemberContainer.vue'
// import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'

// // 12，配置请求的router路径
// const router = new VueRouter({
//     routes : [
//         {path:'/',redirect:'/home'},
//         {path:'/home',component:HomeContainer},
//         {path:'/search',component:SearchContainer},
//         {path:'/member',component:MemberContainer},
//         {path:'/shopcar',component:ShopcarContainer},
//     ],
//     linkActiveClass:'mui-active'
//     // 手动设置，被激活的路由由链接的高亮类名  ·
// })

// 13，配置axios
import axios from 'axios'

// 14,把axios挂载到vue的原型对象上
Vue.prototype.$http = axios.create({
    baseURL:'http://39.106.32.91:3000/'
})

// 15，配置路由
import VueRouter from 'vue-router'

// 16，安装
Vue.use(VueRouter)

// 17，导入路由对象
import router from './router.js'

// 2，导入根组件
import App from './components/App.vue'

// 3，创建Vue实例
const cm = new Vue({
    el:"#app",
    render:c=>c(App),
    router
})