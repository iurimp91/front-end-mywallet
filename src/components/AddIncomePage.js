import { useState, useContext } from "react";
import { Form, Title, Header, InputBody } from "./GlobalStyles";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function AddIncomePage() {
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const localUser = JSON.parse(localStorage.getItem("user"));
    const history = useHistory();

    function addIncome(e) {
        e.preventDefault();
        setDisabled(true);

        const config = { headers: { Authorization: `Bearer ${user.token || localUser.token}` } };
        const centsValue = value * 100;
        const body = { value: centsValue, description, type: "income" };
        const request = axios.post("http://localhost:4000/input", body, config);
        
        request.then(response => {
            setDisabled(false);
            setValue("");
            setDescription("");
            alert("Entrada salva!");
        });

        request.catch(error => {
            setDisabled(false);
            alert("Algo deu errado com sua requisição, por favor, tente novamente.");
        });
    }

    function goBack() {
        history.push("/cash-flow");
    }
 
    return (
        <InputBody>
            <Header>
                <Title>Nova entrada</Title>
                <AiOutlineRollback className="icon" onClick={goBack} />
            </Header>
            <Form onSubmit={addIncome}>
                <input disabled={disabled} type="number" step="0.01" min="0.01" max="20000000" placeholder="Valor" required onChange={(e) => setValue(e.target.value)} value={value} />
                <input disabled={disabled} type="text" placeholder="Descrição" required onChange={(e) => setDescription(e.target.value)} value={description} />
                <button disabled={disabled}>Salvar entrada</button>
            </Form>
        </InputBody>
    );
}