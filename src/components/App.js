import { GlobalStyle } from "./GlobalStyles";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import CashFlowPage from "./CashFlowPage";
import AddIncomePage from "./AddIncomePage";
import AddExpensePage from "./AddExpensePage";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <AddExpensePage />
        </>
    );
}