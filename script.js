
const heading = document.querySelector("#heading");
const textInput = document.querySelector("#textInput");
const updateBtn = document.querySelector("#updateBtn");
const colorBtn = document.querySelector("#colorBtn");
const resetBtn = document.querySelector("#resetBtn");
const counter = document.querySelector("#counter");

// Store the original heading
const originalText = heading.textContent;

// 1. Update heading
updateBtn.addEventListener("click", function () {
    const userText = textInput.value.trim();

    if (userText === "") {
        heading.textContent = "Please enter some text!";
        return;
    }

    heading.textContent = userText;
});

// 2. Change heading color
colorBtn.addEventListener("click", function () {
    if (heading.style.color === "red") {
        heading.style.color = "green";
    } else {
        heading.style.color = "red";
    }
});

// 3. Reset heading
resetBtn.addEventListener("click", function () {
    heading.textContent = originalText;
    heading.style.color = "";
    textInput.value = "";
    counter.textContent = "Characters: 0";
});

// 4. Count characters while typing
textInput.addEventListener("input", function () {
    counter.textContent = "Characters: " + textInput.value.length;
});
