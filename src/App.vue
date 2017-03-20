<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default{
    data() {
      return {
        seller: {}
      }
    },
    created() {
      console.log('start')
      this.$http.get('/api/seller').then((res) => {
        res = res.body
        console.log(res.errno)
        if (res.errno === ERR_OK) {
          this.seller = res.data
          console.log(this.seller)
        }
      })
    },
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
  .tab-item.active{
    color: rgb(240,20,20);
  }    
      
</style>
