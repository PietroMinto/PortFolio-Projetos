import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Projetos } from "../Pages/Projetos";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/projetos",
        element: <Projetos />
    },
]);