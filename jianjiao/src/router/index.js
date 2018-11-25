import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)  //注册路由

import category from "../components/category"
import topbar from "../components/topbar"
import buycar from "../components/buycar"
import me from "../components/me"
import news from "../components/news"
import home from "../components/home"
import table from "../components/table"
import sofa from "../components/sofa"


export default new Router({
  routes: [
    {
      path:"/home",
      component:home
    },

    {
      path:"/category",
      component:category,
    },
    {
      path:"/inner/20",
      component:sofa,
    },
    {
      path:"/inner/21",
      component:table,
    },  
    {
      path:"/buycar",
      component:buycar
    },
    {
      path:"/news",
      component:news
    },
    {
      path:"/me",
      component:me
    },
    {
      path:"/",
      redirect:"/home"
    }

  ]
})
