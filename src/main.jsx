import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./Pages/AboutPage";
import RecipesPage from "./Pages/RecipesPage";
import GallaryPage from "./Pages/GallaryPage";
import ReservationPage from "./Pages/ReservationPage";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";
import Confirmation from "./Pages/Confirmation";
import BlogPage from "./Pages/BlogPage";
import BlogSingle from "./Pages/BlogSingle";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Components/ErrorPage";
const  router =  createBrowserRouter([
   {
      path:"*",
      element: <App/>
   },
   {
      path:"ABOUT",
      element:<AboutPage/>
   },
   {
      path:"RECIPES",
      element:<RecipesPage/>
   },
   {
      path:"GALLARY",
      element:<GallaryPage/> 
   
   },
   {
      path:"RESERVATION",
      element:<ReservationPage/>
   },
   {
      path:"Cart",
      element:<Cart/>
   },
   {
      path:"SHIPPING",
      element:<Shipping/>
   },
   {
      path:"PAYMENT",
      element:<Payment/>
   },
   {
      path:"CONFIRMATION",
      element:<Confirmation/>
   },
  {
   path:"CONFIRMATION",
   element:<Confirmation/>
  },
  {
   path:"BLOG",
   element:<BlogPage/>
  },
  {
   path:"BLOG SINGLE",
   element:< BlogSingle/>
  },
  {
   path:"CONTACT",
   element:<ContactPage/>
  },
  {
   path:"/",
   element:<ErrorPage/>
  }
  
   

  ]);
createRoot(document.getElementById("root")).render(

 <RouterProvider router={router} />


);
