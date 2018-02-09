<template>
    <div class="app-pop2" >
              <!-- <div class="screen">
                <ul class="nav2">
                  <li  class="nav_li" v-for="nav in navs" :key="nav.id">{{nav.content}}<i class="fa fa-caret-down"></i></li>
                </ul>   
              </div>    -->
          <div class='price'>
            <ul>
              <li  v-for="price in prices" :key="price.id" :class="{redlink:isBorder==price.id}">{{price.content}}</li>            
            </ul>
            <div class="search">
              <input class="input1"  type="text" placeholder="最低价格"><span>-</span><input class="input2"  type="text" placeholder="最高价格"><span>元</span><button>确定</button>
            </div>
            
          </div>
    </div>
       
</template>

<script>

export default {
  name:'app-pop2',
    data:function(){
      return {
            a:[],cs:[],isBorder:1,
            prices:[
              {id:1,content:'不限'},
              {id:4,content:'3-4万'},
              {id:5,content:'4-5万'},
              {id:6,content:'5-6万'},
              {id:7,content:'6-7万'},
              {id:8,content:'7-8万'},
              {id:9,content:'8-9万'},
              {id:10,content:'10万以上'}             
            ]
      }
    },
      methods:{
       getda(id){
         this.isMaskShow = !this.isMaskShow
         this.a=id
         this.curId = id;
       },
       
    } 
     
}
</script>

<style lang='scss' scoped>
    .price{
      font-size: 14px;
      height: 4rem;
      background-color: white;
      position: fixed;
      top: 51px;
      width: 100%;
      z-index: 111;
      ul{
          z-index: 9999;
        li{
            height: 50px;
            border-bottom: 1px solid #ccc;
            line-height: 50px;
            padding-left: 18px;
        }
           .redlink{
    color: #3172dc;
    font-weight: 700;
      }
      }
      .search{
        height: 70px;
        background-color: white;
        display: flex;
        .input1{
          height: 34px;
          border: 1px solid #ccc;
          margin-left: 30px;
          width: 110px;
          margin-top: 17px;
        }
        .input2{
          height: 34px;
          border: 1px solid #ccc;
          width: 110px;
          margin-top: 17px;
        }
        span{
        display: inline;
        margin-top: 22px;
        margin-right: 5px;
        margin-left:5px;
        }
        button{
          font-size: 10px;
          line-height: 20px;
          color: #fff;
          background-color: #2775e9;
          margin-top: 17px;
          margin-left: 5px;
          vertical-align: middle;
          width: 70px;
          height: 35px;
        }
      }
    
    }
</style>
