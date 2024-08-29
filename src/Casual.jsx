import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../src/images/men/Vector.png";
import filter from "../src/images/casual/filter.png";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Cards3 from './test/Cards3'

function valuetext(value) {
    return `${value}°C`;
}

function ResponsiveDrawer() {
    const [priceRange, setPriceRange] = useState([50, 200]);
    const [showFilters, setShowFilters] = useState(false);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="app">
            <Container>
                <div className="shopGate d-flex mt-5">
                    <div className='gateImgs'>Home <img src={arrow} alt="arrow" /> </div>
                    <div className='gateTshirts'>Casual</div>
                </div>
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
                            <div className="filter">
                                <div className="filterTitle">
                                    <div className='theTitles'>Filters</div>
                                    <img src={filter} alt="filterIcon" />
                                </div>
                                <hr />

                                <div className="clothes">
                                    <div className='clotheTitle'>
                                        <div>T-shirts</div>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                    <div className='clotheTitle'>
                                        <div>Shorts</div>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                    <div className='clotheTitle'>
                                        <div>Shirts</div>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                    <div className='clotheTitle'>
                                        <div>Hoodie</div>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                    <div className='clotheTitle'>
                                        <div>Jeans</div>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>

                                <hr />


                                <div className="priceTitle">
                                    <div className='theTitles'>Price</div>
                                    <img src={arrow} alt="arrow" />

                                </div>
                                <Box sx={{ width: { xs: '100%', sm: 250 } }}>
                                    <Slider className='sliderRange'
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                        valueLabelDisplay="auto"
                                        getAriaLabel={() => 'Price range'}
                                        min={50}
                                        max={200}
                                        getAriaValueText={valuetext}
                                    />
                                </Box>

                                <div className='price'>
                                    <div>${priceRange[0]}</div>
                                    <div>${priceRange[1]}</div>

                                </div>
                            </div>

                            <hr />

                            <div className="filter">
                                <div className='theTitles'>Colors</div>
                                <div className="color-options">
                                    <label><input type="checkbox" style={{ backgroundColor: '#00C12B' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#F50606' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#F5DD06' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#F57906' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#06CAF5' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#063AF5' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#7D06F5' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#F506A4' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#FFFFFF' }} /> </label>
                                    <label><input type="checkbox" style={{ backgroundColor: '#000000' }} /> </label>
                                </div>
                            </div>

                            <hr />

                            <div className="filter">
                                <div className='theTitles'>Size</div>
                                <div className="size-options">
                                    <div className="sizeBtn">
                                        <button>XX-Small</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>X-Small</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>Small</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>Medium</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>Large</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>X-Large</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>XX-Large</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>3X-Large</button>
                                    </div>
                                    <div className="sizeBtn">
                                        <button>4X-Large</button>
                                    </div>
                                </div>
                            </div>


                            <hr />

                            <div className="priceTitle">
                                <div className='theTitles'>Dress Style</div>
                                <img src={arrow} alt="arrow" />

                            </div>

                            <div className="clothes">
                                <div className='clotheTitle'>
                                    <div>Casual</div>
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className='clotheTitle'>
                                    <div>Formal</div>
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className='clotheTitle'>
                                    <div>Party</div>
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <div className='clotheTitle'>
                                    <div>Gym</div>
                                    <img src={arrow} alt="arrow" />
                                </div>
                            </div>

                            <div className="applyBtn">
                                <button className='applyFilter'>Apply Filter</button>
                            </div>                        </aside>
                    </Col>

                    <Col md={9} className={`content ${showFilters ? "hide-content" : ""}`}>
                        <h2>Casual</h2>
                        < Cards3 />

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResponsiveDrawer;

// <div className="product-grid">
//     <div className="product-card">
//         <img src="" alt="product" />
//         <h2>Gradient Graphic T-shirt</h2>
//         <p>$145</p>
//         <p>3.5/5</p>
//     </div>
//     <div className="product-card">
//         <img src="" alt="product" />
//         <h3>Gradient Graphic T-shirt</h3>
//         <p>$145</p>
//         <p>3.5/5</p>
//     </div>
//     <div className="product-card">
//         <img src="" alt="product" />
//         <h3>Gradient Graphic T-shirt</h3>
//         <p>$145</p>
//         <p>3.5/5</p>
//     </div>
//     <div className="product-card">
//         <img src="" alt="product" />
//         <h3>Gradient Graphic T-shirt</h3>
//         <p>$145</p>
//         <p>3.5/5</p>
//     </div>
//     {/* Repeat product cards as needed */}
// </div>