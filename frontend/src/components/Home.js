import React, { Fragment } from "react";
import MetaData from "./layout/MetaData";

import Product from "./Product";

export default function Home() {
  return (
    <Fragment>
      <MetaData title={"Buy the Best Products Online"}></MetaData>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <Product></Product>
      </section>
    </Fragment>
  );
}
