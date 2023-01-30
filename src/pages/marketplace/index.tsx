import { createElement } from "react";
import MarketHome from "./markethome";

export const routes = [
  {
    description: "MarketPlace Home",
    key: "marketplace home",
    path: "/*",
    element: createElement(MarketHome),
  },
];
