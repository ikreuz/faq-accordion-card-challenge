function toggleClass(el, arr = [], className, classRotate, classActive) {
  if (el.childNodes[3]?.classList.contains(className)) {
    el.childNodes[3]?.classList.remove(className);

    el.querySelector("[data-arrow]").classList.remove(classRotate);
  } else {
    el.childNodes[3]?.classList.add(className);
    el.childNodes[1]?.classList.add(classActive);
    el.querySelector("[data-arrow]").classList.add(classRotate);
  }
  arr.forEach((x) => {
    if (x != el) {
      x.childNodes[3]?.classList.remove(className);
      x.childNodes[1]?.classList.remove(classActive);
      x.querySelector("[data-arrow]").classList.remove(classRotate);
    }
  });
}
document.addEventListener("click", function (e) {
  const specifiedAccordion1 = document.getElementById("accordion-1-si");
  const specifiedAccordion2 = document.getElementById("accordion-2-si");
  const specifiedAccordion3 = document.getElementById("accordion-3-si");
  const specifiedAccordion4 = document.getElementById("accordion-4-si");
  const specifiedAccordion5 = document.getElementById("accordion-5-si");
  const specifiedArray = [
    specifiedAccordion1,
    specifiedAccordion2,
    specifiedAccordion3,
    specifiedAccordion4,
    specifiedAccordion5,
  ];
  /** is clicked */
  const isClickedAccordion1 = specifiedAccordion1?.contains(e.target);
  const isClickedAccordion2 = specifiedAccordion2?.contains(e.target);
  const isClickedAccordion3 = specifiedAccordion3?.contains(e.target);
  const isClickedAccordion4 = specifiedAccordion4?.contains(e.target);
  const isClickedAccordion5 = specifiedAccordion5?.contains(e.target);

  if (isClickedAccordion1) {
    toggleClass(
      specifiedAccordion1,
      specifiedArray,
      "show",
      "rotate",
      "active-link"
    );
  }
  if (isClickedAccordion2) {
    toggleClass(
      specifiedAccordion2,
      specifiedArray,
      "show",
      "rotate",
      "active-link"
    );
  }
  if (isClickedAccordion3) {
    toggleClass(
      specifiedAccordion3,
      specifiedArray,
      "show",
      "rotate",
      "active-link"
    );
  }
  if (isClickedAccordion4) {
    toggleClass(
      specifiedAccordion4,
      specifiedArray,
      "show",
      "rotate",
      "active-link"
    );
  }
  if (isClickedAccordion5) {
    toggleClass(
      specifiedAccordion5,
      specifiedArray,
      "show",
      "rotate",
      "active-link"
    );
  }
});
