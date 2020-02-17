<template>
  <div class="home">
    <Header />
    <div class="container">这是中间容器</div>
    <div class="footer">这是50px高的底部</div>
  </div>
</template>

<script>
import Header from '../components/common/header.vue'

export default {
    name:'index',
    components:{
        Header
    }
}
</script>

<style>

</style>