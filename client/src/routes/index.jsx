import PrivateRoutes from "./privateroute/PrivateRoute";
import PublicRoutes from "./publicroute/PublicRoutes";

const routes = [
  ...PublicRoutes,
  ...PrivateRoutes
];

export default routes;
