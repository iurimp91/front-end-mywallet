import { GlobalStyle } from "./GlobalStyles";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import CashFlowPage from "./CashFlowPage";
import AddIncomePage from "./AddIncomePage";
import AddExpensePage from "./AddExpensePage";
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