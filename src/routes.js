import React from "react";
import Home from "./Pages/Home";
import Residents from "./Pages/Residents";

// for the need of large slace application
const BASE_URL = "";

const routes = [
  {
    name: "Home",
    key: "home",
    exact: true,
    path: `${BASE_URL}`,
    component: <Home />,
  },
  {
    name: "Residents",
    key: "residents",
    path: `${BASE_URL}/residents`,
    component: <Residents />,
  },
];

export default routes;
