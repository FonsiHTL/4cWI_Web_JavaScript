import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Cards_und_Daten from "./components/excercises/Cards_und_Daten";
import Component_Excercise from "./components/excercises/Component_Excercise";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cards_und_Daten/>,

  },

  {

    path: "/p2",
    element: <Component_Excercise/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
