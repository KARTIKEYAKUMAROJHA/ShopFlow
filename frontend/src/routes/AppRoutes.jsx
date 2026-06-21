import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

/* User Pages */

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import TrackOrder from "../pages/TrackOrder";
import PaymentHistory from "../pages/PaymentHistory";
import Wishlist from "../pages/Wishlist";
import CompareProducts from "../pages/CompareProducts";
import Categories from "../pages/Categories";

import SearchPage from "../pages/SearchPage";

import Reviews from "../pages/Reviews";
import RecentlyViewed from "../pages/RecentlyViewed";
import Notifications from "../pages/Notifications";
import Coupons from "../pages/Coupons";
import Addresses from "../pages/Addresses";
import Analytics from "../pages/Analytics";
import Invoice from "../pages/Invoice";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

import About from "../pages/About";
import Contact from "../pages/Contact";
// import FAQ from "../pages/FAQ";
import FAQ from "../pages/Faq";
import Support from "../pages/Support";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Careers from "../pages/Careers";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

/* Admin Pages */

import AdminDashboard from "../pages/AdminDashboard";
import AddProduct from "../admin/AddProduct";
import ManageProducts from "../admin/ManageProducts";
// import EditProduct from "../pages/EditProduct";
import ManageUsers from "../admin/ManageUsers";
import UserRoles from "../pages/UserRoles";
import SalesReport from "../pages/SalesReport";
import RevenueDashboard from "../pages/RevenueDashboard";
import SystemLogs from "../pages/SystemLogs";
import AdminNotifications from "../pages/AdminNotifications";
import AdminSettings from "../pages/AdminSettings";

import ManageOrders from "../admin/ManageOrders";
import UpdateProduct from "../admin/UpdateProduct";

import NotFound from "../pages/NotFound";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />

        <Route
          path="/compare-products"
          element={
            <Layout>
              <CompareProducts />
            </Layout>
          }
        />

        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />

        <Route
  path="/search"
  element={
    <Layout>
      <SearchPage />
    </Layout>
  }
/>

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />

        <Route
          path="/support"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />

        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/blog-details"
          element={
            <Layout>
              <BlogDetails />
            </Layout>
          }
        />

        <Route
          path="/careers"
          element={
            <Layout>
              <Careers />
            </Layout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/terms"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

        {/* Protected */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Layout>
                <Checkout />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Layout>
                <Orders />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-details"
          element={
            <ProtectedRoute>
              <Layout>
                <OrderDetails />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/track-order"
          element={
            <ProtectedRoute>
              <Layout>
                <TrackOrder />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment-history"
          element={
            <ProtectedRoute>
              <Layout>
                <PaymentHistory />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Layout>
                <Wishlist />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Layout>
                <Reviews />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/recently-viewed"
          element={
            <ProtectedRoute>
              <Layout>
                <RecentlyViewed />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Layout>
                <Notifications />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/coupons"
          element={
            <ProtectedRoute>
              <Layout>
                <Coupons />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/addresses"
          element={
            <ProtectedRoute>
              <Layout>
                <Addresses />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Layout>
                <Analytics />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoice"
          element={
            <ProtectedRoute>
              <Layout>
                <Invoice />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Admin */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Layout>
                <AdminDashboard />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <Layout>
                <AddProduct />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/manage-products"
          element={
            <AdminRoute>
              <Layout>
                <ManageProducts />
              </Layout>
            </AdminRoute>
          }
        />

        {/* <Route
          path="/admin/edit-product"
          element={
            <AdminRoute>
              <Layout>
                <UpdateProduct />
              </Layout>
            </AdminRoute>
          }
        /> */}

        <Route
  path="/admin/edit-product"
  element={
    <AdminRoute>
      <Layout>
        <UpdateProduct />
      </Layout>
    </AdminRoute>
  }
/>

        <Route
          path="/admin/manage-users"
          element={
            <AdminRoute>
              <Layout>
                <ManageUsers />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
  path="/admin/manage-orders"
  element={
    <AdminRoute>
      <Layout>
        <ManageOrders />
      </Layout>
    </AdminRoute>
  }
/>

        <Route
          path="/admin/user-roles"
          element={
            <AdminRoute>
              <Layout>
                <UserRoles />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/sales-report"
          element={
            <AdminRoute>
              <Layout>
                <SalesReport />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/revenue-dashboard"
          element={
            <AdminRoute>
              <Layout>
                <RevenueDashboard />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/system-logs"
          element={
            <AdminRoute>
              <Layout>
                <SystemLogs />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/notifications"
          element={
            <AdminRoute>
              <Layout>
                <AdminNotifications />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <Layout>
                <AdminSettings />
              </Layout>
            </AdminRoute>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default AppRoutes;