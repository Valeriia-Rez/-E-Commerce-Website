"use strict";

var openSearch = function openSearch() {
  var headerNavBar = document.querySelector("[data-selector='header_navbar']");
  var windowWidth = window.innerWidth;
  if (windowWidth > 1024) return;

  if (headerNavBar && headerNavBar.classList.contains("expanded")) {
    headerNavBar.classList.remove("expanded");
  } else {
    headerNavBar.classList.add("expanded");
  }
};

var openMobileHandler = function openMobileHandler() {
  var openMobileBtn = document.querySelector("[data-selector='mobile_open']");
  var closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
  var mobileMenu = document.querySelector("[data-selector='mobile_menu']");
  var verticalDivider = document.querySelector("[data-selector='vertical_divider']");

  if (mobileMenu && mobileMenu.classList.contains("d-none")) {
    mobileMenu.classList.remove("d-none");
    openMobileBtn.classList.add("d-none");
    closeMobileBtn.classList.remove("d-none");
    verticalDivider.classList.add("d-none");
  }
};

var closeMobileHandler = function closeMobileHandler() {
  var openMobileBtn = document.querySelector("[data-selector='mobile_open']");
  var closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
  var mobileMenu = document.querySelector("[data-selector='mobile_menu']");
  var verticalDivider = document.querySelector("[data-selector='vertical_divider']");

  if (!mobileMenu.classList.contains("d-none")) {
    mobileMenu.classList.add("d-none");
    openMobileBtn.classList.remove("d-none");
    closeMobileBtn.classList.add("d-none");
    verticalDivider.classList.remove("d-none");
  }
};

var renderHeaderComponent = function renderHeaderComponent() {
  var header = document.querySelector("[data-selector='header']");
  var storage = new Storage();

  var _storage$getShoppingC = storage.getShoppingCart(),
      itemsCount = _storage$getShoppingC.itemsCount,
      totalCost = _storage$getShoppingC.totalCost;

  header.innerHTML = "\n            <div class=\"header d-flex\">\n                <div class=\"header_logo d-flex f-size-26-tablet\">\n                    <h3 class=\"logo d-none d-block-tablet-up f-size-24\"><a href=\"start.html\">Template</a></h3>\n                    <h3 class=\"logo d-none-tablet-up f-size-24\"><a href=\"start.html\">TL</a></h3>\n                </div>\n                <div class=\"header_shopArea d-flex align-items-center\">\n                    <a href=\"#\" class=\"header_email d-none d-block-tablet-up\">E-mail sing up</a>\n                    <a href=\"shopping-bag.html\" class=\"header_bag\"><img src=\"img/ico_bag.jpg\" alt=\"bag\" class=\"header_icon\"/>Bag ".concat(parseInt(totalCost) ? "\xA3".concat(totalCost.toFixed(2)) : "", " (").concat(itemsCount || "0", ")</a>\n                </div>\n                <div class=\"vertical_divider d-none-tablet-up\" data-selector=\"vertical_divider\"></div>\n                <div class=\"mobile_icon d-none-tablet-up f-size-20\">\n                    <div onclick=\"openMobileHandler()\" data-selector=\"mobile_open\">\n                        <span class=\"gamburger\"></span>\n                        <span class=\"gamburger\"></span>\n                        <span class=\"gamburger\"></span>\n                    </div>\n                    <span onclick=\"closeMobileHandler()\" class=\"d-none text-danger\" data-selector=\"mobile_close\">&#10006;</span>\n                </div>\n                </div>\n                <div class=\"mobile_menu d-none\" data-selector=\"mobile_menu\">\n                    <nav>\n                        <ul class=\"mobile_menu_list f-size-24\">\n                            <li><a href=\"#\" class=\"mobile_link text-danger\">Women</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Men</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Handbags</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Accessories</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Sale</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">New Arrivals</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Clearance</a></li>\n                            <li><a href=\"#\" class=\"mobile_link text-dark\">Store Locator</a></li>\n                        </ul>\n                    </nav>\n                <div class=\"mobile_menu_search\">\n                    <div class=\"search_wrapper\">\n                        <input type=\"search\" class=\"search_field\" data-selector=\"search_field\" placeholder=\"Style Name\">\n                        <img src=\"img/ico.jpg\" alt=\"search_icon\" class=\"search_icon\"/>\n                    </div>\n                </div>\n                </div>\n                <div class=\"header_navbar d-none d-flex-tablet-up justify-between\" data-selector=\"header_navbar\">\n                    <nav class=\"nav_main f-size-13-desktop\">\n                        <a href=\"#\" class=\"header_nav\">Women</a>\n                        <a href=\"#\" class=\"header_nav\">Men</a>\n                        <a href=\"#\" class=\"header_nav\">Handbags</a>\n                        <a href=\"#\" class=\"header_nav\">Accessories</a>\n                        <a href=\"#\" class=\"header_nav\">Sale</a>\n                        <a href=\"#\" class=\"header_nav\">New Arrivals</a>\n                        <a href=\"#\" class=\"header_nav\">Clearance</a>\n                        <a href=\"#\" class=\"header_nav\">Store Locator</a>\n                    </nav>\n                <div class=\"menu_search\">\n                    <div class=\"search_wrapper\">\n                        <input type=\"search\" class=\"search_field d-none\" data-selector=\"search_field\" placeholder=\"Style Name\">\n                        <img src=\"img/ico.jpg\" alt=\"search_icon\" class=\"search_icon\" onclick=\"openSearch()\" data-selector=\"search_icon\"/>\n                    </div>\n                </div>\n            </div>");
};

window.addEventListener("DOMContentLoaded", renderHeaderComponent);
