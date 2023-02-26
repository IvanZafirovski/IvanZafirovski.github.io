"use strict";

$(document).ready(function () {
  let bigBtns = $(".cards-btn-buy-now");
  bigBtns.each(function () {
    $(this).click(function () {
      let el = $(this).closest(".btn-section");
      let sibling = el[0].nextElementSibling;
      while (sibling) {
        if (sibling.matches(".purchase-CTA-section")) {
          sibling.scrollIntoView();
          return;
        }
        sibling = sibling.nextElementSibling;
      }
    });
  });
});
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
