// src/router/privateroute/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/authSlice";
import { Navigate } from "react-router-dom";

import { CategoryList } from "../../admin/category/CategoryList";
import { CreateCategory } from "../../admin/category/CreateCategory.jsx";
import { UpdateCategory } from "../../admin/category/UpdateCategory";
import { Income } from "../../admin/Income";
import { UserList } from "../../admin/UserList";
import { AdminProductList } from "../../admin/product/AdminProductList.jsx";
import { UpdateProductByAdmin } from "../../admin/product/UpdateProductByAdmin.jsx";

import { DashboardLayout } from "../../components/common/layout/DashboardLayout";
import { Layout } from "../../components/common/layout/Layout";
import { LoginAsSeller } from "../../pages/auth/LoginAsSeller";
import { UserProfile } from "../../pages/auth/UserProfile";
import { Dashboard } from "../../pages/dashboard/dashboard";
import { AddProduct } from "../../pages/product/AddProduct.jsx";
import { ProductList } from "../../pages/product/productlist/ProductList.jsx";
import { WinningBidList } from "../../pages/product/WinningBidList.jsx";
import { ProductEdit } from "../../pages/product/ProductEdit.jsx"

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const privateRoutes = [
  {
    path: '/seller/login',
    element: (
      <PrivateRoute>
        <Layout>
          <LoginAsSeller />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/admin/income',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <Income />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/userlist',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <UserList />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <UserProfile />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/category',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <CategoryList />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/category/create',
    element: (

      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <CreateCategory />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/category/update/:id',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <UpdateCategory />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/add',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <AddProduct />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/list',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <ProductList />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/edit/:id',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <ProductEdit />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/won',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <WinningBidList />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/admin',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <AdminProductList />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/product/admin/update/:id',
    element: (
      <PrivateRoute>
        <Layout>
          <DashboardLayout>
            <UpdateProductByAdmin />
          </DashboardLayout>
        </Layout>
      </PrivateRoute>
    ),
  },
];

export default privateRoutes;
