export default function eventHandler() {
  document.body.addEventListener("click", handleClick);
}

function handleClick(e) {
  if (e.target.closest(".bt-menu")) {
    document.querySelector(".menu").classList.add("menu-isactive");
    document.querySelector("body").classList.add("menu-actived");
    return;
  }

  if (e.target.closest(".menu")) {
    document.querySelector(".menu").classList.remove("menu-isactive");
    document.querySelector("body").classList.remove("menu-actived");
    return;
  }
}
