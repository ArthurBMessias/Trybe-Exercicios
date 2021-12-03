import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SetTimeEx from "./SetTimeEx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <SetTimeEx />
  </StrictMode>,
  rootElement
);
