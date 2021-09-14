import { sendHttpRequest } from "../ajax/ajax.js";
let url = location;
let newURL = new URL(url);
let domain = newURL.hostname;
let protocol = newURL.protocol;
let port = newURL.port;
let pathname = newURL.pathname;

export function loadMore() {
  let loadBtn = document.querySelector(".works__loadBtn");
<<<<<<< HEAD
  if (location == `${protocol}//${domain}:${port}/works.html`) {
=======
  if (location == `${protocol}//${domain}/works.html`) {
>>>>>>> parent of 04626fe (update loadmodules, functions)
    loadBtn.addEventListener("click", () => {
      sendHttpRequest("GET", "works_template.html", loadBtn).then(
        (responseData) => {
          let limit = 8;
          let element = document.querySelector(".works__grid");
          let loadBtn = document.querySelector(".works__loadBtn");
          if (element.children.length < limit) {
            element.insertAdjacentHTML("beforeend", responseData);
          }
          if (element.children.length == 8) {
            loadBtn.textContent = "No more works";
          } else {
            loadBtn.textContent = "Load More";
          }
        }
      );
    });
  }
}
