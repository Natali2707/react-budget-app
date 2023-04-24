import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./UI/GlobalStyles";
import { CurrencyContextProvider, ExpensesContextProvider } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ExpensesContextProvider>
    <CurrencyContextProvider>
      <GlobalStyles />
      <App />
    </CurrencyContextProvider>
  </ExpensesContextProvider>
);


