<template>
    <div>
        <div class="content">用户 params 传参 {{ $route.params}} page.</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created () {
            // 当路由变化时 /user/1 /user/2 组件复用，所以id不变
            console.log(this.$route.params.id);
        },
        watch: {
            $route:(to)=>{
                console.log(to.params.id);
                // 发起ajax请求，获取数据
            }
        },
        beforeRouteUpdate(to, from, next){
            console.log(to.params.id);
            next(); // 需要调用next，否则阻塞路由
        }
    }
</script>

<style  scoped>
    .content{
        color: black;
    }
</style>