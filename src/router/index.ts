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
                    Component: (await import("@/pages/Welcome")).default,
                }),
            },
            {
                path: "/admin",
                children: [
                    {
                        index: true,
                        // element: <NavLink to="/admin/users"  />,
                    },
                    {
                        path: "/admin/users",
                        lazy: async () => ({
                            Component: (await import("@/pages/admin/UserList")).default,
                        }),
                    },
                    {
                        path: "/admin/roles",
                        lazy: async () => ({
                            Component: (await import("@/pages/admin/RoleList")).default,
                        }),
                    },
                ]
            },
            {
                path: "/list",  
                children: [
                    {
                        index: true,
                        // element: <NavLink to="/list/basic" />,
                    },
                    {
                        path: "/list/basic",
                        lazy: async () => ({
                        Component: (await import("@/pages/list/BasicList")).default,
                    }),
                    },
                    {
                        path: "/list/advanced",
                        lazy: async () => ({
                            Component: (await import("@/pages/list/AdvancedList")).default,
                        }),
                    },
                ]
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
