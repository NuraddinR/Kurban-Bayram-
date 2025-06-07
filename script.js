const sheep = document.getElementById("sheep");
const knife = document.getElementById("knife");
const sheepSound = document.getElementById("sheepSound");

function explodeSheep(x, y) {
  sheepSound.currentTime = 0;
  sheepSound.play();

  sheep.style.display = "none";

  for (let i = 0; i < 80; i++) {
    const meat = document.createElement("div");
    meat.textContent = "🍖";
    meat.classList.add("meat");

    const offsetX = (Math.random() - 0.5) * window.innerWidth * 0.5;
    const offsetY = (Math.random() - 0.5) * window.innerHeight * 0.4;

    meat.style.left = `${x + offsetX}px`;
    meat.style.top = `${y + offsetY}px`;

    document.body.appendChild(meat);
  }

  setTimeout(() => {
    const message = document.createElement("div");
    message.textContent = "Bayramınız Mübarek Olsun!🎉";
    message.classList.add("bayram-mesaji");

    message.style.left = `${window.innerWidth / 2}px`;
    message.style.top = `10vh`;

    document.body.appendChild(message);
  }, 500);
}

// Mouse click
sheep.addEventListener("click", () => {
  const rect = sheep.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  explodeSheep(centerX, centerY);
});

// Mobile tap
sheep.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  explodeSheep(touch.clientX, touch.clientY);
});

// Knife tracking (desktop only)
if (window.innerWidth > 480) {
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
}
