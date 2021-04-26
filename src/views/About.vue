<template>
    <div>
        <div class="content">
            <p>This is about page.</p>
            <button @click="handleRouter">返回首页</button>
        </div>
    </div>
</template>

<script>
    import '@/css/common.css'
    export default {
        methods: {
            handleRouter() {
                console.log(this.$router);
                this.$router.push('/');
                // this.$router.push({
                //     path: '/'
                // });
                // this.$router.push({
                //     name: 'user',
                //     params: {id: 1}
                // });
            }
        },
    }
</script>

<style  scoped>
    .content{
        color: black;
    }
</style>