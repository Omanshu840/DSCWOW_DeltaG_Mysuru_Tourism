import React, { useState } from 'react'
import {Alert, Container} from 'react-bootstrap'

function CovidAlert() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Container>
                <h4><strong>COVID-19 (Coronavirus) Update</strong></h4>
                <p>
                    To slow the spread of COVID-19, the Indian Government has put in place temporary border restrictions which prevent most travellers from entering India.
                </p>
          </Container>
        </Alert>
      );
    }
    return <div></div>;
  }
  
export default CovidAlert;