import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import right from "../images/ture.png"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const totalCards = 4;
    const cardWidth = 400;
    const transitionDuration = 500;

    const subtitles = ['Sarah M.', 'Alex K.', 'James L.', 'Bavly'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, transitionDuration);
        return () => clearTimeout(timer);
    }, [isTransitioning]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setCurrentIndex(totalCards);
        }
        if (currentIndex === totalCards + 1) {
            setCurrentIndex(1);
        }
    };

    return (
        <div className="carouselParent">


            <div className="container">
                <div className="carousel-container">
                    <div className="title-and-buttons">
                        <div className="happyCustomersTitle">OUR HAPPY CUSTOMERS</div>
                        <div className="button-container">
                            <button
                                className="carousel-control prev"
                                onClick={handlePrev}
                                disabled={isTransitioning}
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button
                                className="carousel-control next"
                                onClick={handleNext}
                                disabled={isTransitioning}
                            >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <div
                            className="carousel"
                            style={{
                                transform: `translateX(-${(currentIndex + 1) * cardWidth}px)`,
                                transition: `transform ${transitionDuration}ms`,
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {[...Array(totalCards).keys()].map((index) => (
                                <Card key={`left-${index}`} className="custom-card1" style={{ width: `${cardWidth}px` }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="card-title-container">
                                                <div className="stars">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <i key={starIndex} className="fa-solid fa-star"></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted nameTitle">
                                            {subtitles[index % subtitles.length]}
                                            <img src={right} alt="Icon" className="subtitle-icon" />
                                        </Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            ))}
                            {[...Array(totalCards).keys()].map((index) => (
                                <Card key={`right-${index}`} className="custom-card1" style={{ width: `${cardWidth}px` }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="card-title-container">
                                                <div className="stars">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <i key={starIndex} className="fa-solid fa-star"></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {subtitles[index % subtitles.length]}
                                            <img src={right} alt="Icon" className="subtitle-icon" />
                                        </Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
