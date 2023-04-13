import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Components/Details";
import Home from "../Components/Home";

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
            }
        ]
    }
])

export default router;