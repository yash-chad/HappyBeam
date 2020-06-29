import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center my-3">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="product-image"
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>$ {price}
      </div>
      {/* Quantity */}
      <div className="col-10 mx-auto col-lg-2">
        <span
          className="btn btn-black border-dark mx-1"
          onClick={() => {
            decrement(id);
          }}
        >
          -
        </span>
        <span className="btn border-dark  btn-black mx-1 ">{count}</span>
        <span
          className="btn btn-black border-dark mx-1"
          onClick={() => {
            increment(id);
          }}
        >
          +
        </span>
      </div>
      {/* Quantity Ends */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i
            className="fa fa-trash"
            onClick={() => {
              removeItem(id);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
