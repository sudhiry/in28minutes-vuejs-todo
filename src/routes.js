import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("./components/Login"),
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("./components/Login"),
        },
        {
            path: "/welcome/:username",
            name: "Welcome",
            component: () => import("./components/Welcome"),
        },
        {
            path: "/todos",
            name: "Todos",
            component: () => import("./components/Todos"),
        },
        {
            path: "/logout",
            name: "Logout",
            component: () => import("./components/Logout"),
        }
    ]
});

export default router;