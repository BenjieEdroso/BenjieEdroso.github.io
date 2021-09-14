import Animations from "./animations/animation.js";
import { loadMore } from "../js/loading/loadMore.js";
import { sendHttpRequest } from "./ajax/ajax.js";

var anim1 = new Animations(
  ".latest__title",
  ".latest__view",
  ".latest__workItem",
  ".footer__link",
  ".footer__link--img"
);

anim1.animateWorks();
loadMore();
if (location == "https://benjieedroso.tech/works.html") {
  let work = document.querySelector(".works__workItem--b1H");
  work.addEventListener("click", (e) => {
    location = "works_single.html";
  });
}
if (location == "https://benjieedroso.tech/works_single.html") {
  window.addEventListener("scroll", () => {
    let myel = document.querySelector(".worksSingle__overviewCont");

    if (window.scrollY >= myel.offsetTop) {
      myel.classList.add("fixed");
    }

    console.log(window.scrollY, myel.offsetTop, myel);
  });
}

console.log("Hello World!");
