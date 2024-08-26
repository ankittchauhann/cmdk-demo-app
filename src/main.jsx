import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { VercelCMDK } from "./vercel";
import "./index.css";
import "./styles/cmdk/vercel.scss";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <VercelCMDK /> */}
  </StrictMode>
);
