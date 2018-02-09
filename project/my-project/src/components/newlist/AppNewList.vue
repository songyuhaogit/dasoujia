<template>
<div class="app-new-list">
  <app-nav :getda='getda' v-if="isMaskShow"></app-nav>
  <div  class="mask"  v-show="isMaskShow" @click="getda"></div> 
  <div class="title">
          <i class="fa fa-angle-left"></i>
          <div class="right">
            	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphN2NiMjY1ZS04MzgzLTRlZTgtYTc5Zi0yODk4NzBlMmVlMmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdFOTNFRTk3NEQyMTFFN0EwQ0NGRTMyNjY5NTVFODEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdFOTNFRTg3NEQyMTFFN0EwQ0NGRTMyNjY5NTVFODEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxN2EyMjNmYS02MWQwLTQ1Y2EtYWNhNC05MThhOTg4NWM1ZjciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmM2ZlNjRhNi1iN2JkLTExN2EtOGFj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"/>
              <h6>新房</h6>
          </div>
  </div>
  <div class="serch">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="请输入楼盘">
            <div class="maps">
                  <i class="fa fa-street-view font_map" ><p>地图找房</p></i>              
            </div>
  </div>
  <div class="screen">
            <ul class="nav1">
              <li class="nav_li" @click="getda(nav.id,nav.name)" v-for="nav in navs" :key="nav.id">{{nav.content}}<i class="fa fa-caret-down"></i></li>
            </ul>

      
  </div>
           <!-- <app-pop v-if="this.a==1" :getda='getda'></app-pop>
           <app-pop2 v-if="this.a==2"></app-pop2>
           <app-pop3 v-if="this.a==3"></app-pop3>
           <app-pop4 v-if="this.a==4"></app-pop4> -->
          <app-pop5></app-pop5> 
    
    
        
</div>
      
</template>

<script>

import AppNav from '@/components/newlist/AppNav'
import AppPop5 from '@/components/newlist/AppPop5'
export default {
    name:'app-new-list',
    components:{AppNav,AppPop5},
    data:function(){
      return {
                 navs:[     
                {id:1,content:'区域',name:'AppPop'},
                {id:2,content:'价格',name:'AppPop2'},
                {id:3,content:'户型',name:'AppPop3'},
                {id:4,content:'更多',name:'AppPop4'},     
            ], isMaskShow : false,
            a:[],
      }
    },
    
    methods:{
       getda(id,name){
         this.isMaskShow = !this.isMaskShow
        this.$router.push({name})
         this.a=id
       }
        
    },
   

}
</script>

<style lang='scss' scoped>
body{

  background:rgba(0,0,0,0.5);
}
      .title{
          width: 100%;
          height: 0.5rem;
          background-color: white;
          display: flex;
          // justify-content: center;
          align-items: center;
         
          i{
            font-size: 40px;
            // margin-top: 0;
            margin-left: 10px;
          }
          .right{
            display: flex;
            margin-left: 1.25rem;           
            img{
              height: 0.2rem;
               margin-top:2px
            }
            h6{
              font-size: 18px;
              margin-left: 5px;  
            }
          }
      }
      .serch{
            width: 100%;
            height: 0.6rem;
            background-color: #f5f5f5;
            font-size: 0.15rem;
            position: relative;
            input{
                  position: absolute;
                  height: 0.35rem;
                  width: 2.7rem;
                  margin: auto;
                  margin-left: .2rem;
                  padding-left: .233333rem;
                  padding-right: .1rem;
                  font-size: 0.05rem;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  border: .013333rem solid #bcc3cc;
                  border-radius: .023333rem;
            }
            i{
              position: absolute;
              left: 25px;
              top: 22px;
              z-index: 11
            }
            .maps{
              .font_map{
                position: absolute;
                top:24px;
                left: 2.98rem;
                p{
                  font-size: 14px;
                  display: inline-block;
                  margin-left:5px;
                  color: #3172dc;
                }
              }
            }
      }
   .screen{
       position: sticky;
      opacity: 1;
      top: 0px;
      z-index: 10;
      background-color: white;
      .nav1{
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
        .mask{
        height: 100%;
        width: 100%;
        background-color:rgba(0, 0, 0, 0.3);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 11;
      }
      ._one{
        position:fixed;
        top: 0;
        width: 100%;
      }  
</style>

