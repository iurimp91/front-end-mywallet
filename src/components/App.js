/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyle } from "./styles/GlobalStyles.js";
import SignInPage from "./SignInPage.js";
import SignUpPage from "./SignUpPage.js";
import CashFlowPage from "./homePage/CashFlowPage.js";
import AddIncomePage from "./addEntriesPages/AddIncomePage.js";
import AddExpensePage from "./addEntriesPages/AddExpensePage.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App() {
	const [user, setUser] = useState("");

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user, setUser }}>
				<GlobalStyle />
				<Switch>
					<Route path="/" exact>
						<SignInPage />
					</Route>
					<Route path="/sign-up" exact>
						<SignUpPage />
					</Route>
					<Route path="/cash-flow" exact>
						<CashFlowPage />
					</Route>
					<Route path="/income" exact>
						<AddIncomePage />
					</Route>
					<Route path="/expense" exact>
						<AddExpensePage />
					</Route>
				</Switch>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
