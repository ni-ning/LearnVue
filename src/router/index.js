import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Profile from '@/views/Profile'
import User from '@/views/User'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    },
    {
        path: '/profile/:name',
        name: 'profile',
        props: true,
        component: Profile
    },
    {
        path: '/page',
        name: 'page',
        component: ()=>import('@/views/Page')
    },
    {
        path: '/redirect',
        redirect: '/about'
    },
    {
        path: '*',
        component: ()=>import('@/views/404')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;