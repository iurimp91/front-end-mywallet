import { useState, useContext } from "react";
import styled from "styled-components";
import { Form, Title } from "./GlobalStyles";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function AddIncomePage() {
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);

    function addIncome(e) {
        e.preventDefault();
        setDisabled(true);

        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const centsValue = value * 100;
        const body = { value: centsValue, description, type: "income" };
        const request = axios.post("http://localhost:4000/input", body, config);
        
        request.then(response => {
            setDisabled(false);
            setValue("");
            setDescription("");
        });

        request.catch(error => {
            setDisabled(false);
            alert("Algo deu errado com sua requisição, por favor, tente novamente.");
        });

    }
 
    return (
        <Body>
            <Title>Nova entrada</Title>
            <Form onSubmit={addIncome}>
                <input disabled={disabled} type="number" step="0.01" min="0.01" placeholder="Valor" required onChange={(e) => setValue(e.target.value)} value={value} />
                <input disabled={disabled} type="text" placeholder="Descrição" required onChange={(e) => setDescription(e.target.value)} value={description} />
                <button disabled={disabled}>Salvar entrada</button>
            </Form>
        </Body>
    );
}

const Body = styled.div`
    padding: 25px;

    h1 {
        margin-bottom: 40px;
    }
`;