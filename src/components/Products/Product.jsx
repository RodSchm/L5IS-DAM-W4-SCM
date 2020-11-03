import React from "react";


function Product(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <img src={props.imgURL}></img>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
