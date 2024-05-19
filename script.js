let noClickCount = 0;
const messages = [
    "I don't think so ;)",
    "Stop lying ;)",
    "You naughty naughty :P"
];

document.getElementById("yes-button").addEventListener("click", function() {
    document.body.innerHTML = '';  // Clear all content
    const messageElement = document.createElement("p");
    messageElement.innerText = "Happyy Birthdayyy yaa a7laaa Minyarrrr!!!";
    messageElement.classList.add("birthday-message");
    document.body.appendChild(messageElement);
});

document.getElementById("no-button").addEventListener("click", function() {
    const messageElement = document.getElementById("message");
    messageElement.classList.remove("birthday-message");
    messageElement.classList.add("message-no");
    messageElement.innerText = messages[noClickCount % messages.length];
    noClickCount++;
});