import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import visa from "../src/images/payments/Visa.png"
import masterCard from "../src/images/payments/Mastercard.png"
import paybal from "../src/images/payments/Paypal.png"
import apple from "../src/images/payments/ Pay.png"
import gPay from "../src/images/payments/G Pay.png"

export default function Footer() {
    return (

        <>

            <MDBFooter className='text-center text-lg-start text-muted footerParent'>

                <div className="container">
                    <form className="flex max-w-md flex-col gap-4 footerForm">

                        <div className=' w-100 formsInputs'>
                            <div className="formTitle">
                                STAY UPTO DATE ABOUT OUR LATEST OFFERS
                            </div>
                            <br />
                            <div className="formSubmit d-grid">
                                <div className="inputWrapper">
                                    <i className="fa-regular fa-envelope icon"></i>
                                    <input type="text" placeholder="Enter your email address" className="textInput" />
                                </div>
                                <button className="submitBtn">Subscribe to Newsletter</button>
                            </div>

                        </div>
                    </form>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        SHOP.CO
                                    </h6>
                                    <p>
                                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                                    </p>
                                    <div>
                                        <a href='' className='me-4 text-reset'>
                                            <MDBIcon fab icon="twitter" />
                                        </a>
                                        <a href='' className='me-4 text-reset'>
                                            <MDBIcon fab icon="facebook-f" />
                                        </a>

                                        <a href='' className='me-4 text-reset'>
                                            <MDBIcon fab icon="instagram" />
                                        </a>

                                        <a href='' className='me-4 text-reset'>
                                            <MDBIcon fab icon="github" />
                                        </a>
                                    </div>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            About
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Features
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Works
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Career
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Help</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Customer Support
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>

                                            Delivery Details



                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Terms & Conditions
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Privacy Policy
                                        </a>
                                    </p>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>FAQ</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Account
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Manage Deliveries
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Payments
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Free eBooks
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Development Tutorial
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            How to - Blog
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Youtube Playlist
                                        </a>
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                    <hr />

                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Shop.co © 2000-2023, All Rights Reserved</span>
                        </div>

                        <div className='paymentIcons '>

                            <div className='payment'>
                                <a href='#' className=' text-reset'>
                                    <img src={visa} alt="payments" />
                                </a>
                            </div>

                            <div className='payment'>
                                <a href='#' className=' text-reset '>
                                    <img src={masterCard} alt="payments" />
                                </a>
                            </div>
                            <div className='payment'>
                                <a href='#' className=' text-reset '>
                                    <img src={paybal} alt="payments" />
                                </a>
                            </div>
                            <div className='payment'>
                                <a href='#' className=' text-reset '>
                                    <img src={apple} alt="payments" />
                                </a>
                            </div>
                            <div className='payment'>
                                <a href='#' className=' text-reset '>
                                    <img src={gPay} alt="payments" />
                                </a>


                            </div>
                        </div>
                    </section>
                </div >
            </MDBFooter >
        </>
    )
}
