<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default{
    components: {
      'v-header': header
    }
  }
    // export default {
    //   name: 'app'
    // }
</script> 

<style>
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    text-align: center;
    
        
  }
  .tab-item{
      flex:1;
      text-align: center;
    }
      
      
</style>
