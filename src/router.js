import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';
//import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/stranica1',
            name: 'stranica1',
            component: () => import('./views/Stranica1View.vue')
        },
        {
            path: '/stranica2',
            name: 'stranica2',
            component: () => import('./views/Stranica2View.vue')
        },
        {
            path: '*',
            name: 'pageNotFound',
            component: () => import('./views/PageNotFoundView.vue')
        }
    ]
});

export default router;
