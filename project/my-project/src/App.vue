<template>
  <div id="app">
    <AppNewList></AppNewList>
       <!-- <router-view/> -->

  </div>
</template>

<script>
import AppNewList from './components/newlist/AppNewList'
export default {
  name: 'app',
  components:{AppNewList },
  // data:function(){
  //     return {
  //       isMaskShow : false
  //     }
  // }
}
</script>

<style lang='scss'>
@import '../style/app.scss';
body{
  -webkit-overflow-scrolling: touch;
}
</style>
