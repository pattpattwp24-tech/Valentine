setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = "24px";
  heart.style.animation = "float 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { bottom: 0; opacity: 1; }
  to { bottom: 100vh; opacity: 0; }
}`;
document.head.appendChild(style);
