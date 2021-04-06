import React, { Fragment } from "react";
import Product from "./Product";

export default function Home() {
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <Product></Product>
      </section>
    </Fragment>
  );
}
