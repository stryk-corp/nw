(function () {
  var s = window.SITE;
  document.querySelectorAll("[data-t]").forEach(function (el) {
    el.textContent = s[el.getAttribute("data-t")] || "";
  });
  if (s && s.productName) document.title = s.productName + " | " + document.title;
})();
