let url = location;
let newURL = new URL(url);
let domain = newURL.hostname;
let protocol = newURL.protocol;
let port = newURL.port;
let pathname = newURL.pathname;

function redirectToWorks() {
  if (location == `${protocol}//${domain}/works.html`) {
    let work = document.querySelector(".works__workItem--b1H");
    work.addEventListener("click", (e) => {
      location = "works_single.html";
    });
  }
}

function applySticky() {
  if (location == `${protocol}//${domain}${pathname}`) {
    window.addEventListener("scroll", () => {
      let myel = document.querySelector(".worksSingle__overviewCont");
      if (window.scrollY >= myel.offsetTop) {
        myel.classList.add("fixed");
      }
    });
  }
}

export { redirectToWorks, applySticky };
