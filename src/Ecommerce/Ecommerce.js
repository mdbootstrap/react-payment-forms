import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Ecommerce() {
  return (
    <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
      <MDBCard>
        <MDBCardBody>
          <MDBRow className="d-flex justify-content-center pb-5">
            <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
              <div className="py-4 d-flex flex-row">
                <h5>
                  <span className="far fa-check-square pe-2"></span>
                  <b>ELIGIBLE</b> |
                </h5>
                <span className="ps-2">Pay</span>
              </div>
              <h4 className="text-success">$85.00</h4>
              <h4>Diabetes Pump &amp; Supplies</h4>
              <div className="d-flex pt-2">
                <div>
                  <p>
                    <b>
                      Insurance Responsibility{" "}
                      <span className="text-success">$71.76</span>
                    </b>
                  </p>
                </div>
                <div className="ms-auto">
                  <p className="text-primary">
                    <MDBIcon
                      fas
                      icon="plus-circle"
                      className="text-primary pe-1"
                    />
                    Add insurance card
                  </p>
                </div>
              </div>
              <p>
                Insurance claims and all necessary dependencies will be
                submitted to your insurer for the coverred portion of this order
              </p>
              <div
                className="rounded d-flex"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="p-2">Aetna-Open Access</div>
                <div className="ms-auto p-2">OAP</div>
              </div>
              <hr />
              <div className="pt-2">
                <div className="d-flex pb-2">
                  <div>
                    <p>
                      <b>
                        Patient Balance{" "}
                        <span className="text-success">$13.24</span>
                      </b>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <p className="text-primary">
                      <MDBIcon
                        fas
                        icon="plus-circle"
                        className="text-primary pe-1"
                      />
                      Add payment card
                    </p>
                  </div>
                </div>
                <p>
                  This is an estimate for the portion of your order (not covered
                  by insurance) due today . once insurance finalizes their
                  review refunds and/or balances will reconcile automatically.
                </p>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-visa"
                        size="lg"
                        className="text-primary pe-2"
                      />{" "}
                      Visa Debit Card
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-mastercard"
                        size="lg"
                        className="text-dark pe-2"
                      />{" "}
                      Mastercard Office
                    </p>
                    <div className="ms-auto">************1038</div>
                  </div>
                </div>
                <MDBBtn block size="lg">
                  Proceed to payment
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="5" xl="4" offsetXl="1">
              {" "}
              <div className="py-4 d-flex justify-content-end">
                <h6>
                  <a href="#!">Cancel and return to website</a>
                </h6>
              </div>
              <div
                className="rounded d-flex flex-column p-2"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="p-2 me-3">
                  <h4>Order Recap</h4>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Contracted Price</MDBCol>
                  <div className="ms-auto">$186.76</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Amount toward deductible</MDBCol>
                  <div className="ms-auto">$0.00</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Coinsurance(0%)</MDBCol>
                  <div className="ms-auto">+ $0.00</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Copayment</MDBCol>
                  <div className="ms-auto">+ $40.00</div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <MDBCol size="8">
                    Total Deductible, Coinsurance, and Copay
                  </MDBCol>
                  <div className="ms-auto">$40.00</div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">
                    Maximum out-of-pocket on Insurance Policy (not reached)
                  </MDBCol>
                  <div className="ms-auto">$6500.00</div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <MDBCol size="8">Insurance Responsibility</MDBCol>
                  <div className="ms-auto">
                    <b>$71.76</b>
                  </div>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">
                    Patient Balance{" "}
                    <span className="fa fa-question-circle text-dark"></span>
                  </MDBCol>
                  <div className="ms-auto">
                    <b>$71.76</b>
                  </div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <MDBCol size="8">
                    <b>Total</b>
                  </MDBCol>
                  <div className="ms-auto">
                    <b className="text-success">$85.00</b>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
