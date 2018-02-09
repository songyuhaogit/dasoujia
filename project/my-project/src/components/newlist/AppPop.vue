<template>
    <div class="app-pop">
          <!-- <div class="screen">
                <ul class="nav1" :class="[!isBorder?'hide':'']">
                  <li  @click="show(index,nav)"  v-if="isBorder" class="nav_li" v-for="(nav,index) in navs"  :key="nav.id" >{{nav.content}}<i class="fa fa-caret-down"></i></li>
                </ul>      
          </div> -->
          <div class="big_area">
                <div class="left">
                    <ul class="left_ul">
                      <li v-for="area in areas" @click="ooo(area.id)" :key="area.id" :class="{redlink:isBorder==area.id}">{{area.content}}</li>                   
                    </ul>
                </div>  
                <div class="center">
                  <ul class="center_ul" v-if="isSshow==10">
                    <li  v-for="c in cs" :key="c.key" @click="iii(c.id)" :class='{redlink:isBorder==c.id}'>{{c.name}}</li>
                  </ul>
                  <ul class="center_ul" v-if="isSshow==11" >
                    <li  v-for="s in ss" :key="s.key" @click="yyy(s.id)" :class='{redlink:isBorder==s.id}'>{{s.name}}</li>
                  </ul>
                </div>
                 <div class="right">
                  <ul class="right_ul">
                    <!-- <li>不限</li> -->
                    <li v-if="isSshow==10" v-for="r in ds" :key="r.id" @click="ttt(r.id)" :class='{redlink:isBorder==r.id}'>{{r.name}}</li>
                     <li v-if="isSshow==11" v-for="y in ys" :key="y.id" @click="yyy(y.id)" :class='{redlink:isBorder==y.id}'>{{y.name}}</li>
                  </ul>
                </div>
          </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'app-pop',
    data:function(){
      return {
                 navs:[     
                {id:1,content:'区域'},
                {id:2,content:'价格'},
                {id:3,content:'户型'},
                {id:4,content:'更多'},         
            ],cs:[],ds:[],aaa:null,isBorder:1,
            areas:[
              {id:10,content:'区域 '},
              {id:11,content:'地铁'},
              ],ss:[],isSshow:10,rrr:null,ys:[],
             
      }
    },
    methods:{
         gets(){
          var that=this;
            axios.post('/mz/newHouse/conditions',{}
          )
          .then(function (response) {
            // console.log(response.data.data);
            that.cs=that.cs.concat(response.data.data.areaFirstList)
            that.ss=response.data.data.subwayLineList
          })
        },
          getss(){
          var that=this;
            axios.post('/mz/area/business','areaCode='+this.aaa
          )
          .then(function (response) {
            that.ds=response.data.data
          })
        },
          getsss(){
          var that=this;
            axios.post('/mz/subway/subway_list','subwayLineId='+that.rrr
          )
          .then(function (response) {
            console.log(response.data.data);
            that.ys=response.data.data
          })
        },
        ooo(id){
          this.isBorder=id;
          this.isSshow=id;
        },
      iii(id){
        this.aaa = id;
        this.isBorder=id;
        this.getss()
      },
      ttt(id){  
        this.isBorder=id;
      },
      yyy(id){
        this.isBorder=id;
        this.rrr=id;
        this.getsss()
      },
       show (index,parm) {
      this.isBorder = index;
      if(parm.sign){
        this.getda()
      }
    }, 
    //    show(index) {
    //   this.i = index
    // }
    },
     created(){
      this.gets();    
    },
    
}
</script>

<style lang='scss' scoped>
    .screen{    
      background-color: white;
      position:fixed;
      top: 0px;
      width: 100%;
      z-index: 500;
     .nav1{
      display: flex;
      font-size: 14px;
     padding: 10px;
     padding-left:10px;
     padding-right: 10px;
     height: 51px;
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
    .hide{
      display: none;
    }
    } 
  .big_area{
    height: 3rem;
    background-color: white;
    display: flex;
    position: fixed;
    width: 100%;
    top: 51px;
    z-index: 1111;
    .left_ul{
      font-size: 14px;
      border-right:1px solid #ccc;
      width:74px;
      height: 300px;
      li{
        padding-top:18px;
        margin-left: 15px;
        
      }
        .redlink{
    color: #3172dc;
    font-weight: 700;
      }
    }
    .center_ul{
      font-size: 16px;
      border-right:1px solid #ccc;
      width:130px;
      height: 300px;
      overflow:scroll;
      li{
        padding-top:8px;
        margin-left: 15px;
        margin-top:10px;        
      }
      .redlink{
    color: #3172dc;
    font-weight: 700;
      }
    }
    .right_ul{
      font-size: 16px;
      overflow-y:scroll;
      width:130px;
      height: 300px;
      li{
        padding-top:10px;
        margin-left: 15px;
       
      }
      .redlink{
    color: #3172dc;
    font-weight: 700;
      }
    }
  }   
 
</style>
