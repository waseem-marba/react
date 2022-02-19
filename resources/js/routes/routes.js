import Home from "../components/Home";
import Login from "../pages/Login";

export const routes = [
    {
        path: '/home',
        exact: true,
        auth: true,
        component: Home,
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    }
]