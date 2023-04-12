import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ExpensesContextProvider } from "./context/Expenses/Expenses";
import { GlobalStyles } from "./UI/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ExpensesContextProvider>
    <GlobalStyles/>
    <App />
  </ExpensesContextProvider>
);


