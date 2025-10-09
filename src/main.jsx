import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Route } from 'lucide-react'
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import HeroSection from "./components/Hero-section.jsx";
import Sell from "./pages/Sell.jsx";
import Donate from "./pages/Donate.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/Signup.jsx";
import Card from "./pages/Card.jsx";
import About from "./pages/About.jsx";
import ChatPage from "./pages/Chat-to-seller.jsx";
import SellerDashboard from "./components/SellerDashbord.jsx";
// import SellerDashboardWrapper from "./components/SellerDashboardWrapper.jsx";

const router = createBrowserRouter([
  // {
  //   path:"/",
  //   element:<App/>,
  //   children:[
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "sell",
        element: <Sell />,
      },
      {
        path: "Donate",
        element: <Donate />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "chat/:seller",
        element: <ChatPage />,
      },

      // {
      //   path: "seller-dashboard",
      //   element: <SellerDashboardWrapper />, // wrapper for seller
      //   children: [
      //     {
      //       index: true,
      //       element: <SellerDashboard />, // actual content inside wrapper
      //     },
      //   ],
      // },
      {
        path: "user/profile",
        element: <SellerDashboard />, // for buyer (simple profile)
      },
    ],
  },
  // ]
  //   }
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route path='/' element={<Home/>}>
//       {/* <Route path='' element={<Home/>}></Route>
//       <Route path='about' element={<About/>}></Route>
//       <Route path='contact' element={<ContactUs/>}></Route> */}

//       </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
