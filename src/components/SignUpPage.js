import { useState } from "react";
import { Body, Title, Form } from "./GlobalStyles";

export default function SignUpPage() {
    const [disabled, setDisabled] = useState(false);
    
    function signUp() {
        setDisabled(true);
        alert("oi");
    }

    return (
        <Body>
            <Title>MyWallet</Title>
            <Form onSubmit={signUp}>
                <input disabled={disabled} type="text" placeholder="Nome" required />
                <input disabled={disabled} type="email" placeholder="E-mail" required />
                <input disabled={disabled} type="password" placeholder="Senha" required />
                <input disabled={disabled} type="password" placeholder="Confirme a senha" required />
                <button disabled={disabled}>Cadastrar</button>
            </Form>
            <span>Já tem uma conta? Entre agora!</span>
        </Body>
    );
}