class Storage {
    storeToShoppingCart(product) {
        let shoppingCart;
        if (localStorage.getItem('shoppingCart') === null) {
            shoppingCart = {
                items: [product],
                totalCost: product.finalProductPrice,
                itemsCount: 1
            };

            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        } else {
            shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
            shoppingCart.items.push(product);
            shoppingCart.itemsCount += 1;
            shoppingCart.totalCost += product.finalProductPrice;
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }

    getShoppingCartFromStorage() {
        let shoppingCart;
        if (localStorage.getItem('shoppingCart') === null) {
            shoppingCart = {};
        } else {
            shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        }
        return shoppingCart;
    }

    updateShoppingCartStorage(updatedItem) {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart.items.forEach(function(item, index) {
            if (updatedItem.id === item.id) {
                shoppingCart.items.splice(index, 1, updatedItem);
            }
        });
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    deleteShoppingCartFromStorage(id) {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart.items.forEach(function(item, index) {
            if (id === item.id) {
                shoppingCart.items.splice(index, 1);
            }
        });
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    clearShoppingCartFromStorage() {
        localStorage.removeItem('shoppingCart');
    }

    storeShoppingCart(shoppingCart) {
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
}