<template>
    <div class="app-nav">
            <div class="screen" >
                <ul class="nav2">
                  <li  @click="childRouter(nav.name,nav)"   class="nav_li" v-for="nav in navs" :key="nav.id">{{nav.content}}<i class="fa fa-caret-down"></i></li>
                </ul> 
            </div>
            <div>
              <router-view></router-view>
            </div>             
    </div>

</template>

<script>
export default {
  props:['getda'],
  name:'app-nav',
  data:function(){
      return {
                 navs:[     
                {id:1,content:'区域',name:'AppPop',isSelect:false},
                {id:2,content:'价格',name:'AppPop2',isSelect:false},
                {id:3,content:'户型',name:'AppPop3',isSelect:false},
                {id:4,content:'更多',name:'AppPop4',isSelect:false},         
            ]
            
      }
    },
    methods:{
      childRouter(name,param){
          this.$router.push({name})        
          if(param.isSelect){
            this.getda()
            // param.isSelect = !param.isSelect
          }
          param.isSelect = !param.isSelect
           
      }
    }
}
</script>

<style lang='scss' scoped>

.app-nav{
  position: fixed;
  top: 0;
  z-index: 111;
}
       .screen{
      
      width: 3.75rem;
      background-color: white;

      .nav2{
        display: flex;
        
        font-size: 14px;
        padding:10px 0;
        border-bottom:1px solid #ccc;
    
      :last-child{
          border-right:none;
        }
      li{
        display: flex;
        flex: 1;
        text-align: center;
        height: 0.3rem; align-items: center;
        justify-content: center;
        font-weight: 600;
        border-right: 1px solid #ccc;
          i{
            padding-left: 20px;
          }
      }
    }
    } 
</style>
