import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';


// const popover = (
//     <Popover id="popover-basic" className="chatbot">
//       <Popover.Content>
//         <iframe
//             className="chatbot"
//             title="chatbot"
//             allow="microphone;"
//             src="https://console.dialogflow.com/api-client/demo/embedded/72da83da-392a-4a0c-87e5-59c63b50eb80">
//         </iframe>
//       </Popover.Content>
//     </Popover>
// );
  

// function Chatbot(props) {
//     return (
//         <div>
//             <OverlayTrigger trigger="click" placement="left" overlay={popover}>
//                 <Button className="btn-chatbot" variant="success">Chat with Us</Button>
//             </OverlayTrigger>
//         </div>
//     );
// }

// function toggleChatbot() {
//     var chatbot;
//     chatbot = document.getElementById(".chatbot");
//     chatbot.style.display = "block";

//     if (isChatbotOpen === false) {
//         chatbot = document.getElementById("chatbot");
//         chatbot.style.display = "block";
//         isChatbotOpen = true;
//     }
//     else {
//         chatbot = document.getElementById("chatbot");
//         chatbot.style.display = "block";
//         isChatbotOpen = false;
//     }
// }

export default class Chatbot extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <iframe
                        style={{display: this.props.isChatbotOpen ? "block" : "none" }}
                        className="chatbot"
                        title="chatbot"
                        allow="microphone;"
                        src="https://console.dialogflow.com/api-client/demo/embedded/72da83da-392a-4a0c-87e5-59c63b50eb80">
                    </iframe>
                </div>
                <div>
                    <Button onClick={this.props.toggleChatbot} className="btn-chatbot" variant="success">Chat with Us</Button>
                </div>
            </div>
        );
    };
}

// function Chatbot(props) {
//     return (
//         <div>
//             <div className="chatbot">
//                 <iframe
//                     className="chatbot"
//                     title="chatbot"
//                     allow="microphone;"
//                     src="https://console.dialogflow.com/api-client/demo/embedded/72da83da-392a-4a0c-87e5-59c63b50eb80">
//                 </iframe>
//             </div>
//             <div>
//                 <Button onClick={toggleChatbot} className="btn-chatbot" variant="success">Chat with Us</Button>
//             </div>
//         </div>
//     )
// }

// export default Chatbot;