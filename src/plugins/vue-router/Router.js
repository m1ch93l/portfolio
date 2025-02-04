/*
|--------------------------------------------------------------------------
| VUE ROUTER
|--------------------------------------------------------------------------
| An instance of the vue-router that defines all the SPA front-end routes.
|
*/


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode  : 'history',
    base  : '/portfolio',
    routes: [
        {
            path     : '/',
            name     : 'home',
            component: () => import('../../views/Home.vue'),
            meta     : {
                title: 'Home'
            }
        },
        {
            path     : '/projects/:slug?',
            name     : 'projects',
            component: () => import('../../views/Projects.vue'),
            meta     : {
                title: 'Projects'
            }
        },
        {
            path     : '/contact',
            name     : 'contact',
            component: () => import('../../views/Contact.vue'),
            meta     : {
                title: 'Contact'
            }
        }
    ]
});
