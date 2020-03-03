"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = new Storage();
var productItemWrapper = document.querySelector("[data-selector='product_item_section']");

var getProductPhotos = function getProductPhotos(product) {
  return product.preview.map(function (productPhoto, index) {
    return "<div class=\"pos-relative switcher_secondary_image_wrapper\">\n    <img src=\"".concat(productPhoto, "\" alt=\"").concat(product.title, "\" class=\"").concat(index === 0 ? "active" : "", " item_secondary_image switcher_image\"/>\n    <div class=\"item_hover d-none\">\n        <span class=\"item_hover_link\"></span>\n    </div>\n    </div>\n    ");
  });
};

var getProductsSizes = function getProductsSizes(product) {
  return product.sizes.map(function (productSize, index) {
    var checkedByDefault = index === 0 ? "checked" : "";
    return " <input type=\"radio\" ".concat(checkedByDefault, " name=\"size\" class=\"item_btn\" id=\"").concat(productSize.replace(/\s+/g, ''), "\" value=\"").concat(productSize, "\" />\n    <label for=\"").concat(productSize.replace(/\s+/g, ''), "\">").concat(productSize, "</label>");
  });
};

var getProductsColors = function getProductsColors(product) {
  return product.colors.map(function (productColors, index) {
    var checkedByDefault = index === 0 ? "checked" : "";
    return " <input type=\"radio\" ".concat(checkedByDefault, " name=\"color\" class=\"item_btn\" type=\"submit\" id=\"").concat(productColors, "\" value=\"").concat(productColors, "\" />\n    <label for=\"").concat(productColors, "\">").concat(productColors, "</label>");
  });
};

var getSelectedSize = function getSelectedSize(inputElement) {
  var selectedSizeValue;

  if (!inputElement.size) {
    selectedSizeValue = "";
  }

  if (inputElement.size && inputElement.size.checked) {
    selectedSizeValue = inputElement.size.value;
  }

  if (inputElement.size && !inputElement.size.checked) {
    var arrayOfSizes = Array.from(inputElement.size);
    var selectedSize = arrayOfSizes.find(function (item) {
      return item.checked;
    });
    selectedSizeValue = selectedSize && selectedSize.value;
  }

  return selectedSizeValue;
};

var getSelectedColor = function getSelectedColor(inputElement) {
  var selectedColorValue;

  if (!inputElement.color) {
    selectedColorValue = "";
  }

  if (inputElement.color && inputElement.color.checked) {
    selectedColorValue = inputElement.color.value;
  }

  if (inputElement.color && !inputElement.color.checked) {
    var arrayOfColors = Array.from(inputElement.color);
    var selectedColor = arrayOfColors.find(function (item) {
      return item.checked;
    });
    selectedColorValue = selectedColor && selectedColor.value;
  }

  return selectedColorValue;
};

var getSelectedSizeAndColor = function getSelectedSizeAndColor(inputElement) {
  var selectedSizeValue = getSelectedSize(inputElement);
  var selectedColorValue = getSelectedColor(inputElement);
  return {
    size: selectedSizeValue,
    color: selectedColorValue
  };
};

var switchImage = function switchImage(e) {
  var primaryImage = document.querySelector("[data-selector='primary_image']");
  var switcherActiveImage = document.querySelector(".switcher_image.active");
  switcherActiveImage.classList.remove("active");
  var selectedImageSrc = e.target.src;
  primaryImage.setAttribute("src", selectedImageSrc);
  e.target.classList.add("active");
};

