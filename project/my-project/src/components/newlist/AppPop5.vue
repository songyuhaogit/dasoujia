<template>
    <div class="app-pop5"  >
<!--       
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</mt-loadmore> -->


      <div
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
   <div class="new-house-list" v-for=" (is,i) in as" :key="i">
            <div class="new_img">
                <img :src="is.imageUrl" alt="">
            </div>
            <div class="new_info">
              <span class="new_name">{{is.name}}</span><span class="new_sale">在售</span>
              <p class="new_content">{{is.areaName3}}</p>
              <p class="room">{{is.roomNames}}</p>
              <div class="color">
                <span style="background-color:#60a1ec" class="color1 color" >人车分流</span>
                <span style="background-color:blue" class="color2 color">车位充足</span>
                <span style="background-color:yellow" class="color3 color">大户型</span>
                <span style="background-color:#60a1ec" class="color4 color">低密度</span>
              </div>
            </div>
            <div class="price">
              <span v-if="is.referencePriceMin?'is.referencePriceMin':''">{{is.referencePriceMin}}/平</span>
                <span v-else-if="is.aroundPriceMax?'is.aroundPriceMax':''">{{is.aroundPriceMax}}/平</span>
              <span v-else>{{is.totalPriceMin}}万起</span>
            </div>
          </div>
      </div>
     
     
    </div>  
</template>

<script>
import { Loadmore } from 'mint-ui';
import Vue from 'vue'
Vue.component(Loadmore.name, Loadmore);
import { Indicator } from 'mint-ui';
import axios from 'axios'
export default {

  name:'app-pop5',
  data(){
    return{
      as:[],
      page:1,
      loading:false,
      isOver:false,
      isPrice:false,
      isPage:1,
      currentPages:1
    }
    
  },
      methods:{
        get(){
          var that=this;     
          Indicator.open({
          text: '请稍等......',
          spinnerType: 'double-bounce',

        });
            axios.post('/mz/newHouse',
            // { 
              // pageNum:that.page,
              // pageSize:5,
              // price:'',
              // wyType:'',
              // room:'',
              // dictraint:'',
              // keywords:'',
              // pmn:'',
              // pmx:'',
              // amn:'',
              // amx:'',
              // // areaCode3:110101,
              // // tradingAreaId:111392,
              // }
              'pageNum='+that.page+'&pageSize=5&price=&wyType=&room=&dictraint=&keywords=&pmn=&pmx=&amn=&amx='
          )
          .then(function (response) {
            console.log(response.data.data.page.currentPage)    
            that.as=that.as.concat(response.data.data.page.recordList)
            that.loading = false
            Indicator.close();        
            //  that.currentPages ++
           
            // if(response.data.data.page.currentPage==response.data.data.page.pageCount){
            //   that.loading = true
            // that.current = response.data.data.page.currentPage
            // that.current ++
            // }
            that.page ++
            console.log(response.data.data.page.currentPage)
          })
        },
        loadMore() {
          // if(isOver){return false}
        this.loading = true;
        this.get()
}
    },
    created(){
  
    }
}
</script>

<style lang='scss' scoped>

    .new-house-list{
        padding: .2rem .2rem .2rem .06rem;
        border-bottom: 1px solid #e9e9e9;
        font-size: 12px;
        position: relative;
        display: flex;
        .new_img{
          img{
            height: 0.8rem;
            width: 0.99rem;
          }
        }
        .new_info{
              display: inline-block;
              vertical-align: top;
              line-height: 1;
              overflow: hidden;
              margin-left: .1rem;
              width: 3rem;
              .new_name{
                font-size: 13px;
                font-weight: 600;              
              }
                .new_sale{
                    margin-left: 10px;
                    display: inline-block;
                    background-color:rgba($color: #60a1ec, $alpha:0.4);
                    color: #60a1ec;
                    font-weight: 600;
                 }
                .new_content{
                  color: #ccc;
                  margin-top:10px;width: 1rem;
                }
                .room{
                   color: #ccc;
                   margin-top:10px;
                }
                .color{
                   margin-top:10px;
                   color: #ccc;
                   font-size: 10px;
                }
        }
        .price{
             color: #f60;
            line-height: 1;
            height: 0.4rem;        
            display:inline-block; 
            span{
                  width: 0.6rem;      
                   display:block;    
            }
        }
    }
</style>
