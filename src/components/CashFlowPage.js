/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import CashFlowEntry from "./CashFlowEntry";
import { useContext, useEffect, useState } from "react";
import { Title, Header } from "./GlobalStyles";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function CashFlowPage() {
	const { user } = useContext(UserContext);
	const [flow, setFlow] = useState([]);
	const [total, setTotal] = useState();
	const localUser = JSON.parse(localStorage.getItem("user"));
	const history = useHistory();

	useEffect(() => {
		const config = {
			headers: { Authorization: `Bearer ${user.token || localUser.token}` },
		};
		const request = axios.get("http://localhost:4000/cash-flow", config);

		request.then((response) => {
			setFlow(response.data);
		});

		request.catch((error) => {
			if (error.response.status === 401) {
				localStorage.removeItem("user");
				alert(
					"Você foi desligado pelo servidor, por favor, faça login novamente."
				);
				history.push("/");
			} else {
				alert(
					"Algo deu errado com sua requisição, por favor, tente novamente."
				);
			}
		});
	}, []);

	useEffect(() => {
		let sum = 0;
		flow.forEach((item) => {
			if (item.type === "income") {
				sum += item.value;
			} else {
				sum -= item.value;
			}
		});
		setTotal(sum);
	}, [flow]);

	function signOut() {
		const config = {
			headers: { Authorization: `Bearer ${user.token || localUser.token}` },
		};
		const request = axios.post("http://localhost:4000/sign-out", {}, config);

		request.then(() => {
			localStorage.removeItem("user");
			history.push("/");
		});

		request.catch(() => {
			alert("Algo deu errado com sua requisição, por favor, tente novamente.");
		});
	}

	return (
		<Body>
			<Header>
				<Title>Olá, {user.name || localUser.name}</Title>
				<RiLogoutBoxRLine className="icon" onClick={signOut} />
			</Header>
			<CashFlowContainer flow={flow}>
				{flow.length === 0 ? (
					<h2>Não há registros de entrada ou saída</h2>
				) : (
					flow.map((item, i) => <CashFlowEntry item={item} key={i} />)
				)}
				{flow.length === 0 ? (
					""
				) : (
					<Total total={total}>
						<h1>SALDO</h1>
						<span>
							{(total / 100).toFixed(2).replace(".", ",").replace("-", "")}
						</span>
					</Total>
				)}
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

const CashFlowContainer = styled.ul`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 23px 11px 15px 12px;
  display: ${(props) => (props.flow.length === 0 ? "flex" : "block")};
  align-items: ${(props) => (props.flow.length === 0 ? "center" : "")};
  overflow-y: auto;
  overflow-x: hidden;

  h2 {
    font-size: 20px;
    color: #868686;
    text-align: center;
  }
`;

const Total = styled.div`
  width: calc(100% - 73px);
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: calc(100% - 170px);
  background-color: inherit;

  h1 {
    font-size: 17px;
    color: #000000;
    font-weight: 700;
  }

  span {
    color: ${(props) => (props.total < 0 ? "#C70000" : "#50AD0E")};
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
    background-color: #a328d6;
    color: #ffffff;
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
