import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Title End */}
              {/* Product info*/}
              <div className="row">
                <div className="col-10 col-md-6 col-sm-12  mx-auto ">
                  <img className="img-fluid" src={img} alt="product-image" />
                </div>
                <div className="col-10 col-md-6 col-sm-12  mx-auto ">
                  <h3 className="pt-5 ">Product Name : {title}</h3>
                  <h4 className="text-muted text-capitalize mt-3">
                    Company : {company}
                  </h4>
                  <h3 className="text-blue text-capitalize mt-3">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h3>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0 lead">
                    some info about the product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                </div>

                {/* Product info end */}
                <Link to="/">
                  <ButtonContainer>Back To Products</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "In Cart" : "Add To Cart"}
                </ButtonContainer>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
