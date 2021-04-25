<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <h1>入口组件: {{ title }}</h1>
    <ul>
      <li v-for="(item, index) in cartList" :key="item.id">
        <h3>书名: {{ item.name }}</h3>
        <p>价格: ¥{{ item.price }}</p>
        <el-button type="primary" @click="handleClick(index)">加入购物车</el-button>
      </li>
    </ul>

    <my-cart :title="title" :cart="cartList"></my-cart>
    <selection-cart :title="title"></selection-cart>

  </div>
</template>

<script>
import MyCart from '@/components/Cart'
import SelectionCart from '@/components/Selection'

export default {
  name: 'app',
  data(){
    return {
      cartList: [],
      title: '购物车'
    }
  },
  methods: {
    handleClick(index) {
      const good = this.cartList[index];
      this.$bus.$emit('addCart', good);
    }
  },
  // created () {
  //   this.$http.get('/api/v1/cart-list/')
  //   .then(resp=>{
  //     this.cartList = resp.data.result;
  //   }).catch(err=>{
  //     console.log(err);
  //   });
  // },
  async created () {
    try {
      // 异步代码同步化
      const res = await this.$http.get('/api/v1/cart-list/');
      this.cartList = res.data.result;
    } catch (error) {
      console.log(error);
    }
  },

  components:{
    MyCart,
    SelectionCart
  }
}
</script>

<style scoped>
  #app{
    width: 1200px;
    margin: 0 auto;
    background-color:#f1f1f1;
    text-align: center;
  }
  ul,li{ padding:0;margin:0;list-style:none}
</style>
