import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import Dashboard from "../admin/Dashboard";
import AddProduct from "../admin/AddProduct";
import UpdateProduct from "../admin/UpdateProduct";
import ManageProducts from "../admin/ManageProducts";
import ManageOrders from "../admin/ManageOrders";
import ManageUsers from "../admin/ManageUsers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
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
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />

        <Route
          path="/admin/update-product"
          element={
            <Layout>
              <UpdateProduct />
            </Layout>
          }
        />

        <Route
          path="/admin/manage-products"
          element={
            <Layout>
              <ManageProducts />
            </Layout>
          }
        />

        <Route
          path="/admin/manage-orders"
          element={
            <Layout>
              <ManageOrders />
            </Layout>
          }
        />

        <Route
          path="/admin/manage-users"
          element={
            <Layout>
              <ManageUsers />
            </Layout>
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