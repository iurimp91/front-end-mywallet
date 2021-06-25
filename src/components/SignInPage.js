import { useState, useContext, useEffect } from "react";
import { Body, Logo, Form } from "./GlobalStyles";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function SignInPage() {
    const [disabled, setDisabled] = useState(false);
    const { user, setUser } = useContext(UserContext); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.length !== 0) {
            const userData = localStorage.getItem("user");
            setUser(JSON.parse(userData));
            history.push("/cash-flow");
        }
    }, []);

    function logIn(e) {
        e.preventDefault();
        setDisabled(true);

        const body = { email, password };
        const request = axios.post("http://localhost:4000/sign-in", body);

        request.then(response => {
            setDisabled(false);
            setEmail("");
            setPassword("");
            setUser(response.data);
            const stringUserData = JSON.stringify(response.data);
            localStorage.setItem("user", stringUserData);
            history.push("/cash-flow");
        });

        request.catch(error => {
            setDisabled(false);
            if(error.response.status === 404) {
                alert("Email e/ou senha incorretos, por favor, tente novamente.");
            } else {
                alert("Algo deu errado com sua requisição, por favor, tente novamente.");
            }
        });
    }

    return (
        <Body>
            <Logo>MyWallet</Logo>
            <Form onSubmit={logIn}>
                <input disabled={disabled} type="email" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)} value={email} />
                <input disabled={disabled} type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} value={password} />
                <button disabled={disabled}>Entrar</button>
            </Form>
            <Link to="/sign-up">
                <span>Primera vez? Cadastre-se!</span>
            </Link>
        </Body>
    );
}