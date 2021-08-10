import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, .root {
        background-color: #9055BE;
        font-family: "Raleway";
    }

    ::-webkit-input-placeholder, input {
        font-family: "Raleway";
        color: #000000;
        outline: 0;
    }

    button {
        font-family: "Raleway";
    }

    button:hover {
        opacity: 0.7;
    }

    a {
        text-decoration: none;
    }
`;

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

  a {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 36px;
  }
`;

export const Logo = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 58px;
    border-radius: 5px;
    color: #000000;
    font-size: 20px;
    padding-left: 15px;
    background-color: #ffffff;
    border: none;
    margin-bottom: 13px;
  }

  button {
    width: 100%;
    height: 46px;
    border-radius: 5px;
    background-color: #a328d6;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    border: none;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  .icon {
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const InputBody = styled.div`
  padding: 25px;

  h1,
  .icon {
    margin-bottom: 18px;
  }
`;
