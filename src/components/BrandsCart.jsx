import React, { useState } from 'react';
import arrow from "../assets/images/men/Vector.png";
import { Container, Row, Col } from 'react-bootstrap';
import img1 from "../assets/images/cart/image 8.svg";
import img2 from "../assets/images/cart/image 9.svg";
import img3 from "../assets/images/cart/image 10.svg";

export default function Brands() {
    // مصفوفة لحفظ قيم العدادات لكل منتج
    const [counts, setCounts] = useState([0, 0, 0]);

    // مصفوفة لأسعار المنتجات
    const prices = [145, 180, 240];

    // دالة لزيادة العدد
    const increment = (index) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    // دالة لإنقاص العدد
    const decrement = (index) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = newCounts[index] > 0 ? newCounts[index] - 1 : 0;
            return newCounts;
        });
    };

    const resetCount = (index) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = 0;
            return newCounts;
        });
    };

    const subtotal = counts.reduce((sum, count, index) => sum + count * prices[index], 0);

    const discount = subtotal * 0.2;

    const deliveryFee = 15;

    const total = subtotal - discount + deliveryFee;

    return (
        <>
            <div className='shopPage'>
                <div className="container">
                    <div className="CartsGate d-flex mt-5">
                        <div className='gateImgs'>Home <img src={arrow} alt="arrow" /> </div>
                        <div className='gateCart'>Cart</div>
                    </div>

                    <h1>Your cart</h1>

                    <Row>
                        <Col md={6}>
                            <div className="cartParent">
                                <div className="cartChildes d-flex w-100">
                                    <div className="productImage">
                                        <div className="flex-shrink-0">
                                            <img src={img1} alt="productImageforClient" />
                                        </div>
                                    </div>
                                    <div className="productDetails1 w-100">
                                        <div className="cartTitle flex-grow-1 ms-3">
                                            <div className="productTitle">SKINNY FIT JEANS</div>
                                            <div className="clearBtn">
                                                <i
                                                    className="fa-solid fa-trash-can"
                                                    onClick={() => resetCount(0)}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="sizeAndColor flex-grow-1 ms-3">
                                            <div className="size">Size: <span>Large</span></div>
                                            <div className="color pt-2">Color: <span>White</span></div>
                                        </div>
                                        <div className="shopArea d-flex w-100">
                                            <div className="productPrice flex-grow ms-3">$145</div>
                                            <div className='shopAreaBtns d-flex align-items-center'>
                                                <div className='numBtn1 d-flex align-items-center'>
                                                    <button onClick={() => decrement(0)}>-</button>
                                                    <div>{counts[0]}</div>
                                                    <button onClick={() => increment(0)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="cartChildes d-flex w-100">
                                    <div className="productImage">
                                        <div className="flex-shrink-0">
                                            <img src={img2} alt="productImageforClient" />
                                        </div>
                                    </div>
                                    <div className="productDetails1 w-100">
                                        <div className="cartTitle flex-grow-1 ms-3">
                                            <div className="productTitle">SKINNY FIT JEANS</div>
                                            <div className="clearBtn">
                                                <i
                                                    className="fa-solid fa-trash-can"
                                                    onClick={() => resetCount(1)}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="sizeAndColor flex-grow-1 ms-3">
                                            <div className="size">Size: <span>Medium</span></div>
                                            <div className="color pt-2">Color: <span>Red</span></div>
                                        </div>
                                        <div className="shopArea d-flex w-100">
                                            <div className="productPrice flex-grow ms-3">$180</div>
                                            <div className='shopAreaBtns d-flex align-items-center'>
                                                <div className='numBtn1 d-flex align-items-center'>
                                                    <button onClick={() => decrement(1)}>-</button>
                                                    <div>{counts[1]}</div>
                                                    <button onClick={() => increment(1)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="cartChildes d-flex w-100">
                                    <div className="productImage">
                                        <div className="flex-shrink-0">
                                            <img src={img3} alt="productImageforClient" />
                                        </div>
                                    </div>
                                    <div className="productDetails1 w-100">
                                        <div className="cartTitle flex-grow-1 ms-3">
                                            <div className="productTitle">SKINNY FIT JEANS</div>
                                            <div className="clearBtn">
                                                <i
                                                    className="fa-solid fa-trash-can"
                                                    onClick={() => resetCount(2)}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="sizeAndColor flex-grow-1 ms-3">
                                            <div className="size">Size: <span>Large</span></div>
                                            <div className="color pt-2">Color: <span>Blue</span></div>
                                        </div>
                                        <div className="shopArea d-flex w-100">
                                            <div className="productPrice flex-grow ms-3">$240</div>
                                            <div className='shopAreaBtns d-flex align-items-center'>
                                                <div className='numBtn1 d-flex align-items-center'>
                                                    <button onClick={() => decrement(2)}>-</button>
                                                    <div>{counts[2]}</div>
                                                    <button onClick={() => increment(2)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="orderCart ms-3">
                                <div className="orderTitle">Order Summary</div>

                                <div className="payList">
                                    <div className="subtotalArea">
                                        <div className="subtotal">Subtotal</div>
                                        <div className="subtotalPrice">${subtotal.toFixed(2)}</div>
                                    </div>

                                    <div className="discountArea">
                                        <div className="discount">Discount (-20%)</div>
                                        <div className="discountPrice">-${discount.toFixed(2)}</div>
                                    </div>

                                    <div className="deliveryArea">
                                        <div className="delivery">Delivery Fee</div>
                                        <div className="deliveryPrice">${deliveryFee}</div>
                                    </div>
                                    <hr />
                                    <div className="totalArea">
                                        <div className="total">Total</div>
                                        <div className="totalPrice">${total.toFixed(2)}</div>
                                    </div>

                                    <div className="promoArea">
                                        <div className="inputWrapper2">
                                            <i className="fa-solid fa-tag icon77"></i>
                                            <input type="text" placeholder="Add promo code" className="textInput7" />
                                        </div>

                                        <div className="applyBtn">
                                            <button>Apply</button>
                                        </div>
                                    </div>

                                    <div className="checkBtn">
                                        <button>Go to check out <span className='arrow'>➔</span></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