var addToBagHandler = function addToBagHandler(e) {
  e.preventDefault();
  var addedProductId = e.target.productId.value;
  var selectedSizeAndColor = getSelectedSizeAndColor(e.target);
  var size = selectedSizeAndColor.size,
      color = selectedSizeAndColor.color;
  var addedProduct = window.catalog.find(function (product) {
    return product.id === addedProductId;
  });
  var finalProductPrice = addedProduct.price !== addedProduct.discountedPrice && addedProduct.discountedPrice ? addedProduct.discountedPrice : addedProduct.price;

  var _storage$getShoppingC = storage.getShoppingCart(),
      items = _storage$getShoppingC.items;

  var isSameItem = items && items.find(function (item) {
    return item.id === addedProductId && item.selectedColor === color && item.selectedSize === size;
  });
  var addToShoppingBagProduct;

  if (isSameItem) {
    addToShoppingBagProduct = _objectSpread({}, isSameItem, {
      quantity: isSameItem.quantity + 1
    });
  } else {
    addToShoppingBagProduct = _objectSpread({}, addedProduct, {
      storageId: "storageID-".concat(Math.floor(Math.random() * 10000 + 1)),
      selectedSize: size,
      selectedColor: color,
      quantity: 1,
      finalProductPrice: finalProductPrice
    });
  }

  storage.storeToShoppingCart(addToShoppingBagProduct);
  renderHeaderComponent();
  window.location.pathname = "/shopping-bag.html";
};

var renderProductItem = function renderProductItem() {
  var allProducts = window.catalog;
  var defaultItem = "80d32566-d81c-4ba0-9edf-0eceda3b4360";
  var itemId = window.location.hash ? window.location.hash.replace("#", "") : defaultItem;
  var productItemData = allProducts.find(function (product) {
    return product.id === itemId;
  });
  var photos = getProductPhotos(productItemData);
  var sizes = getProductsSizes(productItemData);
  var colors = getProductsColors(productItemData);
  var productHTML = "\n    <div class=\"item_section d-flex flex-direction-column\">\n        <div class=\"items d-flex flex-direction-column\">\n            <div class=\"item_primary\">\n                <img src=\"".concat(productItemData.thumbnail, "\" alt=\"").concat(productItemData.title, "\" class=\"item_primary_image switcher_image\" data-selector=\"primary_image\"/>\n            </div>\n            <div class=\"item_secondary d-flex\">\n                ").concat(photos.join(""), "\n            </div>\n        </div>\n        <div class=\"item_info text-center\">\n            <div class=\"item_text f-size-20 f-size-26-desktop\">\n                <h2>").concat(productItemData.title, "</h2>\n            </div>\n            <div class=\"item_block d-flex flex-direction-column\">\n                <div class=\"item_price f-size-18 f-size-25-desktop\">\n                <span>\xA3").concat(productItemData.price.toFixed(2), "</span>\n            </div>\n            <div class=\"info_block  info_block_item f-size-14 f-size-16-tablet\">\n                <p><i>").concat(productItemData.description, "</i></p>\n            </div>\n        </div>\n        <form data-selector=\"add_to_bag\">\n        <input type=\"hidden\" value=\"").concat(productItemData.id, "\" name=\"productId\"/>\n            <div class=\"item_property d-flex  flex-direction-column f-size-14\">\n                <div class=\"item_size d-flex align-items-center\">\n                    <div class=\"item_description\">Size</div>\n                    <div class=\"item_button_wrapper d-flex\">\n                    ").concat(sizes.join(""), "\n                    </div>\n                </div>\n                <div class=\"item_color d-flex align-items-center\">\n                    <div class=\"item_description\">Color</div>\n                    <div class=\"item_button_wrapper d-flex\">\n                    ").concat(colors.join(""), "\n                    </div>\n                </div>\n            </div>\n            <div class=\"button_wrapper text-center\">\n                <button type=\"submit\" data-id=\"").concat(productItemData.id, "\" class=\"btn f-size-20 f-size-24-desktop\" type=\"button\">Add to bag</button>\n            </div>\n        </form>\n     </div>\n    ");
  productItemWrapper.innerHTML = productHTML;
  var addToBagForm = document.querySelector("[data-selector='add_to_bag']");
  var switcherImages = document.querySelectorAll(".switcher_image");
  addToBagForm.addEventListener("submit", addToBagHandler);
  switcherImages.forEach(function (image) {
    return image.addEventListener("click", switchImage);
  });
};

window.addEventListener("DOMContentLoaded", renderProductItem);
window.addEventListener("resize", renderProductItem);
