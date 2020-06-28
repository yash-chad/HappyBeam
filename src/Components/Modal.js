import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeModal } = value;
          const { id, img, title, price } = value.modalProduct;

          if (!value.modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <InterModal>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-sm-12 col-md-12 col-sm-10 col-lg-12 text-center text-capitalize "
                      >
                        <h5 className="py-3">Item added to cart!</h5>
                        <img
                          src={img}
                          className="img-fluid py-0"
                          alt="product"
                        ></img>
                        <h5>{title}</h5>
                        <h5 className="text-muted">Price : {price}$</h5>
                        <Link to="/">
                          <ButtonContainer
                            onClick={() => {
                              closeModal(id);
                            }}
                          >
                            Store
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer
                            cart
                            onClick={() => {
                              closeModal(id);
                            }}
                            className="mb-3"
                          >
                            Go To Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InterModal>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const InterModal = styled.div`
  background: white;
  transform: scale(0.9);
`;

const ModalContainer = styled.div`
  color: black;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background: rgba(0, 0, 0, 0.3);
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;
