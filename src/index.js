//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App options={["a", "b", "c", "d"]} />, rootElement);
