import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import CashFlowEntry from "./CashFlowEntry";
import { useState } from "react";
import { Title } from "./GlobalStyles";
import { Link } from "react-router-dom";

export default function CashFlowPage() {
    const [flow, setFlow] = useState([
        {
            date: "30/11",
            description: "Almoço mãe",
            value: 3990,
            type: "expense",
        },
        {
            date: "27/11",
            description: "Mercado",
            value: 54254,
            type: "expense",
        },
        {
            date: "26/11",
            description: "Compras churrasco",
            value: 6760,
            type: "expense",
        },
        {
            date: "20/11",
            description: "Empréstimo Maria",
            value: 50000,
            type: "income",
        },
        {
            date: "15/11",
            description: "Salário",
            value: 300000,
            type: "income",
        },
    ]);

    let total = 0;
    flow.forEach(item => {
        if(item.type === "income") {
            total += item.value;
        } else {
            total -= item.value;
        }
    });

    return (
        <Body>
            <Header>
                <Title>Olá, Fulano</Title>
                <RiLogoutBoxRLine className="logout-icon" />
            </Header>
            <CashFlowContainer flow={flow}>
                {flow.length === 0 ? <h2>Não há registros de entrada ou saída</h2> :
                    flow.map((item, i) => 
                        <CashFlowEntry item={item} key={i} />
                    )
                }
                {flow.length === 0 ? "" :
                    <Total total={total}>
                        <h1>SALDO</h1>
                        <span>{(total/100).toFixed(2).replace(".",",").replace("-","")}</span>
                    </Total>
                }
            </CashFlowContainer>
            <ButtonContainer>
                <Link to="/income">
                    <BiPlusCircle className="button-icon" />
                    <span>Nova entrada</span>
                </Link>
                <Link to="/expense">
                    <BiMinusCircle className="button-icon" />
                    <span>Nova saída</span>
                </Link>
            </ButtonContainer>
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
    padding: 25px 25px 16px 25px;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    position: relative;

    .logout-icon {
        color: #FFFFFF;
        font-size: 24px;
        cursor: pointer;
    }
`;

const CashFlowContainer = styled.ul`
    width: 100%;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 23px 11px 10px 12px;
    position: relative;
    display: ${props => props.flow.length === 0 ? "flex" : "block"};
    align-items: ${props => props.flow.length === 0 ? "center" : ""};

    h2 {
        font-size: 20px;
        color: #868686;
        text-align: center;
    }
`;

const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    padding-right: 25px;


    h1 {
        font-size: 17px;
        color: #000000;
        font-weight: 700;
    }

    span {
        color: ${props => props.total < 0 ? "#C70000" : "#50AD0E"}
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;

    a {
        width: calc((100% / 2) - 7.5px);
        height: 114px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 700;
        cursor: pointer;

        .button-icon {
            font-size: 22px;
        }

        span {
            width: 20px;
        }
    }
`;