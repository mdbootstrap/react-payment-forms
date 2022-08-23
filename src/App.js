import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Ecommerce">
        <MDBBtn className="ms-3 mt-3">Ecommerce</MDBBtn>
      </Link>
      <Link to="/PaymentCard">
        <MDBBtn className="ms-3 mt-3">Payment Card</MDBBtn>
      </Link>
      <Link to="/Pricing">
        <MDBBtn className="ms-3 mt-3">Pricing</MDBBtn>
      </Link>
      <Link to="/CreditCard">
        <MDBBtn className="ms-3 mt-3">Credit Card</MDBBtn>
      </Link>
      <Link to="/CardTemplate">
        <MDBBtn className="ms-3 mt-3">Card Template</MDBBtn>
      </Link>
      <Link to="/Form">
        <MDBBtn className="ms-3 mt-3">Form</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
