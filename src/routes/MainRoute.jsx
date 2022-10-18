import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Inventory from "../components/Inventory";
import Login from "../components/Login";
import Orders from "../components/Orders";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: "/inventory",
                element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);

export default routes;