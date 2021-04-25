module.exports = {
    // https://cli.vuejs.org/zh/config/#devserver 配置参考
    devServer: {
        // mock 模拟数据 添加数据要重启
        before(app, server){
            app.get('/api/v1/cart-list/', (req, resp)=>{
                resp.json({
                    result: [
                        {id: 1001, name: 'Python实战开发', price: 188, active: true, count:1},
                        {id: 1002, name: 'Golang实战开发', price: 288, active: true, count:1},
                        {id: 1003, name: 'Java实战开发', price: 388, active: true, count:1},
                        {id: 1004, name: 'ES6实战开发', price: 488, active: true, count:1},
                        {id: 1005, name: 'Docker实战开发', price: 588, active: true, count:1}
                    ]
                })
            })
        }
    }
}