import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import visa from "../../assets/images/payments/Visa.png"
import masterCard from "../../assets/images/payments/Mastercard.png"
import paybal from "../../assets/images/payments/Paypal.png"
import apple from "../../assets/images/payments/ Pay.png"
import gPay from "../../assets/images/payments/G Pay.png"
import shopTitle from "../../assets/images/imgs/SHOP.CO.png"


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
                                    <i className="fa-regular fa-envelope icon7"></i>
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
                                <img className='mb-4' src={shopTitle} alt="Site title" />

                                    <p className='pargh'>
                                        We have clothes that suits your style and <br /> which you’re proud to wear. From <br />women to men.
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

                                <MDBCol md="2" lg="2" xl="2" className=' mx-auto mb-4'>
                                    <h6 className='titles text-uppercase fw-bold mb-4'>Company</h6>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            About
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Features
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Works
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Career
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='titles text-uppercase fw-bold mb-4'>Help</h6>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Customer Support
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>

                                            Delivery Details



                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Terms & Conditions
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Privacy Policy
                                        </a>
                                    </p>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="2" className='mx-auto mb-4'>
                                    <h6 className='titles text-uppercase fw-bold mb-4'>FAQ</h6>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Account
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Manage Deliveries
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Payments
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='titles text-uppercase fw-bold mb-4'>Resources</h6>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Free eBooks
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            Development Tutorial
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
                                            How to - Blog
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='ankors'>
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
