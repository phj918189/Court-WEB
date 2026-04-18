window.CourtUI.initTabs({
  tabSelector: ".titleH1 .tab-button",
  panelSelector: ".consttt",
  activeClass: "active",
  activeTabClass: "is-active",
  initialIndex: 0,
});

window.CourtUI.initAccordion({
  rootSelector: ".chart .des2 > li",
  triggerSelector: ".side_header",
  panelSelector: "ul",
  openClass: "is-open",
});

(function () {
  var firstGroup = document.querySelector(".chart .des2 > li");
  if (!firstGroup) return;
  firstGroup.classList.add("is-open");
  var firstPanel = firstGroup.querySelector("ul");
  if (firstPanel) firstPanel.style.display = "block";
})();
