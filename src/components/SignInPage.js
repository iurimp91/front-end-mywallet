import styled from "styled-components";
import { useState } from "react";

export default function SignInPage() {
    const [disabled, setDisabled] = useState(false);
    
    function logIn() {
        setDisabled(true);
        alert("oi");
    }

    return (
        <Body>
            <Title>MyWallet</Title>
            <Form onSubmit={logIn}>
                <input disabled={disabled} type="email" placeholder="E-mail" required />
                <input disabled={disabled} type="password" placeholder="Senha" required />
                <button disabled={disabled}>Entrar</button>
            </Form>
            <span>Primera vez? Cadastre-se!</span>
        </Body>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 25px;

    span {
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 36px;
    }
`;

const Title = styled.h1`
    font-family: 'Saira Stencil One';
    font-size: 32px;
    color: #FFFFFF;
    margin-bottom: 24px;
`;

const Form = styled.form`
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
        background-color: #FFFFFF;
        border: none;
        margin-bottom: 13px;
        
    }

    button {
        width: 100%;
        height: 46px;
        border-radius: 5px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        border: none;
    }    
`;