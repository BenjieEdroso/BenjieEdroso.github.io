import { sendHttpRequest } from "../ajax/ajax.js";

let url = location;
let newURL = new URL(url);
let domain = newURL.hostname;
let protocol = newURL.protocol;
let port = newURL.port;
let pathname = newURL.pathname;

function redirectToWorks() {
<<<<<<< HEAD
  if (location == `${protocol}//${domain}:${port}/works.html`) {
=======
  if (location == `${protocol}//${domain}/works.html`) {
>>>>>>> parent of 04626fe (update loadmodules, functions)
    let work = document.querySelector(".works__workItem--b1H");
    work.addEventListener("click", (e) => {
      sendHttpRequest("GET", "works_single.html").then((responseData) => {
        let navbar = document.querySelector(".navbar");
        let works = document.querySelector(".works");
        navbar.insertAdjacentHTML("afterend", responseData);
      });
    });
  }
}

function applySticky() {
  if (location == `${protocol}//${domain}:${port}${pathname}`) {
    window.addEventListener("scroll", () => {
      let myel = document.querySelector(".worksSingle__overviewCont");
      if (window.scrollY >= myel.offsetTop) {
        myel.classList.add("fixed");
      }
    });
  }
}

export { redirectToWorks, applySticky };
