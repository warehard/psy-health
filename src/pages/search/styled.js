import styled from "styled-components";

const SearchContainer = styled.div`

  display:flex;
  justify-content: center;
  .search-input {
    box-sizing: border-box;
    font-size: 20px;

    width: 30vw;
    height: 50px;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 2px solid #70a3ef;
    border-right: none;
    padding-left: 20px;
    ::-webkit-input-placeholder {
      color: #c8c8c8;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: #c8c8c8;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #c8c8c8;
    }

    :-ms-input-placeholder {
      color: #c8c8c8;
    }
  }

  .search-button {
    box-sizing: border-box;
    border: none;
    background-color: #053559;
    width: 10vw;
    height: 50px;
    color: #fff;
    font-size: 19px;
    font-weight: 600;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default SearchContainer;
