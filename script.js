const sheep = document.getElementById("sheep");
const knife = document.getElementById("knife");
const sheepSound = document.getElementById("sheepSound");

sheep.addEventListener("click", () => {
  sheepSound.currentTime = 0;
  sheepSound.play();

  const rect = sheep.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  sheep.style.display = "none";

  for (let i = 0; i < 80; i++) {
    const meat = document.createElement("div");
    meat.textContent = "🍖";
    meat.classList.add("meat");

    const offsetX = (Math.random() - 0.5) * 300;
    const offsetY = (Math.random() - 0.5) * 180;

    meat.style.left = `${centerX + offsetX}px`;
    meat.style.top = `${centerY + offsetY}px`;

    document.body.appendChild(meat);
  }

  setTimeout(() => {
    const message = document.createElement("div");
    message.textContent = "Bayramınız Mübarek Olsun!🎉";
    message.classList.add("bayram-mesaji");

    message.style.left = `${centerX}px`;
    message.style.top = `${centerY - 80}px`;

    document.body.appendChild(message);
  }, 500);
});

sheep.addEventListener("mouseenter", () => {
  knife.style.opacity = "1";
});

sheep.addEventListener("mouseleave", () => {
  knife.style.opacity = "0";
});

sheep.addEventListener("mousemove", (e) => {
  const offsetX = 20;
  const offsetY = -10;

  knife.style.left = e.clientX + offsetX + "px";
  knife.style.top = e.clientY + offsetY + "px";
});
