document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const hoverDiv = document.getElementById("hoverDiv");

    // Keyboard event listener
    textInput.addEventListener("input", function () {
        console.log("Input value:", textInput.value);
    });

    // Mouse event listeners
    hoverDiv.addEventListener("mouseenter", function () {
        hoverDiv.style.backgroundColor = "red";
    });

    hoverDiv.addEventListener("mouseleave", function () {
        hoverDiv.style.backgroundColor = "lightgrey";
    });
});
