"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = new Storage();

var addToBagBestOffer = function addToBagBestOffer(e) {
  var allProducts = window.catalog;
  var _e$target$dataset = e.target.dataset,
      firstid = _e$target$dataset.firstid,
      secondid = _e$target$dataset.secondid;
  var bestOfferItemData = allProducts.filter(function (item) {
    return item.id === firstid || item.id === secondid;
  });
  bestOfferItemData.forEach(function (item) {
    var finalProductPrice = item.price !== item.discountedPrice && item.discountedPrice ? item.discountedPrice : item.price;

    var addToShoppingBagProduct = _objectSpread({}, item, {
      storageId: "storageID-".concat(Math.floor(Math.random() * 10000 + 1)),
      selectedSize: "",
      selectedColor: "",
      quantity: 1,
      finalProductPrice: finalProductPrice,
      discount: 15
    });

    storage.storeToShoppingCart(addToShoppingBagProduct);
  });
  renderHeaderComponent();
  window.location.pathname = "/shopping-bag.html";
};

var renderBestOfferItems = function renderBestOfferItems() {
  var allProducts = window.catalog;
  var itemIdOne = "8c061815-6a7d-4465-bb78-1bdc6c5adebf";
  var itemIdTwo = "5677f851-1c4a-4e9b-80e9-16d1e6265257";
  var bestOfferItemData = allProducts.filter(function (item) {
    return item.id === itemIdOne || item.id === itemIdTwo;
  });
  var bestOffer = document.querySelector("[data-selector='best_offer']");
  bestOffer.innerHTML = "\n            <div class=\"product_items d-flex justify-around\">\n                    <div class=\"product_item multi\">\n                        <a href=\"item.html#".concat(itemIdOne, "\" class=\"product_item_link\">\n                            <span class=\"product_item_promo\">New</span>\n                            <img src=\"").concat(bestOfferItemData[1].thumbnail, "\" alt=\"").concat(bestOfferItemData[1].title, "\" />\n                        </a>\n                        <div class=\"product_info d-flex flex-direction-column text-center f-size-14-tablet\">\n                            <a href=\"item.html\" class=\"product_name\">").concat(bestOfferItemData[1].title, "</a>\n                            <span class=\"product_price\">\xA3").concat(bestOfferItemData[1].price.toFixed(2), "</span>\n                        </div>\n                    </div>\n                    <span class=\"plus d-block f-size-26\">+</span>\n                    <div class=\"product_item multi\">\n                        <a href=\"item.html#").concat(itemIdTwo, "\" class=\"product_item_link\">\n                            <img src=\"").concat(bestOfferItemData[0].thumbnail, "\" alt=\"").concat(bestOfferItemData[0].title, "\" />\n                        </a>\n                        <div class=\"product_info d-flex flex-direction-column text-center f-size-14-tablet\">\n                            <a href=\"item.html\" class=\"product_name\">").concat(bestOfferItemData[0].title, "</a>\n                            <span class=\"product_price\">\xA3").concat(bestOfferItemData[0].price.toFixed(2), "</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"products_discount d-flex justify-center mb-4\">\n                <div class=\"discount_amounts text-center\">\n                    <div class=\"price_before_discount f-size-18\">\xA3161.00\n                        <hr class=\"crossItem\">\n                    </div>\n                    <div class=\"price_after_discount f-size-26\">\n                        <span class=\"d-block \">\xA3146.00</span>\n                    </div>\n                    <div class=\"button_wrapper text-center d-none d-block-desktop-up\">\n                        <button data-firstid=").concat(itemIdOne, " data-secondid=").concat(itemIdTwo, " data-selector=\"addToBagButton\" class=\"btn f-size-20\">Add to bag</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"button_wrapper text-center d-none-desktop-up\">\n                <button data-firstid=").concat(itemIdOne, " data-secondid=").concat(itemIdTwo, " data-selector=\"addToBagButton\" class=\"btn  f-size-20\">Add to bag</button>\n            </div>\n          ");
  var addToBag = document.querySelectorAll("[data-selector='addToBagButton']");
  addToBag.forEach(function (button) {
    return button.addEventListener("click", addToBagBestOffer);
  });
};

window.addEventListener("DOMContentLoaded", renderBestOfferItems);
