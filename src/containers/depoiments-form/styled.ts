import styled from "styled-components";

interface ModalDisplay {
  show: boolean;
}

export const StyledModal = styled.div`
  display: ${({ show }: ModalDisplay) => (show ? "grid" : "none")};
  place-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1000;

  .container {
    border-radius: 5px;
    min-width: 325px;
    padding: 50px;
    background-color: white;

    @media (max-width: 430px) {
      padding: 35px 10px;
      width: 95%;
    }
  }
`;

export const StyledH1 = styled.h1`
  position: relative;
  button {
    position: absolute;
    right: 0;

    border: none;
    background-color: white;

    :hover {
      border-radius: 10px;
      outline: none;

      background-color: #eaeaea;
    }
  }
`;
