import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Components/Details";
import Home from "../Components/Home";
import Login from "../Components/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },

            {
                path:'/details',
                element:<Details/>
            },

            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export default router;