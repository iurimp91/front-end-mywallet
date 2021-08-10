/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useContext } from "react";
import { Form, Title, Header, InputBody } from "../styles/GlobalStyles.js";
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import createConfigAndBody from "../utils/createConfigAndBody.js";
import handleAddEntrySuccess from "../utils/handleAddEntrySuccess.js";
import handleError from "../utils/handleError.js";
import goBackHome from "../utils/goBackHome.js";

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

		const configAndBodyobject = { user, localUser, value, description, type: "income" };
		const { config, body } = createConfigAndBody(configAndBodyobject);

		const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/input`, body, config);

		request.then(() => {
			handleAddEntrySuccess(setDisabled, setValue, setDescription);
			alert("Entrada salva!");
		});

		request.catch((error) => {
			setDisabled(false);
			handleError(error, history);
		});
	}

	return (
		<InputBody>
			<Header>
				<Title>Nova entrada</Title>
				<AiOutlineRollback className="icon" onClick={() => goBackHome(history)} />
			</Header>
			<Form onSubmit={addIncome}>
				<input
					disabled={disabled}
					type="number"
					step="0.01"
					min="0.01"
					max="20000000"
					placeholder="Valor"
					required
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<input
					disabled={disabled}
					type="text"
					placeholder="Descrição"
					required
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<button disabled={disabled}>Salvar entrada</button>
			</Form>
		</InputBody>
	);
}
