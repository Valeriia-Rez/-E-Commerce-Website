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
            this.updateShoppingCart(product);
        }
    }

    getShoppingCart() {
        let shoppingCart;

        if (localStorage.getItem('shoppingCart') === null) {

            shoppingCart = {};
        } else {
            shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        }

        return shoppingCart;
    }

    updateShoppingCart(product) {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        const isItemExist = shoppingCart.items.some(item => item.storageId === product.storageId);

        if (isItemExist) {
            const itemIndex = shoppingCart.items.findIndex(item => item.storageId === product.storageId);
            shoppingCart.items.splice(itemIndex, 1, {...product });
        } else {
            shoppingCart.items.push(product);
        }

        shoppingCart.itemsCount += 1;
        shoppingCart.totalCost += product.finalProductPrice;
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    deleteShoppingCart(id) {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart.items.forEach(function(item, index) {
            if (id === item.id) {
                shoppingCart.items.splice(index, 1);
            }
        });
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    clearShoppingCart() {
        localStorage.removeItem('shoppingCart');
    }
}