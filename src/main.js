import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Profile from './pages/Profile.vue'
import Home from './pages/Home.vue'
import Users from './pages/Users.vue'
import Login from './pages/Login.vue'

const router = createRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/users",
            component: Users
        },
        {
            path: "/profile",
            component: Profile
        },
        {
            path: "/login",
            component: Login
        }
    ],
    history: createWebHashHistory()
})

const app = createApp(App);
app.use(router);
app.mount('#app');