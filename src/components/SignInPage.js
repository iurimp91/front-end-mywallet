import { useState } from "react";
import { Body, Logo, Form } from "./GlobalStyles";
import { Link } from "react-router-dom";

export default function SignInPage() {
    const [disabled, setDisabled] = useState(false);
    
    function logIn() {
        setDisabled(true);
        alert("oi");
    }

    return (
        <Body>
            <Logo>MyWallet</Logo>
            <Form onSubmit={logIn}>
                <input disabled={disabled} type="email" placeholder="E-mail" required />
                <input disabled={disabled} type="password" placeholder="Senha" required />
                <button disabled={disabled}>Entrar</button>
            </Form>
            <Link to="/sign-up">
                <span>Primera vez? Cadastre-se!</span>
            </Link>
        </Body>
    );
}