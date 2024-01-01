let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);

});



// select the element
const counters = document.querySelectorAll('.counter1');


// iterate through all the counter elements
counters.forEach(counter1 => {
  // function to increment the counter
  function updateCount() {
    const target = +counter1.getAttribute('data-count');
    const count = +counter1.innerHTML;

    const inc = Math.floor((target - count) / 100);

    if (count < target && inc > 0) {
      counter1.innerHTML = (count + inc);
      // repeat the function
      setTimeout(updateCount, 100);
    }
    // if the count not equal to target, then add remaining count
    else {
      counter1.innerHTML = target;
    }
  }
  updateCount();
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}    
/*bot*/
var chatOpen = false;

var defaultMessages = [
    "I'm not sure how to respond to that. Please ask me something else.",
    "Hmm, I didn't quite catch that. Can you ask in a different way like Delivery,order etc.",
    "I'm Having Trouble Understanding It.Please Contact Us At 9953410116 For more Details or type something else."
];

var keywordResponses = {
    "name": "My name is MatBot.",
    "how are you": "I'm a computer program, so I don't have feelings, but I'm here to help you!",
    "what can you do": "I can provide information, answer questions, and assist you with various tasks.",
    "what are the products": "we Provide Pure Mustard oil that is available in Four different sizes that is 200ml,1L,2L,5L.",
    "what is your contact number": "Yes,you can contact us at 9953410116.For more contact information please click link:<a href='#contactus' class='link'>Contact</a>",
    "how to order": "To place the order You can Whatsapp Us or Call Using our Phone Number:9953410116",
    "what is the price": "To enquire about price of our products please connect to us through whatsapp or Call.For more contact Details Click:<a href='#contactus' class='link'>Contact</a>",
    "how will you Deliver the order": "After confirming the order we will connect to you through Whatsapp and update you about Delivery.",
    "what is the address of your store": "Our Address is H/1 Nahar Road Mumtaz Nagar Road Sanjarpur Azamgarh U.P",
};

function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    var chatButton = document.getElementById("chat-button");

    if (!chatOpen) {
        // Display welcome message when chat is opened for the first time
        appendMessage("ChatBot", "Welcome! My Name is Matbot.How can I assist you today?", "ai-avatar", "response");
    }

    if (chatOpen) {
        chatContainer.style.display = "none";
        chatButton.style.display = "flex";
    } else {
        chatContainer.style.display = "flex";
        chatButton.style.display = "none";
    }

    chatOpen = !chatOpen;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage("User", userInput, "user-avatar", "message");

    showTypingIndicator();

    setTimeout(function () {
        var response = generateResponse(userInput.toLowerCase());
        hideTypingIndicator();
        appendMessage("ChatBot", response, "ai-avatar", "response");
    }, 1000); // Simulating a delay of 1 second

    // Clear the user input field
    document.getElementById("user-input").value = "";
}

function generateResponse(userInput) {
    if (userInput.includes("name")) {
        return keywordResponses["name"];
    } else if (userInput.includes("how are you")) {
        return keywordResponses["how are you"];
    } else if (userInput.includes("what can you do")) {
        return keywordResponses["what can you do"];
    }else if (userInput.includes("products")) {
        return keywordResponses["what are the products"];
    }else if (userInput.includes("contact")) {
        return keywordResponses["what is your contact number"];
    }else if (userInput.includes("order")) {
        return keywordResponses["how to order"];
    }else if (userInput.includes("price")) {
        return keywordResponses["what is the price"];
    }else if (userInput.includes("delivery")) {
        return keywordResponses["how will you Deliver the order"];
    }else if (userInput.includes("address")) {
        return keywordResponses["what is the address of your store"];
    }else {
        return defaultMessages[Math.floor(Math.random() * defaultMessages.length)];;
    }
}

function showTypingIndicator() {
    var chatBox = document.getElementById("chat-box");
    var typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.innerHTML = "Typing...";
    chatBox.appendChild(typingIndicator);

    // Scroll to the bottom of the chat box to show the indicator
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
    var chatBox = document.getElementById("chat-box");
    var typingIndicator = chatBox.querySelector(".typing-indicator");
    if (typingIndicator) {
        chatBox.removeChild(typingIndicator);
    }
}

function selectPreviewQuestion(question) {
    document.getElementById("user-input").value = question;
}

function appendMessage(sender, message, avatarClass, messageType) {
    var chatBox = document.getElementById("chat-box");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message-container";

    var avatar = document.createElement("div");
    avatar.className = avatarClass;

    var messageElement = document.createElement("div");
    messageElement.innerHTML = message;
    messageElement.className = messageType;

    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageElement);
    chatBox.appendChild(messageContainer);

    // Scroll to the bottom of the chat box to show the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}





