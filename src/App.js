import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
// import About from "./components/AboutClass";
import Error from './components/Error';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Loading
// Dynamic Bundling
// Dynamic Import
// On Demand Loading

// import Instamart from "./components/Instamart";
const Instamart=lazy(()=>import("./components/Instamart"));

const About=lazy(()=>import("./components/About"))
const AppLayout=()=>{
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

// we want like if we click on about ,header and footer should also be visible
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        // here "/about" or "about" both work same because we want like localhost:1234/about
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}>
          <About/>
        </Suspense>,
        // nested children
        children:[
          {
            // this path is relative, if we give /profile it means localhost:1234/profile
            //   / refer "from root"
            path:"profile", 
            element:<Profile/>,
            errorElement:<Error/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenu/>
      },{
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>
      }
    ]
  }
  
])

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)
