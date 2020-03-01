const storage = new Storage();
const increaseQuantity = () => {
    const increaseQuantityButton = document.querySelector("[data-selector='increase_quantity_button']");
    const itemId = increaseQuantityButton.dataset.id;
    const { items } = storage.getShoppingCart();
    const item = items.find(item => item.storageId === itemId);
    const updatedItem = {
        ...item,
        quantity: item.quantity + 1
    }
    storage.storeToShoppingCart(updatedItem);


    renderHeaderComponent();
    renderShoppingBagItems();

}

const decreaseQuantity = () => {
    const decreaseQuantityButton = document.querySelector("[data-selector='decrease_quantity_button']");

    const itemId = decreaseQuantityButton.dataset.id;
    const { items } = storage.getShoppingCart();
    const item = items.find(item => item.storageId === itemId);
    const updatedItem = {
        ...item,
        quantity: item.quantity - 1
    }

    storage.storeToShoppingCart(updatedItem);


    renderHeaderComponent();
    renderShoppingBagItems();

}

const renderShoppingBagItems = () => {

    const { items, totalCost } = storage.getShoppingCart();
    const shoppingBagItems = document.querySelector("[data-selector='shopping_bag_items']");
    console.log(items);
    shoppingBagItems.innerHTML = items ? items.map(item => (`
    
        <div class="product_item shopping_bag_item d-flex flex-direction-row mb-2">
        <a href="item.html" class="product_item_link">
        <div class="product_item_img pos-relative">
        ${item.hasNew ? "<span class='product_item_promo'>New</span>" : ""}
            <img src=${item.thumbnail} alt=${item.title}>
            <div class="item_hover d-none">
                <span class="item_hover_link">View item</span>
            </div>
        </div>
        </a>
        <div class="product_info d-flex flex-direction-column align-items-baseline pl-4 f-size-14-tablet">
            <a href="item.html" class="product_name">${item.title}</a>
            <span class="product_price"><strong>£ ${item.discountedPrice && item.discountedPrice !== item.price  ? item.discountedPrice : item.price}</strong></span>
            <div class="product_details mt-2 f-size-10 f-size-12-tablet">
                <p>Color: ${item.selectedColor}</p>
                <p>Size: ${item.selectedSize}</p>
                <p>Quantity: <button data-id="${item.storageId}" data-selector="decrease_quantity_button" onclick="decreaseQuantity()" class="btn_link text-danger"><strong>&#8722;</strong></button>${item.quantity}<button data-id="${item.storageId}" data-selector="increase_quantity_button" onclick="increaseQuantity()" class="btn_link text-danger"><strong>+</strong></button></p>
            </div>
            <button class="btn_link text-danger f-size-11 f-size-13-tablet">Remove item</button>
        </div>
    </div>
        `)).join("") :
        "<p> Your shopping bag is empty. Use Catalog to add new items.</p>"

}

window.addEventListener("DOMContentLoaded", renderShoppingBagItems);
window.addEventListener("resize", renderShoppingBagItems);