import React from "react";
import { CartState } from "../context/Context";
import Filters from "../filters/Filters";
import SingleProduct from "../singleProduct/SingleProduct";
import "./Home.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="Home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
      ;
    </div>
  );
};
export default Home;
