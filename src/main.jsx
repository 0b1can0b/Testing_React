import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
