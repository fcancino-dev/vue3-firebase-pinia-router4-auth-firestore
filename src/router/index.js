import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    // console.log(user);
    if (user && user.emailVerified) {
      next();
      console.log("Autenticado");
    } 
    else {
      next("/login");
        console.log("No esta Autenticado"); 
    }
    userStore.loadingSession = false;
}


const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
        // component: Home,
        beforeEnter:  requireAuth,
    },
    {
        path: "/perfil",
        name: "Perfil",
        component: () => import("../views/PerfilView.vue"),
        // component: Perfil,
        beforeEnter:  requireAuth,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/AboutView.vue"),
        // component: About,
        beforeEnter:  requireAuth,
    },
    {
        path: "/editarurl/:id",
        name: "EditarUrl",
        component: () => import("../views/EditarUrl.vue"),
        // component: Editar,
        beforeEnter:  requireAuth,
    },
    {
        path: "/editardisplayname/:id",
        name: "EditarDisplayName",
        component: () => import("../views/EditarDisplayName.vue"),
        // component: Editar,
        beforeEnter:  requireAuth,
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/LoginView.vue")
        // component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/RegisterView.vue")
        // component: Register
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router   