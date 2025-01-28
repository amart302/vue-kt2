import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import Profile from './components/Profile.vue'
import Login from './components/Login.vue'

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