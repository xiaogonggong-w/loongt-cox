import { createBrowserRouter, NavLink , type RouteObject } from "react-router";

const routes: RouteObject[] = [
    {
        path: "/",
        lazy: async () => ({
            Component: (await import("@/layouts")).default,
        }),
        children: [
            {
                path: "/",
                lazy: async () => ({
                    Component: (await import("@/pages/mydata")).default,
                }),
            },
            {
                path: "/dataprocess",
                lazy: async () => ({
                    Component: (await import("@/pages/dataprocess")).default,
                }),
            },
            {
                path: "/dataanalysis",  
                lazy: async () => ({
                    Component: (await import("@/pages/dataanalysis")).default,
                }),
            }
           
           

        ],
    },
    {
        path: "/user/login",
        lazy: async () => ({
            Component: (await import("@/pages/user/login")).default,
        }),
    }
];

export const router = createBrowserRouter(routes, {
    basename: import.meta.env.VITE_APP_BASE_URL,
});
