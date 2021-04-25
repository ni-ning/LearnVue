<template>
    <div>
        <div class="content">个人信息 props: [{{name}}] 传值 </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: ['name'], 
        created () {
            console.log(this.$route.params.name);
        }
    }
</script>

<style  scoped>
    .content{
        color: black;
    }
</style>