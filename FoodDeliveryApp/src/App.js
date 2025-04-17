import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import { lazy, Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const About = lazy(()=>import("./components/About")); // lazy loading 

const AppLayout = () =>{
    return(
        <div className="row">
            <Header/>
            <Outlet/>
      </div>
    );
};
// root.render(<AppLayout/>);
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[   
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: (<Suspense fallback = {<h1>Loading about us component...</h1>}><About/></Suspense>)
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"restaurant/:restId",
                element:<RestaurantDetail/>
            }
            
        ],
        errorElement: <Error/>
    },
    
]);
root.render(<RouterProvider router={appRouter}/>);