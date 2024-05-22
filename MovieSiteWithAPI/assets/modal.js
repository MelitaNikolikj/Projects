// let question = document.querySelectorAll(".question");

let faqHead = document.querySelectorAll(".faq-head");
let faqBody = document.querySelectorAll(".faq-body");

let icon = document.querySelectorAll(".icon");

for (let i = 0; i < faqHead.length; i++) {
  let path = icon[i].querySelector("path");
  path.style.fill = "white";

  icon[i].addEventListener("click", function () {
    faqBody[i].classList.toggle("active");

    if (path.style.fill == "white") {
      path.style.fill = "black";
    } else {
      path.style.fill = "white";
    }
  });
}