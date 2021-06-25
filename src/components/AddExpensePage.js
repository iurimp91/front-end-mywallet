import { useState, useContext } from "react";
import { Form, Title, Header, InputBody } from "./GlobalStyles";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function AddExpensePage() {
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const localUser = JSON.parse(localStorage.getItem("user"));
    const history = useHistory();

    function addExpense(e) {
        e.preventDefault();
        setDisabled(true);

        const config = { headers: { Authorization: `Bearer ${user.token || localUser.token}` } };
        const centsValue = value * 100;
        const body = { value: centsValue, description, type: "expense" };
        const request = axios.post("http://localhost:4000/input", body, config);
        
        request.then(response => {
            setDisabled(false);
            setValue("");
            setDescription("");
            alert("Saída salva!");
        });

        request.catch(error => {
            setDisabled(false);
            if(error.response.status === 401) {
                localStorage.removeItem("user");
                alert("Você foi desligado pelo servidor, por favor, faça login novamente.");
                history.push("/");
            } else {
                alert("Algo deu errado com sua requisição, por favor, tente novamente.");
            }
        });
    }

    function goBack() {
        history.push("/cash-flow");
    }

    return (
        <InputBody>
            <Header>
                <Title>Nova saída</Title>
                <AiOutlineRollback className="icon" onClick={goBack} />
            </Header>
            <Form onSubmit={addExpense}>
                <input disabled={disabled} type="number" step="0.01" min="0.01" max="20000000" placeholder="Valor" required onChange={(e) => setValue(e.target.value)} value={value} />
                <input disabled={disabled} type="text" placeholder="Descrição" required onChange={(e) => setDescription(e.target.value)} value={description} />
                <button disabled={disabled}>Salvar saída</button>
            </Form>
        </InputBody>
    );
}