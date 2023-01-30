// import DeepNFT components
import Home from "pages/home";
import Login from "pages/login";
import * as MarketPlace from "pages/marketplace";
import * as Create from "pages/create";

export type RouteType = {
  description: string;
  path: string;
  component?: any;
  subRoutes?: any[] | undefined;
  key: string;
};
const routes: RouteType[] = [
  {
    description: "home",
    path: "/",
    key: "home",
    component: Home,
  },
  {
    description: "login",
    path: "/login",
    key: "login",
    component: Login,
  },
  {
    description: "create nft",
    path: "/create",
    key: "create",
    subRoutes: Create.routes,
  },
  {
    description: "nft market",
    path: "/marketplace",
    key: "market",
    subRoutes: MarketPlace.routes,
  },
];

export default routes;
