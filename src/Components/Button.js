import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: var(--lightBlue);
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  // We are passing this cart value from the Add To cart button which
  // can be accepted as a property on props
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
    color: ${(props) => (props.cart ? "black" : "var(--mainBlue)")};
    background-color: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  }
  &:focus {
    outline: none;
  }
`;
