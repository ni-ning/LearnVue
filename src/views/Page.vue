<template>
    <div>
        <div class="content">查询页面 query 传参 {{$route.query}}</div>
    </div>
</template>

<script>
    import '@/css/common.css'
    export default {
        data(){
            return {}
        },
        created () {
            console.log(this.$route.query);
        },
    }
</script>

<style scoped>
    .content{
        color: orange;
    }
</style>