import React from 'react'
import arrow from "../assets/images/men/Vector.png";

import { Container, Row, Col } from 'react-bootstrap';
import img1 from "../assets/images/cart/image 8.svg"
import img2 from "../assets/images/cart/image 9.svg"
import img3 from "../assets/images/cart/image 10.svg"
export default function Brands() {
    return (
        <>
            <div>
                <div className="container">

                    <div className="CartsGate d-flex mt-5">
                        <div className='gateImgs'>Home <img src={arrow} alt="arrow" /> </div>
                        <div className='gateCart'>Cart</div>

                    </div>

                    <h1>Your cart</h1>


                    <Row>
                        <Col md={6} >

                            <div className="cartParent">
                                <div className="d-flex cartChildes">
                                    <div className="flex-shrink-0">
                                        <img src={img1} alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>

                                <hr />

                                <div className="d-flex cartChildes">
                                    <div className="flex-shrink-0">
                                        <img src={img2} alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>

                                <hr />

                                <div className="d-flex cartChildes">
                                    <div className="flex-shrink-0">
                                        <img src={img3} alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} >

                        </Col>
                    </Row>

                </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
