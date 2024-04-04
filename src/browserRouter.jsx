import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from './Root.jsx'
import ErrorRoute from "./ErrorRoute.jsx";
import YourName from "./YourName.jsx";
import FriendName from "./FriendName.jsx";

const router = createBrowserRouter(
[
    {
        path: "/home/patients",
        element: <Root />,
        errorElement: <ErrorRoute />
    },
    {
        path: "/patients/:id/*",
        element: <YourName />
    },
    {
        path: "/contacts/2",
        element: <FriendName />
    },
]
// createRoutesFromElements(
//         <Route path="/" element={<Root/>} errorElement={<ErrorRoute />}/>
// )
);

export default router;