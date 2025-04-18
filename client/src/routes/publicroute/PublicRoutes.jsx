import { Layout } from "../../components/common/layout/Layout.jsx";
import Home from "../../pages/home/Home.jsx";
import { ProductsDetailsPage } from "../../pages/product/ProductDetailsPage.jsx";

const PublicRoutes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <Layout>
        <ProductsDetailsPage />
      </Layout>
    ),
  },
];

export default PublicRoutes;
