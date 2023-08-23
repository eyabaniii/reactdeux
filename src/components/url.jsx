import Product from "../product";
import React from "react";

import Card from 'react-bootstrap/Card';
const Url = () => {
  return (

    <div>
      <Card.Img  className='image' variant="top" src={Product.url} />
    </div>
  )
  };

export default Url;