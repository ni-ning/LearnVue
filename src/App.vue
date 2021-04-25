<template>
    <div id="vue-router">
        <!-- router-link类似a标签 to类似href -->
        <router-link to="/"><div class="nav">首页</div></router-link> |
        <router-link to="/shopping"><div class="nav">初版购物车</div></router-link> |
        <router-link :to="{name: 'about'}"><div class="nav">关于</div></router-link> |
        <router-link :to="{name: 'user', params:{id:1}}"><div class="nav">用户1号</div></router-link> |
        <router-link to="/user/2"><div class="nav">用户2号</div></router-link> |
        <router-link :to="{name: 'page', query:{name: 'linda', password: '123456'}}"><div class="nav">查询页面</div></router-link> |
        <router-link to="/redirect"><div class="nav">重定向</div></router-link>|
        <router-link to="/profile/linda"><div class="nav">个人介绍</div></router-link> |
        <!-- 展示的出口 -->
        <router-view></router-view>

    </div>
</template>

<script>
    import '@/css/reset.css'
    export default {
        
    }
</script>

<style scoped>
    #vue-router{
        width: 1200px;
        background-color: #f1f1f1;
        margin: 0 auto;
        text-align: center;
    }

    #vue-router .nav{
        display: inline-block;
        font-size: 20px;
        color: green;
        margin: 10px;
    }
</style>