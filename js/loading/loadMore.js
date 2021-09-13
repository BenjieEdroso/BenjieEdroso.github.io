import { sendHttpRequest } from "../ajax/ajax.js";

export function loadMore() {
  let loadBtn = document.querySelector(".works__loadBtn");

  if (location == "http://127.0.0.1:5500/works.html") {
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
