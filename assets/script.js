/// call var///
let containerCounter = document.querySelector(".counter");
let containerControl = document.querySelector(".buttons");
let number = 0;

/// create dynamic  element////
let createElement = (tag, className, content) => {
  let newEl = document.createElement(tag);
  newEl.innerHTML = content;
  newEl.classList.add(className);
  newEl.setAttribute("id", className);
  return newEl;
};

containerCounter.appendChild(createElement("div", "counter", 0));
containerControl.appendChild(createElement("button", "plus", "+"));
containerControl.appendChild(createElement("button", "reset", "Reset"));
containerControl.appendChild(createElement("button", "minus", "-"));

/// event delegation///
const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  const target = event.target;
  if (target.className === "plus") {
    number += 1;
    counter.innerHTML = number;
  }
  if (target.className === "minus") {
    number -= 1;
    counter.innerHTML = number;
  }
  if (target.className === "reset") {
    number = 0;
    counter.innerHTML = number;
  }
});
