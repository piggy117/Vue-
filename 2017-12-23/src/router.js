
import VueRouter from 'vue-router'

// 11，请求router
import HomeContainer from './components/tabbars/HomeContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'

// 12，配置请求的router路径
const router = new VueRouter({
    routes : [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/search',component:SearchContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
    ],
    linkActiveClass:'mui-active'
    // 手动设置，被激活的路由由链接的高亮类名  ·
})

export default router