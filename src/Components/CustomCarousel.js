import React, { useState} from 'react'
import { Button, Carousel, Container } from 'react-bootstrap';
import tourist_spots from '../Constants/tourist_spots';
import Fade from 'react-reveal/Fade';

function CustomCorousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="padding even-section">
      <Container>
        <Fade top>
          <div className="section-title">
            <h1>Top Attractions</h1>
            <div className="underline"></div>
          </div>
        </Fade>
        <Fade top>
          <Carousel activeIndex={index} onSelect={handleSelect}>
              {tourist_spots.map((item, index) => {
                  return(
                      <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={item.img_Link}
                          alt="First slide"
                          />
                          <Carousel.Caption>
                          <h1>{item.name}</h1>
                          </Carousel.Caption>
                      </Carousel.Item>
                  )
              })}
          </Carousel>
        </Fade>
        <Button href="/tourist-spots" variant="primary">See More Tourist Spots</Button>
      </Container>
    </div>
  );
}

export default CustomCorousel;
