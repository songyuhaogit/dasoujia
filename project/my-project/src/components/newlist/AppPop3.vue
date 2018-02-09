<template>
    <div class="app-pop3">
          
          <div class='price'>
            <ul>
              <li>不限</li>
              <li>一室</li>
              <li>二室</li>
              <li>三室</li>
              <li>四室</li>
              <li>五室及以上</li>
            </ul> 
          </div>
          </div>
       
</template>

<script>
export default {
  name:'app-pop3',
    data:function(){
      return {
          a:[]
      }
    },
      methods:{
       getda(id){
         this.isMaskShow = !this.isMaskShow
         this.a=id
       }
    }
}
</script>

<style lang='scss' scoped>
    .price{
      font-size: 14px;
      height: 3rem;
      background-color: white;
      position: fixed;
      top: 51px;
      width: 100%;
      z-index: 111;
      ul{

        li{
            height: 50px;
            border-bottom: 1px solid #ccc;
            line-height: 50px;
            padding-left: 18px;
        }
      }
    }
</style>
