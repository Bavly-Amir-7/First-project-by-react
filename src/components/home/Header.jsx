import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import vector1 from "../../assets/images/payments/Vector.png"
import mainSec from "../../assets/images/imgs/main-sec.png"
import vector2 from "../../assets/images/imgs/Vector2.png"


export default function Header() {
  return (
    <div className='homeParent'>
      <div className="container">
        <Row className="align-items-center">
          <Col md={6} sm={12} className="main-section">
            <div className='main-title'>FIND CLOTHES THAT MATCHES YOUR STYLE</div>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button variant="dark" className="shopBtn">Shop Now</Button>

            <Row className="mt-4 followers text-center">
              <Col xs={6} md={4}>
                <div className="column-content plus">200+</div>
                <div className="column-content interBrands">International Brands</div>
              </Col>
              <Col xs={6} md={4} className="border-container">
                <div className="column-content plus">2,000+</div>
                <div className="column-content hqProducts">High-Quality Products</div>
              </Col>
              <Col xs={12} md={4}>
                <div className="column-content plus">30,000+</div>
                <div className="column-content customers">Happy Customers</div>
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12} className="images">
            <img src={vector1} className='vector1' alt="star" />
            <img src={mainSec} className="recImage w-100"/>
            <img src={vector2} className='vector2' alt="star" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
