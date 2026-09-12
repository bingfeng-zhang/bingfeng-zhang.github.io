(function () {
  "use strict";

  document.querySelectorAll("[data-show-more]").forEach(function (section) {
    var selector = section.getAttribute("data-item-selector");
    var batchSize = Number(section.getAttribute("data-batch-size")) || 5;
    var items = Array.prototype.slice.call(section.querySelectorAll(selector));

    items.slice(batchSize).forEach(function (item) {
      item.hidden = true;
    });

    if (items.length <= batchSize) {
      return;
    }

    var button = document.createElement("button");
    button.type = "button";
    button.className = "show-more-button";
    button.textContent = "Show more";
    section.insertAdjacentElement("afterend", button);

    button.addEventListener("click", function () {
      var hiddenItems = items.filter(function (item) {
        return item.hidden;
      });

      hiddenItems.slice(0, batchSize).forEach(function (item) {
        item.hidden = false;
      });

      if (hiddenItems.length <= batchSize) {
        button.remove();
      }
    });
  });
}());
