import { Layout } from "../../components/common/layout/Layout.jsx";
import Home from "../../pages/home/Home.jsx";

const PublicRoutes = [
    {
        path: "/",
        element: <Layout><Home /></Layout>,
      },
];

export default PublicRoutes;
