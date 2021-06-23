import styled from "styled-components";
import { Form, Title } from "./GlobalStyles";

export default function AddIncomePage() {
    return (
        <Body>
            <Title>Nova entrada</Title>
            <Form>
                <input type="number" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button>Salvar entrada</button>
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