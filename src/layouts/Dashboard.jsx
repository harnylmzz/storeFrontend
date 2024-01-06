import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import ProductDetail from "./ProductDetail";
import CartDetail from "./CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/products/:id" element={<ProductDetail />} />
              <Route exact path="/cart" element={<CartDetail />} />
              <Route exact path="/product/add" element={<ProductAdd />} />
              <Route exact path="/categories" element={<Categories />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
