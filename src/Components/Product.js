import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import propTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="mx-auto col-9 col-md-6  col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="product-image"
                      className="img-thIumbnail card-img-top"
                    ></img>
                  </Link>
                  <button
                    className="card-btn"
                    disabled={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <div className="text-capitalize  p-1">In cart</div>
                    ) : (
                      <div>
                        <i className="fa fa-cart-plus p-1"></i>
                      </div>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/* Card Footer */}

          <div className=" card-footer d-flex justify-content-between ">
            <h4 className="align-self-center mb-0">{title}</h4>
            <h3 className="font-italic">
              <span className="mx-2">$ {price}</span>
            </h3>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    img: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    inCart: propTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    bordercolor: transparent;
    transition: all 0.5s linear;
  }
  .card-footer: {
    background-color: white !important;
    border-top: transparent;
    transition: all 1s linear;
  }
  .card-footer:last-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px);
    background-color: white;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: None;
    color: var(--mainWhite);
    font-size: 1.4rem;
    transform: translate(100%, 100%); //Hides our button completely
    border-radius: 0.5rem 0 0 0;
    transition: all 0.5s linear;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
    border: None;
  }
`;

export default Product;
