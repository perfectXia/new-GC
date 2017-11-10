import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User_info from '@/components/User_info'
import ADD_User_info from '@/components/ADD_User_info'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/User_info',
      name:'User_info',
      component:User_info
    },
    {
      path: '/ADD_User_info',
      name: 'ADD_User_info',
      component: ADD_User_info
    }, 
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
  ]
});
