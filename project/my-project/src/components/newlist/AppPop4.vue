<template>
    <div class="app-pop3">
           

          <div class="box">
             <div class="box1">
                  <div class="title">特色</div>
                  <div class="search">
                    <a v-for="b in bs" @click="click(b.key)" :class="{redlink:isborder==b.key}" :key="b.key">{{b.value  }}</a>
                  </div>
             </div>

                <div class="box2">
                  <div class="title2">类型</div>
                  <div class="search2">
                    <a class="a2" v-for="r in rs" @click="click1(r.key)" :class="{redlink:isborder1==r.key}" :key="r.key">{{r.value}}</a>
                  </div>
              </div>
              <div class="clear">清空条件</div>
              <button class="sure">确定</button>
          </div>
          </div>
       
</template>

<script>
import axios from 'axios'
export default {
  name:'app-pop3',
    data:function(){
      return {
           navs:[     
                {id:1,content:'区域'},
                {id:2,content:'价格'},
                {id:3,content:'户型'},
                {id:4,content:'更多'},         
            ],a:[],
            bs:[],rs:[],
            isborder:1,
            isborder1:1,
      }
    },
      methods:{
          gets(){
          var that=this;
            axios.post('/mz/newHouse/conditions',{}
          )
          .then(function (response) {
            // console.log(response.data.data);
            that.bs=JSON.parse(response.data.data.dictraitMap)
            that.rs=JSON.parse(response.data.data.wyTypeMap)  
             console.log(response.data.data.wyTypeMap)
            
            // that.ss=response.data.data.subwayLineList
          })
        },
       getda(id){
         this.isMaskShow = !this.isMaskShow
         this.a=id
       },
       click(id){
         this.isborder=id
       },
         click1(id){
         this.isborder1=id
       },
    },
         created(){
      this.gets();    
    }
}
</script>

<style lang='scss' scoped>
        .box{
    position: fixed;
    width: 100%;
    height: 70%;
    z-index: 21111;
    top:51px;
    font-size: 14px;
    background-color: white;
    .box1{
        height: 40%;
        background-color: white;
        padding: 20px 10px;
        .title{
          font-size: 14px;
        }
        .search{
            a{
            font-size: 15px;
            width: 72px;
            line-height: 30px;
            display: inline-block;
            text-align: center;
            margin: 10px 8px 12px;
            border: .013333rem solid #e9e9e9;
            color: #333;
            font-weight: 400;
            }
            .redlink{
     background-color: #f3f6f9;
    border-color: #2775e9;
    color: #3172dc;
    font-weight: 700;
            }
        }
    }
    .box2{
          height: 41%;
        background-color: white ;
        padding: 26px 10px;
        border-bottom: 1px solid #ccc;
        .search2{
                .a2{
            font-size: 15px;
            width: 72px;
            line-height: 30px;
            display: inline-block;
            text-align: center;
            margin: 10px 8px 12px;
            border: .013333rem solid #e9e9e9;
            color: #333;
            font-weight: 400;
                }
          .redlink{
        background-color: #f3f6f9;
        border-color: #2775e9;
        color: #3172dc;
        font-weight: 700;
            }
        }
    }
    }
  .clear{
        background-color: #fff;
        color: #3172dc;
        font-size: 20px;
        text-align: center;
        height: 45px;
        line-height: 45px;
        font-weight: 600;
  }
  .sure{
        background-color: #2775e9;
        color: #fff;
        width: 100%;
        height: 10.5%;
        font-size: 20px
  }
</style>
