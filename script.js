window.addEventListener("DOMContentLoaded", () => {
  const allElements = document.querySelectorAll("*");

  allElements.forEach((el) => {
    const classes = [...el.classList];

    classes.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      applyChaiClass(el, cls);
      el.classList.remove(cls); // remove chai-* after applying
    });
  });
});

function applyChaiClass(el, cls) {
  const parts = cls.split("-");
  const type = parts[1];
  const value = parts[2];

  switch (type) {

    case "p":
      el.style.padding = value + "px";
      break;

    case "m":
      el.style.margin = value + "px";
      break;

    case "bg":
      el.style.backgroundColor = value;
      break;

    case "text":
      handleText(el, value);
      break;

    case "border":
      el.style.border = value + "px solid black";
      break;

    case "rounded":
      el.style.borderRadius = value + "px";
      break;

    case "flex":
      el.style.display = "flex";
      break;

    case "row":
      el.style.flexDirection = "row";
      break;

    case "col":
      el.style.flexDirection = "column";
      break;

    case "center":
      el.style.display = "flex";
      el.style.justifyContent = "center";
      el.style.alignItems = "center";
      break;
  }
}

function handleText(el, value) {
  if (!isNaN(value)) {
    el.style.fontSize = value + "px";
  } 
  else if (value === "center" || value === "left" || value === "right") {
    el.style.textAlign = value;
  } 
  else {
    el.style.color = value;
  }
}