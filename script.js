let messageIndex = 0;

const messages = [
  "Are you really sure? 🥺",
  "My heart is shaking 💓",
  "Please say yes 😭",
  "I promise I'll make you smile 💕",
  "One little yes? 🥰"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const sound = document.getElementById("clickSound");

  sound.play();

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = (currentSize * 1.25) + "px";
}

function handleYesClick() {
  window.location.href = "yes.html";
}
