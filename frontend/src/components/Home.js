import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

import Product from "./Product";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";

export default function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  // Hook that runs when Home COmponent is Loaded
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Fragment>
          <MetaData title={"Buy the Best Products Online"}></MetaData>
          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}
