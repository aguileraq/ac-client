import { createWebHistory, createRouter } from 'vue-router'

const Home = () => import('../views/Home.vue');
const Dashboard = () => import('../views/admin/Dashboard.vue');
const Users = () => import('../views/admin/users/index.vue');
const Associates = () => import('../views/admin/associates/index.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/associates',
        name: 'Associates',
        component: Associates,
    }
];

const history = createWebHistory()

const router = createRouter({
    history,
    routes
});

export default router