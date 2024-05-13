import {useState, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {

  const [userName, setUserName] = useState("Hemant");
  
  return (
    <UserContext.Provider value={{loggedInUser: userName}}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
