import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Form() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#f9c9aa" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="9" lg="7" xl="5">
          <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-forms/img1.webp"
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-between mb-0">
                <p className="text-muted mb-0">Retro Chair</p>
                <p className="mb-0">$760</p>
              </MDBCardTitle>
            </MDBCardBody>
            <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
              <MDBCardBody>
                {" "}
                <p className="mb-4">Your payment details</p>
                <MDBInput
                  label="Card Number"
                  id="form1"
                  type="text"
                  placeholder="1234 5678 1234 5678"
                  wrapperClass="mb-3"
                />
                <MDBRow className="mb-3">
                  <MDBCol size="6">
                    <MDBInput
                      label="Expire"
                      id="form2"
                      type="password"
                      placeholder="MM/YYYY"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      label="CVV"
                      id="form3"
                      type="password"
                      placeholder="CVV"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn block color="info">
                  Order now
                </MDBBtn>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
