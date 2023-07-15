import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue';
import JobFairPage from '@/components/JobFairPage.vue';
import MeetingsPage from '@/components/MeetingsPage.vue';
import ContactPage from '@/components/ContactPage.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/JobFairPage',
            name: 'JobFairPage',
            component: JobFairPage
        },
        {
            path: '/MeetingsPage',
            name: 'MeetingsPage',
            component: MeetingsPage
        },
        {
            path: '/ContactPage',
            name: 'ContactPage',
            component: ContactPage
        },
    ]
})