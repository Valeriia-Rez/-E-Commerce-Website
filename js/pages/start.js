const storage = new Storage();

const addToBagBestOffer = () => {
    const { items } = storage.getShoppingCart();
}

const renderBestOfferItems = () => {
    const allProducts = window.catalog;
    const itemIdOne = "8c061815-6a7d-4465-bb78-1bdc6c5adebf";
    const itemIdTwo = "5677f851-1c4a-4e9b-80e9-16d1e6265257";
    const bestOfferItemData = allProducts.filter(item => item.id === itemIdOne || item.id === itemIdTwo);
    const bestOffer = document.querySelector("[data-selector='best_offer']");
    bestOffer.innerHTML = `
            <div class="product_items d-flex justify-around">
                    <div class="product_item multi">
                        <a href="item.html#${itemIdOne}" class="product_item_link">
                            <span class="product_item_promo">New</span>
                            <img src="${bestOfferItemData[1].thumbnail}" alt="${bestOfferItemData[1].title}" />
                        </a>
                        <div class="product_info d-flex flex-direction-column text-center f-size-14-tablet">
                            <a href="item.html" class="product_name">${bestOfferItemData[1].title}</a>
                            <span class="product_price">£${bestOfferItemData[1].price}</span>
                        </div>
                    </div>
                    <span class="plus d-block f-size-26">+</span>
                    <div class="product_item multi">
                        <a href="item.html#${itemIdTwo}" class="product_item_link">
                            <img src="${bestOfferItemData[0].thumbnail}" alt="${bestOfferItemData[0].title}" />
                        </a>
                        <div class="product_info d-flex flex-direction-column text-center f-size-14-tablet">
                            <a href="item.html" class="product_name">${bestOfferItemData[0].title}</a>
                            <span class="product_price">£${bestOfferItemData[0].price}</span>
                        </div>
                    </div>
                </div>
                <div class="products_discount d-flex justify-center mb-4">
                <div class="discount_amounts text-center">
                    <div class="price_before_discount f-size-18">£161.00
                        <hr class="crossItem">
                    </div>
                    <div class="price_after_discount f-size-26">
                        <span class="d-block ">£146.00</span>
                    </div>
                    <div class="button_wrapper text-center d-none d-block-desktop-up" data-selector="addToBag">
                        <a href="shopping-bag.html" class="btn f-size-20">Add to bag</a>
                    </div>
                </div>
            </div>
            <div class="button_wrapper text-center d-none-desktop-up" data-selector="addToBag">
                <a href="shopping-bag.html" class="btn  f-size-20">Add to bag</a>
            </div>
          `;
    const addToBag = document.querySelector("[data-selector='addToBag']");
    addToBag.addEventListener("click", addToBagBestOffer);
}





window.addEventListener("DOMContentLoaded", renderBestOfferItems);