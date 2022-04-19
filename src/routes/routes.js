import {Dashboard,Settings} from "../pages/index"

const routers = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    component: "AuthLayout",
    path: "/auth",
    auth: false,
    name: "Auth",
    exact: false,
    redirect: "/auth/login",
    childrens: [
      {
        component: "Login",
        path: "/login",
        componentPath: "pages/Auth/Login",
        name: "Login",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/admin",
    auth: false,
    childrens: [
      // DASHBOARD
      {
        component: "Dashboard",
        path: "/dashboard",
        componentPath: "pages/Dashboard/InitDashboard/Dashboard",
        name: "Dashboard",
        auth: false,
        exact: true,
      },
      {
        component: "Settings",
        path: "/settings",
        componentPath: "pages/Dashboard/InitDashboard/Settings",
        name: "Settings",
        auth: false,
        exact: true,
      },
    ],
  },
];
export default routers;
