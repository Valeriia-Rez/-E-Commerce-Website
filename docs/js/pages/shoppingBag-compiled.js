"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = new Storage();

var increaseQuantity = function increaseQuantity(e) {
  var itemId = e.target.dataset.id;

  var _storage$getShoppingC = storage.getShoppingCart(),
      items = _storage$getShoppingC.items;

  var item = items.find(function (item) {
    return item.storageId === itemId;
  });

  var updatedItem = _objectSpread({}, item, {
    quantity: item.quantity + 1
  });

  storage.storeToShoppingCart(updatedItem);
  renderHeaderComponent();
  renderShoppingBagPage();
};

var decreaseQuantity = function decreaseQuantity(e) {
  var itemId = e.target.dataset.id;

  var _storage$getShoppingC2 = storage.getShoppingCart(),
      items = _storage$getShoppingC2.items;

  var item = items.find(function (item) {
    return item.storageId === itemId;
  });
  if (item.quantity - 1 < 1) return;

  var updatedItem = _objectSpread({}, item, {
    quantity: item.quantity - 1
  });

  storage.storeToShoppingCart(updatedItem);
  renderHeaderComponent();
  renderShoppingBagPage();
};

var removeItemFromShoppingCart = function removeItemFromShoppingCart(e) {
  var itemId = e.target.dataset.id;
  storage.deleteItemFromShoppingCart(itemId);
  renderHeaderComponent();
  renderShoppingBagPage();
};

var clearShoppingBag = function clearShoppingBag() {
  storage.clearShoppingCart();
  renderHeaderComponent();
  renderShoppingBagPage();
};

var checkoutItemsFromShoppingBag = function checkoutItemsFromShoppingBag() {
  var _storage$getShoppingC3 = storage.getShoppingCart(),
      items = _storage$getShoppingC3.items;

  if (!items.length) return;
  clearShoppingBag();
  var checkoutMessage = document.querySelector("[data-selector='checkout_message']");
  checkoutMessage.textContent = "Thank you for your purchase.";
};

var renderShoppingBagItems = function renderShoppingBagItems() {
  var _storage$getShoppingC4 = storage.getShoppingCart(),
      items = _storage$getShoppingC4.items;

  var shoppingBagItems = document.querySelector("[data-selector='shopping_bag_items']");
  shoppingBagItems.innerHTML = items && items.length ? items.map(function (item) {
    return "\n    <div class=\"product_item shopping_bag_item d-flex flex-direction-row mb-2\">\n        <a href=\"item.html#".concat(item.id, "\" class=\"product_item_link\">\n        <div class=\"product_item_img pos-relative\">\n        ").concat(item.hasNew ? "<span class='product_item_promo'>New</span>" : "", "\n            <img src=").concat(item.thumbnail, " alt=").concat(item.title, "/>\n            <div class=\"item_hover d-none\">\n                <span class=\"item_hover_link\">View item</span>\n            </div>\n        </div>\n        </a>\n        <div class=\"product_info d-flex flex-direction-column align-items-baseline pl-4 f-size-14-tablet\">\n            <a href=\"item.html\" class=\"product_name\">").concat(item.title, "</a>\n            <span class=\"product_price\"><strong>\xA3 ").concat(item.discountedPrice && item.discountedPrice !== item.price ? item.discountedPrice.toFixed(2) : item.price.toFixed(2), "</strong></span>\n            <div class=\"product_details mt-2 f-size-10 f-size-12-tablet\">\n                <p>Color: ").concat(item.selectedColor, "</p>\n                <p>Size: ").concat(item.selectedSize, "</p>\n                <p>\n                    <span class=\"pr-2\">Quantity:</span>\n                    <button data-id=\"").concat(item.storageId, "\" data-selector=\"decrease_quantity_button\" class=\"text-danger f-size-16\">&#8722;</button>\n                    <span class=\"pl-2 pr-2\">").concat(item.quantity, "</span>\n                    <button data-id=\"").concat(item.storageId, "\" data-selector=\"increase_quantity_button\" class=\"text-danger f-size-16\">+</button>\n                </p>\n            </div>\n            <button data-id=\"").concat(item.storageId, "\" data-selector=\"remove_item_button\" class=\"btn_link text-danger f-size-11 f-size-13-tablet\">Remove item</button>\n        </div>\n    </div>\n        ");
  }).join("") : "<p data-selector=\"checkout_message\" class=\"f-size-20\"> Your shopping bag is empty. Use <a href=\"catalog.html\" class=\"text-danger\">Catalog</a> to add new items.</p>";
  var increaseQuantityButtons = document.querySelectorAll("[data-selector='increase_quantity_button']");
  var decreaseQuantityButtons = document.querySelectorAll("[data-selector='decrease_quantity_button']");
  var removeItemButtons = document.querySelectorAll("[data-selector='remove_item_button']");
  removeItemButtons.forEach(function (button) {
    return button.addEventListener("click", removeItemFromShoppingCart);
  });
  increaseQuantityButtons.forEach(function (button) {
    return button.addEventListener("click", increaseQuantity);
  });
  decreaseQuantityButtons.forEach(function (button) {
    return button.addEventListener("click", decreaseQuantity);
  });
};

var renderCheckoutSection = function renderCheckoutSection() {
  var _storage$getShoppingC5 = storage.getShoppingCart(),
      totalCost = _storage$getShoppingC5.totalCost,
      discount = _storage$getShoppingC5.discount;

  var checkoutArea = document.querySelector("[data-selector='checkout_area']");
  checkoutArea.innerHTML = "\n        <div class=\"checkout_discount_amounts text-center mb-4\">\n            ".concat(discount ? "<span class=\"applied_discount text-danger f-size-16-tablet\">Applied discount: \xA3".concat(discount.toFixed(2), "</span>") : "", "\n            <div class=\"price_after_discount mt-2\">\n                <span class=\"f-size-16 f-size-20-tablet f-size-22-desktop\">Total price: ").concat(totalCost ? "\xA3".concat(totalCost.toFixed(2)) : 0, "</span>\n            </div>\n        </div>\n        <div class=\"text-center\">\n            <button class=\"btn f-size-18 f-size-20-tablet f-size-24-desktop\" data-selector=\"checkout_button\" type=\"button\">Checkout</button>\n        </div>\n        <button class=\"btn_link f-size-10 f-size-13-tablet\" data-selector=\"clear_bag_button\"><strong>Empty bag</strong></button>\n         ");
  var clearBagButton = document.querySelector("[data-selector='clear_bag_button']");
  var checkoutButton = document.querySelector("[data-selector='checkout_button']");
  clearBagButton.addEventListener("click", clearShoppingBag);
  checkoutButton.addEventListener("click", checkoutItemsFromShoppingBag);
};

var renderShoppingBagPage = function renderShoppingBagPage() {
  renderShoppingBagItems();
  renderCheckoutSection();
};

window.addEventListener("DOMContentLoaded", renderShoppingBagPage);
window.addEventListener("resize", renderShoppingBagPage);
