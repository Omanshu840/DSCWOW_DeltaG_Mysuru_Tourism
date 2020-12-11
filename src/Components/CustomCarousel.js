import React, { useState} from 'react'
import { Carousel, Container } from 'react-bootstrap';

function CustomCorousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="padding even-section">
      <Container>
        <div className="section-title">
          <h1>Top Attractions</h1>
          <div className="underline"></div>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/jumboImg.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Mysore Palace</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/jumboImg.jpg')}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Somnathpur Temple</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/jumboImg.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Sri Chamundeshwari Temple</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default CustomCorousel;
