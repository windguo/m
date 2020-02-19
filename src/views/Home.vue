<template>
  <div class="home">
    <header class="header">
      <img class="icon_menu" @click="showMenu" src="@/assets/icon_menu.png" />
      <img class="logo" src="@/assets/logo.png" />
    </header>
    <mt-popup
      v-model="popupVisible"
      model="false"
      name="11111111"
      position="left">
      <Menu />
    </mt-popup>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/87213/5/12153/181078/5e44be1cE0da4c691/c9f64b5adef77e97.jpg!cr_1125x445_0_171!q70.jpg.dpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/94184/30/11851/136921/5e3d2ce8E0800000b/d90782df627ec1bd.jpg!cr_1125x445_0_171!q70.jpg.dpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/105134/35/12287/129721/5e4663ffE4e50885a/a40d69eb76509bd9.jpg!cr_1125x445_0_171!q70.jpg.dpg" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="container">这是中间容器</div>
    <div class="footer">这是50px高的底部</div>
  </div>
</template>

<script>
// import Header from '../components/common/header.vue'
import Menu from '../components/common/menu.vue'

export default {
    name:'index',
    data(){
      return {
        popupVisible:false
      }
    },
    components:{
        // Header
        Menu
    },
    methods:{
      showMenu:function(){
        console.log('1111');
        this.popupVisible=true
      }
    }
}
</script>

<style>
.header{position: relative;text-align: center;height: 89px;}
.header .icon_menu{position: absolute;left:36px;width: 36px;top:27px;}
.header .logo{height:42px;margin-top:25px;}

.banner{height:340px}
.banner img{width: 100%;}
</style>