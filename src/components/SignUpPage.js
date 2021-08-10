/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Body, Logo, Form } from "./GlobalStyles";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();

	function signUp(e) {
		e.preventDefault();

		if (password !== confirmPassword) {
			return alert("As senhas devem ser iguais");
		}

		setDisabled(true);
		const body = { name, email, password };
		const request = axios.post("http://localhost:4000/sign-up", body);

		request.then(() => {
			setDisabled(false);
			setName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			alert("Cadastro realizado com sucesso!");
			history.push("/");
		});

		request.catch((error) => {
			setDisabled(false);
			if (error.response.status === 401) {
				alert("O email escolhido já está cadastrado.");
			} else {
				alert(
					"Algo deu errado com sua requisição, por favor, tente novamente."
				);
			}
		});
	}

	return (
		<Body>
			<Logo>MyWallet</Logo>
			<Form onSubmit={signUp}>
				<input
					disabled={disabled}
					type="text"
					placeholder="Nome"
					required
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					disabled={disabled}
					type="email"
					placeholder="E-mail"
					required
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					disabled={disabled}
					type="password"
					placeholder="Senha"
					required
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<input
					disabled={disabled}
					type="password"
					placeholder="Confirme a senha"
					required
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				/>
				<button disabled={disabled}>Cadastrar</button>
			</Form>
			<Link to="/">
				<span>Já tem uma conta? Entre agora!</span>
			</Link>
		</Body>
	);
}
