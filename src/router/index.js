/*
// 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
Vue.use(VueRouter)
export default new VueRouter({
  // 这里配置n个路由
  routes:[
    {
      path: '/about',
      component:About
    },
    {
      path: '/home',
      component:Home,
      children: [
        {
          // path: '/message', //错误的写法 path最左侧的斜杠永远代表根路径
          path: '/home/message',// 完整写法
          component:Message,
          children: [
            {
              path: '/home/message/detail/:id',// :id为占位写法
              component: MessageDetail
            }
          ]
        },
        {
          path: 'news',//简化写法
          component:News,
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]

})
