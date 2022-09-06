import MainPage from "@/pages/MainPage";
import MoviePage from "@/pages/MoviePage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/movie/:id',
        component: MoviePage
    }, 
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;