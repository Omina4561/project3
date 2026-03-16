import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
const Home = lazy(()=> import('./Pages/Home'))
const Search = lazy(()=> import('./Pages/Search'))
const Hotels = lazy(()=> import('./Pages/Hotels'))
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index:true,
                element: <Home/>
            },
            {
                path: '/search',
                element: <Search/>
            },
            {
                path: '/hotels',
                element: <Hotels/>
            }
        ]
    }
])