// Handle heading text change
document.getElementById("change-text-btn").addEventListener("click", () => {
  const heading = document.getElementById("main-heading");
  heading.textContent = "Welcome to Interactive JavaScript!";
});

// Change the page style dynamically
document.getElementById("change-style-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f4f9ff";
  document.body.style.color = "#222";
  document.getElementById("main-heading").style.color = "#004080";
});

// Add a new message element
document.getElementById("add-element-btn").addEventListener("click", () => {
  const container = document.getElementById("element-container");
  if (!document.getElementById("new-message")) {
    const message = document.createElement("div");
    message.id = "new-message";
    message.textContent = "This message was added dynamically using JavaScript.";
    container.appendChild(message);
  }
});

// Remove the message element if it exists
document.getElementById("remove-element-btn").addEventListener("click", () => {
  const message = document.getElementById("new-message");
  if (message) {
    message.remove();
  }
});
