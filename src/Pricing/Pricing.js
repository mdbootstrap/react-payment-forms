import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Pricing() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="10" xl="8">
          <MDBCard>
            <MDBCardBody className="p-md-5">
              <div>
                <h4>Upgrade your plan</h4>
                <p className="text-muted pb-2">
                  Please make the payment to start enjoying all the features of
                  our premium plan as soon as possible
                </p>
              </div>
              <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/S17BrTx.webp"
                    className="rounded"
                    width="60"
                  />
                  <div className="d-flex flex-column ms-4">
                    <span className="h5 mb-1">Small Business</span>
                    <span className="small text-muted">CHANGE PLAN</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <sup className="dollar font-weight-bold text-muted">$</sup>
                  <span className="h2 mx-1 mb-0">8,350</span>
                  <span className="text-muted font-weight-bold mt-2">
                    / year
                  </span>
                </div>
              </div>
              <h4 className="mt-5">Payment details</h4>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/qHX7vY1.webp"
                    className="rounded"
                    width="70"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Credit Card</span>
                    <span className="small text-muted">
                      1234 XXXX XXXX 2570
                    </span>
                  </div>
                </div>
                <MDBInput
                  label="CVC"
                  id="form1"
                  type="text"
                  style={{ width: "70px" }}
                />
              </div>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/qHX7vY1.webp"
                    className="rounded"
                    width="70"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Credit Card</span>
                    <span className="small text-muted">
                      2344 XXXX XXXX 8880
                    </span>
                  </div>
                </div>
                <MDBInput
                  label="CVC"
                  id="form2"
                  type="text"
                  style={{ width: "70px" }}
                />
              </div>
              <h6 className="mt-4 mb-3 text-primary text-uppercase">
                ADD PAYMENT METHOD
              </h6>
              <MDBInput
                label="Email address"
                id="form3"
                size="lg"
                type="email"
              />
              <MDBBtn block size="lg" className="mt-3">
                {" "}
                Proceed to payment <MDBIcon fas icon="long-arrow-alt-right" />
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
