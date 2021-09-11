class Animations {
  constructor(titleEl, viewEl, workEl, footerLink, footerImg) {
    this.titleEl = titleEl;
    this.viewEl = viewEl;
    this.workEl = workEl;
    this.footerLink = footerLink;
    this.footerImg = footerImg;
  }

  animateWorks() {
    let workEl = document.querySelectorAll(this.workEl);

    // let footerLink = Array.from(
    //   document.querySelectorAll(`${this.footerLink}`)
    // );
    // let footImg = document.querySelectorAll(`${this.footerImg}`);
    // workEl.forEach((workItem, i, a) => {
    //   let stack = Array.from(
    //     document.querySelectorAll(`.${workItem.children[2].className}`)
    //   );
    //   let view = Array.from(
    //     document.querySelectorAll(`.${workItem.children[3].className}`)
    //   );
    //   workItem.addEventListener("mouseover", function (e) {
    //     stack[i].classList.add("hideStack");
    //     view[i].classList.add("showView");
    //   });
    //   workItem.addEventListener("mouseout", (e) => {
    //     stack[i].classList.remove("hideStack");
    //     view[i].classList.remove("showView");
    //   });
    // });
    // footerLink.forEach((link, i) => {
    //   link.addEventListener("mouseover", function () {
    //     link.classList.add("moveLink");
    //     footImg[i].classList.add("showImg");
    //   });
    //   link.addEventListener("mouseout", function () {
    //     link.classList.remove("moveLink");
    //     footImg[i].classList.remove("showImg");
    //   });
    // });
  }
}

export default Animations;
