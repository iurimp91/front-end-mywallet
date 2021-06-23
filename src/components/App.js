import { GlobalStyle } from "./GlobalStyles";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import CashFlowPage from "./CashFlowPage";
import AddIncomePage from "./AddIncomePage";
import AddExpensePage from "./AddExpensePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}