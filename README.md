![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive React Payment Forms built with the latest Bootstrap 5. Credit card, PayPal, Stripe, eCommerce checkout, multi-step payment, donation form & more examples.

Check out [React Payment Forms Documentation](https://mdbootstrap.com/docs/react/extended/payment-forms) for detailed instructions & even more examples.

## Basic example
![React Payment Forms Basic example](https://user-images.githubusercontent.com/108793661/186144545-d666f0eb-7ebf-4629-a945-f48cb9f1344e.png)
```js
import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtnGroup,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Eligible</h4>
          <span className="ms-2 me-3">Pay</span>
        </div>
        <a href="#!">Cancel and return to the website</a>
      </div>
      <MDBRow>
        <MDBCol md="7" lg="7" xl="6" className="mb-4 mb-md-0">
          <h5 className="mb-0 text-success">$85.00</h5>
          <h5 className="mb-3">Diabites Pump &amp; Supplies</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row mt-1">
                <h6>Insurance Responsibility</h6>
                <h6 className="fw-bold text-success ms-1">$71.76</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Insurer card</span>
              </div>
            </div>
            <p>
              Insurance claim and all neccessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div
              className="p-2 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#eee" }}
            >
              <span>Aetna - Open Access</span>
              <span>Aetna - OAP</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row mt-1">
                <h6>Patient Balance</h6>
                <h6 className="fw-bold text-success ms-1">$13.24</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Payment card</span>
              </div>
            </div>
            <p>
              Insurance claim and all neccessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div class="d-flex flex-column mb-3">
              <MDBBtnGroup vertical aria-label="Vertical button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary btn-lg" for="option1">
                  <div className="d-flex justify-content-between">
                    <span>VISA </span>
                    <span>**** 5436</span>
                  </div>
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-outline-primary btn-lg" for="option2">
                  <div className="d-flex justify-content-between">
                    <span>MASTER CARD </span>
                    <span>**** 5038</span>
                  </div>
                </label>
              </MDBBtnGroup>
            </div>
            <MDBBtn color="success" size="lg" block>
              Proceed to payment
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="5" lg="4" xl="4" offsetLg="1" offsetXl="2">
          <div className="p-3" style={{ backgroundColor: "#eee" }}>
            <span className="fw-bold">Order Recap</span>
            <div className="d-flex justify-content-between mt-2">
              <span>contracted Price</span> <span>$186.86</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Amount Deductible</span> <span>$0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Coinsurance(0%)</span> <span>+ $0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Copayment </span> <span>+ 40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Total Deductible,
                <br />
                Coinsurance and copay
              </span>
              <span>$40.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Maximum out-of-pocket <br />
                on insurance policy
              </span>
              <span>$40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Insurance Responsibility </span> <span>$71.76</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Patient Balance </span> <span>$13.24</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Total </span> <span class="text-success">$85.00</span>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
```

## How to use?

1. Download MDB 5 - FREE REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples (click on the image to see a live demo)
### Ecommerce checkout page:
[![React Payment Forms #1](https://user-images.githubusercontent.com/108793661/186144771-ab3f161b-ca20-4fb8-b6f3-81092d539491.png)](https://mdbootstrap.com/docs/react/extended/payment-forms#section-2)

### Payment card / Donation form:
[![React Payment Forms #2](https://user-images.githubusercontent.com/108793661/186144944-6dce034b-0312-43a0-9eeb-3d13b83a5d4c.png)](https://mdbootstrap.com/docs/react/extended/payment-forms#section-3)

### Pricing plan with credit card payment details:
[![React Payment Forms #3](https://user-images.githubusercontent.com/108793661/186145119-86582e33-597c-4c00-a63c-bc443c829068.png)](https://mdbootstrap.com/docs/react/extended/payment-forms#section-4)

You can find other examples [here](https://mdbootstrap.com/docs/react/extended/payment-forms).

<hr />

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/invoice">React Invoice</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/news-feed">React News feed</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/offcanvas">React Offcanvas</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details">React Order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/page-transitions">React Page transitions</a></li>
  <li><a href="https://mdbootstrap.com/docs/react/extended/quotes">React Quotes</a></li>
</ul>
