<template>
  <header>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
header{height:130px}
</style>