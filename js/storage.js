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
        const totalCost = shoppingCart.items.reduce((acc, cur) => acc + cur.quantity * cur.finalProductPrice, 0);
        const itemsCount = shoppingCart.items.reduce((acc, cur) => acc + cur.quantity, 0)
        shoppingCart.itemsCount = itemsCount;
        shoppingCart.totalCost = totalCost;
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    deleteItemFromShoppingCart(id) {
        console.log(id);
        let updatedShoppingCartItems, updatedShoppingCart;
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        shoppingCart.items.forEach(function(item, index) {
            if (id === item.storageId) {
                console.log(shoppingCart.totalCost - item.quantity * item.finalProductPrice);
                updatedShoppingCartItems = shoppingCart.items.filter(item => item.storageId !== id);
                updatedShoppingCart = {
                    items: updatedShoppingCartItems,
                    itemsCount: shoppingCart.itemsCount - item.quantity,
                    totalCost: shoppingCart.totalCost - item.quantity * item.finalProductPrice

                }
            }
        });

        localStorage.setItem('shoppingCart', JSON.stringify(updatedShoppingCart));
    }

    clearShoppingCart() {
        localStorage.removeItem('shoppingCart');
    }
}