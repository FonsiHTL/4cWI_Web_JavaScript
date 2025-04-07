import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Cards_und_Daten from "./components/excercises/Cards_und_Daten";
import Component_Excercise from "./components/excercises/Component_Excercise";
import FootballContainer from "./components/excercises/FootballContainer";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FootballContainer/>,

  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
