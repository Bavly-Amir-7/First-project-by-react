import React, { useState } from 'react';
import arrow from "../images/men/Vector.png";
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import t1 from "../images/men/image 2.png";
import t2 from "../images/men/image 5.png";
import t3 from "../images/men/image 6.png";

export default function Men() {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(t1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="men">
        <div className="container">
          <hr />
          <div className="shopGate d-flex">
            <div className='gateImgs'>Home <img src={arrow} alt="arrow" /> </div>
            <div className='gateImgs'>Shop <img src={arrow} alt="arrow" /> </div>
            <div className='gateImgs'>Men <img src={arrow} alt="arrow" /> </div>
            <div className='gateTshirts'>T-shirts</div>
          </div>

          <div className='menParent'>
            <div className="container">
              <Row className="left-section">
                <Col md={6} sm={12} className="menimages d-flex">
                  <div className="t-shapes">
                    <div className={`t-styles ${selectedImage === t1 ? 'selected' : ''}`} onClick={() => handleImageClick(t1)}>
                      <img src={t1} alt="front-tshirt" />
                    </div>
                    <div className={`middleTshirt t-styles ${selectedImage === t2 ? 'selected' : ''}`} onClick={() => handleImageClick(t2)}>
                      <img src={t2} alt="back-tshirt" />
                    </div>
                    <div className={`t-styles ${selectedImage === t3 ? 'selected' : ''}`} onClick={() => handleImageClick(t3)}>
                      <img src={t3} alt="boy-tshirt" />
                    </div>
                  </div>

                  <div className='selectedImage'>
                    <img src={selectedImage} className='s-image' alt="selected-tshirt" />
                  </div>
                </Col>

                <Col md={6} sm={12} className="right-section">
                  <div className='the-title'>One Life Graphic T-shirt</div>

                  <div className="stars d-flex">
                    <div><i className="fa-solid fa-star"></i></div>
                    <div><i className="fa-solid fa-star"></i></div>
                    <div><i className="fa-solid fa-star"></i></div>
                    <div><i className="fa-solid fa-star"></i></div>
                    <div><i className="fa-solid fa-star-half"></i></div>

                    <div className='theRate'>4.5/<span>5</span></div>
                  </div>

                  <div className="price d-flex">
                    <div className="discount">$260</div>
                    <del className="original">$300</del>
                    <div className="percentage">
                      <div className="discountPercentage">-40%</div>
                    </div>
                  </div>

                  <div>
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br /> breathable fabric, it offers superior comfort and style.</p>
                  </div>
                  <hr />

                  <div>Select Colors</div>
                  <div className="colors d-flex">
                    <div className='brown'><i className="fa-solid fa-check"></i></div>
                    <div className="green"></div>
                    <div className="gunmetalBlue"></div>
                  </div>

                  <hr />

                  <div>Choose Size</div>
                  <div className="sizeBtns">
                    <button className="smallBtn">Small</button>
                    <button className="mediumBtn">Medium</button>
                    <button className="largeBtn">Large</button>
                    <button className="x-largeBtn">X-Large</button>
                  </div>

                  <hr />

                  <div className='shopBtns d-flex'>

                    <div className=' numBtn d-flex'>
                      <button onClick={decrement}>-</button>
                      <div>{count}</div>
                      <button onClick={increment}>+</button>
                    </div>


                    <button className='addCart'>Add to Cart</button>


                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br />


        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
