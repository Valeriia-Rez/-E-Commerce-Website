"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "storeToShoppingCart",
    value: function storeToShoppingCart(product) {
      var shoppingCart;

      if (localStorage.getItem('shoppingCart') === null) {
        shoppingCart = {
          items: [product],
          totalCost: product.finalProductPrice,
          itemsCount: 1
        };
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
      } else {
        this.updateShoppingCart(product);
      }
    }
  }, {
    key: "getShoppingCart",
    value: function getShoppingCart() {
      var shoppingCart;

      if (localStorage.getItem('shoppingCart') === null) {
        shoppingCart = {};
      } else {
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      }

      return shoppingCart;
    }
  }, {
    key: "updateShoppingCart",
    value: function updateShoppingCart(product) {
      var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      var isItemExist = shoppingCart.items.some(function (item) {
        return item.storageId === product.storageId;
      });

      if (isItemExist) {
        var itemIndex = shoppingCart.items.findIndex(function (item) {
          return item.storageId === product.storageId;
        });
        shoppingCart.items.splice(itemIndex, 1, _objectSpread({}, product));
      } else {
        shoppingCart.items.push(product);
      }

      var totalCost = shoppingCart.items.reduce(function (acc, cur) {
        return acc + cur.quantity * cur.finalProductPrice;
      }, 0);
      var itemsCount = shoppingCart.items.reduce(function (acc, cur) {
        return acc + cur.quantity;
      }, 0);
      shoppingCart.itemsCount = itemsCount;
      shoppingCart.totalCost = totalCost;
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
  }, {
    key: "deleteItemFromShoppingCart",
    value: function deleteItemFromShoppingCart(id) {
      console.log(id);
      var updatedShoppingCartItems, updatedShoppingCart;
      var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      shoppingCart.items.forEach(function (item, index) {
        if (id === item.storageId) {
          console.log(shoppingCart.totalCost - item.quantity * item.finalProductPrice);
          updatedShoppingCartItems = shoppingCart.items.filter(function (item) {
            return item.storageId !== id;
          });
          updatedShoppingCart = {
            items: updatedShoppingCartItems,
            itemsCount: shoppingCart.itemsCount - item.quantity,
            totalCost: shoppingCart.totalCost - item.quantity * item.finalProductPrice
          };
        }
      });
      localStorage.setItem('shoppingCart', JSON.stringify(updatedShoppingCart));
    }
  }, {
    key: "clearShoppingCart",
    value: function clearShoppingCart() {
      localStorage.removeItem('shoppingCart');
    }
  }]);

  return Storage;
}();
