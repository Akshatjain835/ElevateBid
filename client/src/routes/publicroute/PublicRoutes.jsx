// src/router/publicroute/PublicRoutes.jsx
import { Layout } from "../../components/common/layout/Layout.jsx";
import { Login } from "../../pages/auth/login.jsx";
import { Register } from "../../pages/auth/Register.jsx";
import Home from "../../pages/home/Home.jsx";
import { ProductsDetailsPage } from "../../pages/product/ProductDetailsPage.jsx";
import { NotFound } from "../../components/common/NotFound.jsx";

const publicRoutes = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: '/register',
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: '/details/:id',
    element: (
      <Layout>
        <ProductsDetailsPage />
      </Layout>
    ),
  },
  {
    path: '/*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
];

export default publicRoutes;
