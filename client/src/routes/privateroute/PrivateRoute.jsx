// ...import other private components

import { CategoryList } from "../../admin/category/CategoryList";
import { CreateCategory } from "../../admin/category/CreateCategory.jsx";
import { UpdateCategory } from "../../admin/category/UpdateCategory";
import { Income } from "../../admin/Income";
import { UserList } from "../../admin/UserList";
import { DashboardLayout } from "../../components/common/layout/DashboardLayout";
import { Layout } from "../../components/common/layout/Layout";
import { LoginAsSeller } from "../../pages/auth/LoginAsSeller";
import { UserProfile } from "../../pages/auth/UserProfile";
import { Dashboard } from "../../pages/dashboard/dashboard";
import { AddProduct } from "../../pages/product/AddProduct.jsx";
import { ProductList } from "../../pages/product/productlist/ProductList.jsx";
import { WinningBidList } from "../../pages/product/WinningBidList.jsx";
import { AdminProductList } from "../../admin/product/AdminProductList.jsx";
import { UpdateProductByAdmin } from "../../admin/product/UpdateProductByAdmin.jsx";


const privateRoutes = [
    {
      path: '/seller/login',
      element: (
        
          <Layout>
            <LoginAsSeller />
          </Layout>
        
      ),
    },
   
    {
      path: '/admin/income',
      element: (
        
          <Layout>
            <DashboardLayout>
              <Income />
            </DashboardLayout>
          </Layout>
        
      ),
    },
   
    {
      path: '/dashboard',
      element: (
        
          <Layout>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </Layout>
        
      ),
    },
 
    {
      path: '/userlist',
      element: (
        
          <Layout>
            <DashboardLayout>
              <UserList />
            </DashboardLayout>
          </Layout>
        
      ),
    },
   
    {
      path: '/profile',
      element: (
        
          <Layout>
            <DashboardLayout>
              <UserProfile />
            </DashboardLayout>
          </Layout>
        
      ),
    },
    {
      path: '/category',
      element: (
        
          <Layout>
            <DashboardLayout>
              <CategoryList />
            </DashboardLayout>
          </Layout>
        
      ),
    },
    {
      path: '/category/create',
      element: (
        
          <Layout>
            <DashboardLayout>
              <CreateCategory />
            </DashboardLayout>
          </Layout>
        
      ),
    },
    {
      path: '/category/update/:id',
      element: (
        
          <Layout>
            <DashboardLayout>
              <UpdateCategory />
            </DashboardLayout>
          </Layout>
        
      ),
    },
    {
      path: '/product/add',
      element: (
        <Layout>
          <DashboardLayout>
            <AddProduct />
          </DashboardLayout>
        </Layout>
      ),
    },
    {
      path: '/product/list',
      element: (
        <Layout>
          <DashboardLayout>
            <ProductList />
          </DashboardLayout>
        </Layout>
      ),
    },
    {
      path: '/product/won',
      element: (
        <Layout>
          <DashboardLayout>
            <WinningBidList />
          </DashboardLayout>
        </Layout>
      ),
    },
    {
      path: '/product/admin',
      element: (
        <Layout>
          <DashboardLayout>
            <AdminProductList />
          </DashboardLayout>
        </Layout>
      ),
    },
    {
      path: '/product/admin/update/:id',
      element: (
        <Layout>
          <DashboardLayout>
            <UpdateProductByAdmin />
          </DashboardLayout>
        </Layout>
      ),
    },
  ];
  

export default privateRoutes;
