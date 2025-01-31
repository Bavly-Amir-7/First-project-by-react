import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import right from "../../assets/images/imgs/ture.png";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsData = [
        { title: 'Sarah M.', text: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.' },
        { title: 'Alex K.', text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.' },
        { title: 'James L.', text: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.' },
        { title: 'Bavly', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Bavly2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Bavly3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    ];
    const totalCards = cardsData.length;
    const cardWidth = 350;
    const transitionDuration = 400;

    const goToNext = () => {
        const isMobile = window.innerWidth <= 768; 
        if (isMobile) {
            (totalCards - currentIndex) > 1 ? setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards) : setCurrentIndex(0);
        } else {
            (totalCards - currentIndex) > 3 ? setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards) : setCurrentIndex(0);
        }
    };

    const goToPrev = () => {
        const isMobile = window.innerWidth <= 768; 
        if (isMobile) {
            (currentIndex > 0) ? setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards) : setCurrentIndex(totalCards - 1);
        } else {
            (currentIndex > 0) ? setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards) : setCurrentIndex(totalCards - 3);
        }
    };

    return (
        <div className="carouselParent">
            <div className="container">
                <div className="carousel-container">
                    <div className="title-and-buttons">
                        <div className="happyCustomersTitle">OUR HAPPY CUSTOMERS</div>
                        <div className="button-container">
                            <button className="carousel-control prev" onClick={goToPrev}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button className="carousel-control next" onClick={goToNext}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <div
                            className="carousel"
                            style={{
                                transform: `translateX(-${currentIndex * cardWidth}px)`,
                                transition: `transform ${transitionDuration}ms ease-in-out`,
                            }}
                        >
                            {cardsData.map((card, index) => (
                                <Card key={index} className="custom-card1" style={{ width: `${cardWidth}px` }}>
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
                                            {card.title}
                                            <img src={right} alt="Icon" className="subtitle-icon" />
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {card.text}
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
