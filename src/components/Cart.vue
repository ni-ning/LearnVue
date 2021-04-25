<template>
    <div id="cart">
        <h3>所有书籍: {{title}}</h3>

        <table border="1" cellspacing="0">
            <tr>
                <td>#</td>
                <td>编号</td>
                <td>名称</td>
                <td>单价</td>
                <td>数量</td>
                <td>总价</td>
            </tr>
            <tr v-for="(item, index) in cart" :key="item.id">
                <td><input type="checkbox" v-model="item.active"></td>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>¥{{item.price}}</td>
                <td>
                    <button @click="sub(index)">-</button>
                    {{item.count}}
                    <button @click="add(index)">+</button>
                </td>
                <td>¥{{item.price * item.count}}</td>           
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{ count }} / {{total}}</td>
                <td colspan="2">¥{{total_price}}</td>

            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['title', 'cart'],
        computed: {
            count() {
                return this.cart.filter(item=>item.active).length; 
            },
            total(){
                return this.cart.length;
            },
            total_price(){
                let sum = 0;
                this.cart.forEach(item=>{
                    if(item.active){
                        sum += item.price * item.count;
                    }
                })
                return sum;
            }
        },
        methods: {
            remove(i){
                if(window.confirm('确定删除?')){
                    this.cart.splice(i, 1);
                }
            },
            sub(i) {
                if(this.cart[i].count > 0){
                    this.cart[i].count--;
                }else{
                    this.remove(i);
                }
            },
            add(i){
                this.cart[i].count++;
            }
        },
    }
</script>

<style scoped>
    #cart{
        width: 400px;
        background-color: #aaaaaa;
        margin: 0 auto;
        text-align: center;
    }

    #cart h3{
        color: green;
    }
    #cart table{
        margin: 0 auto;
    }
</style>