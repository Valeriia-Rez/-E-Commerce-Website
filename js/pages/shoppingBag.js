const storage = new Storage();
const increaseQuantity = (e) => {
    const itemId = e.target.dataset.id;
    const { items } = storage.getShoppingCart();
    const item = items.find(item => item.storageId === itemId);
    const updatedItem = {
        ...item,
        quantity: item.quantity + 1
    }
    storage.storeToShoppingCart(updatedItem);
    renderHeaderComponent();
    renderShoppingBagPage();
}

const decreaseQuantity = (e) => {
    const itemId = e.target.dataset.id;
    const { items } = storage.getShoppingCart();
    const item = items.find(item => item.storageId === itemId);
    if (item.quantity - 1 < 1) return
    const updatedItem = {
        ...item,
        quantity: item.quantity - 1
    }
    storage.storeToShoppingCart(updatedItem);
    renderHeaderComponent();
    renderShoppingBagPage();
}

const removeItemFromShoppingCart = (e) => {
    const itemId = e.target.dataset.id;
    storage.deleteItemFromShoppingCart(itemId);
    renderHeaderComponent();
    renderShoppingBagPage();
}

const clearShoppingBag = () => {
    storage.clearShoppingCart();
    renderHeaderComponent();
    renderShoppingBagPage();
}
const checkoutItemsFromShoppingBag = () => {
    const { items } = storage.getShoppingCart();
    if (!items.length) return
    clearShoppingBag();
    const checkoutMessage = document.querySelector("[data-selector='checkout_message']");
    checkoutMessage.textContent = "Thank you for your purchase.";
}

const renderShoppingBagItems = () => {

    const { items } = storage.getShoppingCart();
    const shoppingBagItems = document.querySelector("[data-selector='shopping_bag_items']");

    shoppingBagItems.innerHTML = items && items.length ? items.map(item => (`
    
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
                <p>
                    <span class="pr-2">Quantity:</span>
                    <button data-id="${item.storageId}" data-selector="decrease_quantity_button" class="text-danger f-size-16">&#8722;</button>
                    <span class="pl-2 pr-2">${item.quantity}</span>
                    <button data-id="${item.storageId}" data-selector="increase_quantity_button" class="text-danger f-size-16">+</button>
                </p>
            </div>
            <button data-id="${item.storageId}" data-selector="remove_item_button" class="btn_link text-danger f-size-11 f-size-13-tablet">Remove item</button>
        </div>
    </div>
        `)).join("") :
        `<p data-selector="checkout_message" class="f-size-20"> Your shopping bag is empty. Use <a href="catalog.html" class="text-danger">Catalog</a> to add new items.</p>`

    const increaseQuantityButtons = document.querySelectorAll("[data-selector='increase_quantity_button']");
    const decreaseQuantityButtons = document.querySelectorAll("[data-selector='decrease_quantity_button']");
    const removeItemButtons = document.querySelectorAll("[data-selector='remove_item_button']");

    removeItemButtons.forEach(button => button.addEventListener("click", removeItemFromShoppingCart));
    increaseQuantityButtons.forEach(button => button.addEventListener("click", increaseQuantity));
    decreaseQuantityButtons.forEach(button => button.addEventListener("click", decreaseQuantity));

}

const renderCheckoutSection = () => {
        const { totalCost } = storage.getShoppingCart();
        const checkoutArea = document.querySelector("[data-selector='checkout_area']");
        checkoutArea.innerHTML = `
        <div class="checkout_discount_amounts text-center mb-4">
            <span class="applied_discount text-danger f-size-16-tablet">Applied discount: £15.00</span>
            <div class="price_after_discount mt-2">
                <span class="f-size-16 f-size-20-tablet f-size-22-desktop">Total price: ${totalCost ? `£${totalCost.toFixed(2)}` : 0}</span>
            </div>
        </div>
        <div class="text-center">
            <button class="btn f-size-18 f-size-20-tablet f-size-24-desktop" data-selector="checkout_button" type="button">Checkout</button>
        </div>
        <button class="btn_link f-size-10 f-size-13-tablet" data-selector="clear_bag_button"><strong>Empty bag</strong></button>
         `;
    const clearBagButton = document.querySelector("[data-selector='clear_bag_button']");
    const checkoutButton = document.querySelector("[data-selector='checkout_button']");
    clearBagButton.addEventListener("click", clearShoppingBag);
    checkoutButton.addEventListener("click",checkoutItemsFromShoppingBag);

}
const renderShoppingBagPage = () => {
    renderShoppingBagItems();
    renderCheckoutSection();
}

window.addEventListener("DOMContentLoaded", renderShoppingBagPage);
window.addEventListener("resize", renderShoppingBagPage);