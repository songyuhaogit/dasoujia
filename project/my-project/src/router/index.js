import Vue from 'vue'
import Router from 'vue-router'
import AppNewList from '@/components/newlist/AppNewList.vue'
import AppPop from '@/components/newlist/AppPop.vue'
import AppPop2 from '@/components/newlist/AppPop2.vue'
import AppPop3 from '@/components/newlist/AppPop3.vue'
import AppPop4 from '@/components/newlist/AppPop4.vue'
Vue.use(Router)



export default new Router({
  routes: [

          {
            path:'/AppPop',
            component:AppPop,
            name:'AppPop'
          },
          {
            path:'/AppPop2',
            component:AppPop2,
            name:'AppPop2'
          },
          {
            path:'/AppPop3',
            component:AppPop3,
            name:'AppPop3'
          },
          {
            path:'/AppPop4',
            component:AppPop4,
            name:'AppPop4'
          },

        
   
      // {path:'**',redirect:'/main'},
      
  ]
})