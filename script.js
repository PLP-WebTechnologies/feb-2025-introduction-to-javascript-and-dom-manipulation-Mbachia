// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("main-heading").textContent = "Text Changed with JavaScript!";
});

// Change CSS style
document.getElementById("change-style-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f8ff";
  document.getElementById("main-heading").style.color = "darkblue";
});

// Add a new element
document.getElementById("add-element-btn").addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.textContent = "New Element Added!";
  newElement.id = "new-div";
  newElement.style.padding = "10px";
  newElement.style.backgroundColor = "#d4edda";
  document.getElementById("element-container").appendChild(newElement);
});

// Remove the added element
document.getElementById("remove-element-btn").addEventListener("click", () => {
  const element = document.getElementById("new-div");
  if (element) {
    element.remove();
  }
});
