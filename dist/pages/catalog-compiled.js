"use strict";

var openFiltersBtn = document.querySelector("[data-selector='filters_open']");
var closeFiltersBtn = document.querySelector("[data-selector='filters_close']");
var mobileFilters = document.querySelector("[data-selector='mobile_filters']");

var openFiltersHandler = function openFiltersHandler() {
  if (mobileFilters.classList.contains("d-none")) {
    mobileFilters.classList.remove("d-none");
    openFiltersBtn.classList.add("d-none");
    closeFiltersBtn.classList.remove("d-none");
  }
};

var closeFiltersHandler = function closeFiltersHandler() {
  if (!mobileFilters.classList.contains("d-none")) {
    mobileFilters.classList.add("d-none");
    openFiltersBtn.classList.remove("d-none");
    closeFiltersBtn.classList.add("d-none");
  }
};

var filterAndOrderProducts = function filterAndOrderProducts(products) {
  return products.filter(function (product) {
    return product.category === "women" && product.fashion === "Casual style";
  }).sort(function (a, b) {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });
};

var getCatalogProductsTopItemsCount = function getCatalogProductsTopItemsCount() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 768 && windowWidth < 1025) {
    return 3;
  } else if (windowWidth >= 1025) {
    return 4;
  } else {
    return 2;
  }
};

var renderProducts = function renderProducts(products, productCounts, element1, element2) {
  return products.forEach(function (item, index) {
    var product = "\n        <a href=\"item.html \" class=\"product_item_link \">\n            <div class=\"product_item_img pos-relative\">\n                ".concat(item.hasNew ? "<span class='product_item_promo'>New</span>" : "", "\n                <img src=\"").concat(item.thumbnail, "\" alt=").concat(item.title, ">\n                <div class=\"item_hover d-none\">\n                    <span class=\"item_hover_link\">View Item</span>\n                </div>\n            </div>\n        </a>\n            <div class=\"product_info d-flex flex-direction-column text-center text-dark f-size-14-tablet\">\n                <a href=\"item.html\" class=\"product_name\">").concat(item.title, "</a>\n                ").concat(item.discountedPrice && item.discountedPrice !== item.price ? "<div class=\"discount_amounts_catalog\">\n                    <span class=\"price_before_discount price_before_discount_catalog f-size-18\">\xA3".concat(item.price.toFixed(2), "\n                        <hr class=\"crossItem\">\n                    </span>\n                    <span class=\"product_price\">\xA3").concat(item.discountedPrice.toFixed(2), "</span>\n                </div>") : "<span class=\"product_price\">\xA3".concat(item.price.toFixed(2), "</span>"), "\n            </div>\n    ");
    var productItem = document.createElement("div");
    productItem.className = "product_item";
    productItem.innerHTML = product;

    if (index + 1 <= productCounts) {
      element1.appendChild(productItem);
    } else {
      element2.appendChild(productItem);
    }
  });
};

var renderProductItems = function renderProductItems() {
  var catalogProductsTop = document.querySelector("[data-selector='catalog_products_top']");
  var catalogProductsBottom = document.querySelector("[data-selector='catalog_products_bottom']");
  catalogProductsTop.innerHTML = "";
  catalogProductsBottom.innerHTML = "";
  var allProducts = window.catalog;
  var filteredAndOrderedProducts = filterAndOrderProducts(allProducts);
  var catalogProductsTopItemsCount = getCatalogProductsTopItemsCount();
  renderProducts(filteredAndOrderedProducts, catalogProductsTopItemsCount, catalogProductsTop, catalogProductsBottom);
};

window.addEventListener("DOMContentLoaded", renderProductItems);
window.addEventListener("resize", renderProductItems);
