import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import Ecommerce from "./Ecommerce/Ecommerce";
import PaymentCard from "./PaymentCard/PaymentCard";
import Pricing from "./Pricing/Pricing";
import CreditCard from "./CreditCard/CreditCard";
import CardTemplate from "./CardTemplate/CardTemplate";
import Form from "./Form/Form";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/PaymentCard" element={<PaymentCard />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/CreditCard" element={<CreditCard />} />
        <Route path="/CardTemplate" element={<CardTemplate />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
