"use strict";

var renderMobileFiltersComponent = function renderMobileFiltersComponent() {
  var mobileFilters = document.querySelector("[data-selector='mobile_filters']");
  var windowWidth = window.innerWidth;

  if (windowWidth > 1025) {
    mobileFilters.innerHTML = "";
    return;
  }

  mobileFilters.innerHTML = "\n        <ul class=\"mobile_filters_list d-flex flex-wrap py-4\">\n        <li class=\"filter \">\n            <h2>Fashion</h2>\n            <ul class=\"filter_items text-gray\">\n                <li>Not selected</li>\n                <li>Nail the 90s</li>\n                <li class=\"text-danger\">Casual style</li>\n                <li>New Look</li>\n                <li>Sport</li>\n                <li>Vintage</li>\n                <li>Classical style</li>\n            </ul>\n        </li>\n        <li class=\"filter\">\n            <h2>Product type</h2>\n            <ul class=\"filter_items text-gray\">\n                <li class=\"text-dark\">Not selected</li>\n                <li>Coats & Jackets</li>\n                <li>Dresses</li>\n                <li>Jersey Tops</li>\n            </ul>\n        </li>\n        <li class=\"filter\">\n            <h2>Color</h2>\n            <ul class=\"filter_items text-gray\">\n                <li class=\"text-dark\">Not selected</li>\n                <li>Black</li>\n                <li>Blue</li>\n                <li>Red</li>\n                <li>Green</li>\n                <li>Golden</li>\n            </ul>\n        </li>\n        <li class=\"filter\">\n            <h2>Brand</h2>\n            <ul class=\"filter_items text-gray\">\n                <li>Not selected</li>\n                <li>Chi cji London</li>\n                <li class=\"text-danger\">Antipodium</li>\n                <li>Adidas</li>\n                <li>New Balance</li>\n                <li>River Island</li>\n            </ul>\n        </li>\n        <li class=\"filter\">\n            <h2>Size</h2>\n            <ul class=\"filter_items text-gray\">\n                <li>Not selected</li>\n                <li>UK 2</li>\n                <li class=\"text-danger\">UK 18</li>\n                <li>UK 18L</li>\n                <li>UK 20</li>\n                <li>UK 20L</li>\n                <li>UK 20S</li>\n                <li>UK 22S</li>\n                <li>UK 22</li>\n            </ul>\n        </li>\n        <li class=\"filter\">\n            <h2>Price range</h2>\n            <ul class=\"filter_items text-gray\">\n                <li class=\"text-dark\">Not selected</li>\n                <li>To \xA399</li>\n                <li>\xA3100-\xA3299</li>\n                <li>From \xA3300</li>\n            </ul>\n        </li>\n    </ul>\n        ";
};

window.addEventListener("DOMContentLoaded", renderMobileFiltersComponent);
window.addEventListener("resize", renderMobileFiltersComponent);
