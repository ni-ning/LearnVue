
目录结构
- public/index.html Vue渲染的文件会挂载到id="app"的div中
- src/main.js Vue进行工作的入口，去操作渲染所有东西的入口 骨血
- src/App.vue 可以认为展示入口 皮


router 基本使用
- 类似Django路由，url -> 视图函数； url -> 网页组件
- src/router/index.js 定义router export出
- src/main.js 导入router加入 new Vue中
- src/App.vue 特定组件展示输出
- @ 代表 src 如，@/main.js @App.vue; 甚至js中可以引入css import '@/css/reset.css'
- 命名路由 注意冒号: 外围双引号"" 内部对象{} 内部单引号 如  :to="{name: 'about'}"

router-view 最终会被渲染成一个div 所以可以配置class 设置样式

守卫导航 守卫兵监视 路由的生命周期钩子函数

- router.beforeEach((to, from, next)=>{类似Django 中间件})
- beforeRouteUpdate((to, from, next)=>{  next();}) 当组件实例被复用时，该钩子函数会被复用
- beforeRouteLeave((to, from, next)=>{  next();}) 如保存编辑


登录跳转可以定义 redirect 和Django类似


Vuex 单例对象管理所有的状态  异步方法 -> 同步方法 -> state -> render -> 组件

异步请求数据的场景会有延迟，所以需要异步方法

编程式导航
- this.$router  VueRouter实例 编程式导航  this.$router.push('/') Vue传参特别灵活，能传字符串的地方，可以考虑一下是否能传对象，对象的表达力更强
- this.$route