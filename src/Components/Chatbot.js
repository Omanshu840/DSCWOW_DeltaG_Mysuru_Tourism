import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';


const popover = (
    <Popover id="popover-basic" className="chatbot">
      <Popover.Content>
        <iframe
            className="chatbot"
            title="chatbot"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/72da83da-392a-4a0c-87e5-59c63b50eb80">
        </iframe>
      </Popover.Content>
    </Popover>
);
  

function Chatbot(props) {
    return (
        <div>
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button className="btn-chatbot" variant="success">Click me to see</Button>
            </OverlayTrigger>
        </div>
    );
}

export default Chatbot;