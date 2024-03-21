import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from './Root.jsx'
import ErrorRoute from "./ErrorRoute.jsx";
import Names from "./Names.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorRoute />
    },
    {
        path: "/contacts/*",
        element: <Names />,
    }
]);

export default router;