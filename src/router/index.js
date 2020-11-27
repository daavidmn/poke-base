import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokeDetails from '../views/PokeDetails.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: PokeDetails,
        props: true
    }
]

const router = new VueRouter({
    routes
})

export default router
