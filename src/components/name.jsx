import Product from "../product";
import React from "react";

const Name = () => {
  return (
    <div>

      <p>productName: <span>{Product.name}</span> </p>
    </div>
  )
};

export default Name;