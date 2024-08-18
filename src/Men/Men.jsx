import React, { useState } from 'react';
import arrow from "../images/men/Vector.png";
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import t1 from "../images/men/image 2.png";
import t2 from "../images/men/image 5.png";
import t3 from "../images/men/image 6.png";
import right from "../images/ture.png"

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

                  <div className="stars d-flex align-items-center">
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

                  <div className='shopBtns d-flex align-items-center'>
                    <div className='numBtn d-flex align-items-center'>
                      <button onClick={decrement}>-</button>
                      <div>{count}</div>
                      <button onClick={increment}>+</button>
                    </div>

                    <button className='addCart ms-3'>Add to Cart</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className='details d-flex w-100 text-center'>
            <div className='productDetails'>Product Details</div>
            <div className='rate'>Rating & Reviews</div>
            <div className='productDetails'>FAQs</div>
          </div>

          <div className='reviews w-100 d-flex'>
            <div className='allReviews'>All Reviews <span>(451)</span></div>


            <div className='settings d-flex'>

              <div className='slider'>
                <i className="fa-solid fa-sliders"></i>
              </div>

              <div className='latest d-flex'>Latest <i class="fa-solid fa-chevron-down"></i></div>

              <div className='write'>
                <button>Write a Review</button>
              </div>

            </div>
          </div>





          {/* ******** cards ********** */}


          <div className="cardsParent">
            <Row>
              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half"></i>

                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>


                  <div className="d-flex align-items-center">
                    <strong>Samantha D.                <img src={right} alt="Icon" className="subtitle-icon" />
                    </strong>
                  </div>
                  <p>""I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                  <small>Posted on August 14, 2023</small>
                </div>
              </Col>

              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <strong>Alex M.    <img src={right} alt="Icon" className="subtitle-icon" /></strong>
                  </div>
                  <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                  <small>Posted on August 15, 2023</small>
                </div>
              </Col>

              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <strong>Ethan R.    <img src={right} alt="Icon" className="subtitle-icon" /></strong>
                  </div>
                  <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                  <small>Posted on August 16, 2023</small>
                </div>
              </Col>

              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <strong>John K.    <img src={right} alt="Icon" className="subtitle-icon" /></strong>
                  </div>
                  <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                  <small>Posted on August 17, 2023</small>
                </div>
              </Col>

              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <strong>Emma L.    <img src={right} alt="Icon" className="subtitle-icon" /></strong>
                  </div>
                  <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                  <small>Posted on August 18, 2023</small>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="card p-3 mb-4">
                  <div className="starsArea d-flex w-100">

                    <div className=' d-flex'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <strong>Ava H.    <img src={right} alt="Icon" className="subtitle-icon" /></strong>
                  </div>
                  <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                  <small>Posted on August 18, 2023</small>
                </div>
              </Col>


            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
