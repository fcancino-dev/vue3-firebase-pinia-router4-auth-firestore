import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";

// import Home from "../views/HomeView.vue";
// import Login from "../views/LoginView.vue";
// import Register from "../views/RegisterView.vue";

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    console.log(user);
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
        path: "/editar/:id",
        name: "Editar",
        component: () => import("../views/Editar.vue"),
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