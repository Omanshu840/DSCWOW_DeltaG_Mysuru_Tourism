var isChatbotOpen = false;
var chatbot;

function toggleChatbot() {
    if (isChatbotOpen === false) {
        chatbot = document.getElementById("chatbot");
        chatbot.style.display = "block";
        isChatbotOpen = true;
    }
    else {
        chatbot = document.getElementById("chatbot");
        chatbot.style.display = "block";
        isChatbotOpen = false;
    }
}