//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square, index) => {
  square.addEventListener("mouseover", () => {
    squares.forEach((otherSquare, i) => {
      if (i !== index) {
        otherSquare.style.backgroundColor = "#6F4E37"; // Coffee
      } else {
        otherSquare.style.backgroundColor = "#E6E6FA"; // Lavender (stay the same)
      }
    });
  });

  square.addEventListener("mouseout", () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = "#E6E6FA"; // Reset all to Lavender
    });
  });
});
