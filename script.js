const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const containerForBoth = document.querySelector(".container");

// Event Listeners
leftSide.addEventListener("mouseenter", () =>
  containerForBoth.classList.add("hover-left")
);
leftSide.addEventListener("mouseleave", () =>
  containerForBoth.classList.remove("hover-left")
);

rightSide.addEventListener("mouseenter", () =>
  containerForBoth.classList.add("hover-right")
);
rightSide.addEventListener("mouseleave", () =>
  containerForBoth.classList.remove("hover-right")
);
