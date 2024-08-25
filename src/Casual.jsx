import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResponsiveDrawer() {
    const [price, setPrice] = useState(125);
    const [showFilters, setShowFilters] = useState(false);

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="app">
            <Container>
                <Button 
                    className="filter-toggle-btn showBtn" 
                    onClick={toggleFilters}
                >
                    {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                <Row>
                    <Col md={3} className={`drawer-container ${showFilters ? "show-filters" : ""}`}>
                        <aside className={`drawer ${showFilters ? "visible" : ""}`}>
                            <Button className="filter-toggle-btn hideBtn" onClick={toggleFilters}>
                                {showFilters ? "Hide Filters" : "Show Filters"}
                            </Button>
                            <h2>Filters</h2>
                            <hr />
                            <div className="filter">
                                <h3>Price</h3>
                                <input
                                    type="range"
                                    min="50"
                                    max="200"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                                <p>Selected Price: <span>${price}</span></p>
                            </div>
                            <div className="filter">
                                <h3>Colors</h3>
                                <div className="color-options">
                                    <label><input type="checkbox" style={{ backgroundColor: 'red' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: 'green' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: 'blue' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: 'yellow' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: 'orange' }} /> </label>
                                </div>
                            </div>
                            <div className="filter">
                                <h3>Size</h3>
                                <div className="size-options">
                                    <label><input type="checkbox" /> Small</label>
                                    <label><input type="checkbox" /> Medium</label>
                                    <label><input type="checkbox" /> Large</label>
                                    <label><input type="checkbox" /> X-Large</label>
                                </div>
                            </div>
                            <div className="filter">
                                <h3>Dress Style</h3>
                                <div className="style-options">
                                    <label><input type="checkbox" /> Casual</label>
                                    <label><input type="checkbox" /> Formal</label>
                                    <label><input type="checkbox" /> Party</label>
                                    <label><input type="checkbox" /> Gym</label>
                                </div>
                            </div>
                            <Button className="filter-btn">Apply Filter</Button>
                        </aside>
                    </Col>

                    <Col md={9} className={`content ${showFilters ? "hide-content" : ""}`}>
                        <h2>Casual</h2>
                        <div className="product-grid">
                            <div className="product-card">
                                <img src="" alt="product" />
                                <h3>Gradient Graphic T-shirt</h3>
                                <p>$145</p>
                                <p>3.5/5</p>
                            </div>
                            <div className="product-card">
                                <img src="" alt="product" />
                                <h3>Gradient Graphic T-shirt</h3>
                                <p>$145</p>
                                <p>3.5/5</p>
                            </div>
                            <div className="product-card">
                                <img src="" alt="product" />
                                <h3>Gradient Graphic T-shirt</h3>
                                <p>$145</p>
                                <p>3.5/5</p>
                            </div>
                            <div className="product-card">
                                <img src="" alt="product" />
                                <h3>Gradient Graphic T-shirt</h3>
                                <p>$145</p>
                                <p>3.5/5</p>
                            </div>
                            {/* Repeat product cards as needed */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResponsiveDrawer;
