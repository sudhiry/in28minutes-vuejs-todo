import Vue from "vue";
import Router from "vue-router";
import store from './store';

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
            beforeEnter: (to, from, next) => {
                if(store.state.isAuthenticated) {
                    next()
                } else {
                    next({path:'/login', fromLink: to})
                }
            }
        },
        {
            path: "/todos",
            name: "Todos",
            component: () => import("./components/Todos"),
            beforeEnter: (to, from, next) => {
                if(store.state.isAuthenticated) {
                    next()
                } else {
                    next({path:'/login', fromLink: to})
                }
            }
        },
        {
            path: "/logout",
            name: "Logout",
            component: () => import("./components/Logout"),
            beforeEnter: (to, from, next) => {
                store.logout();
                next();
            }
        }
    ]
});

export default router;