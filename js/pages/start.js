const storage = new Storage();

const addToBagBestOffer = e => {
    const allProducts = window.catalog;
    const { firstid, secondid } = e.target.dataset;
    const bestOfferItemData = allProducts.filter(
        item => item.id === firstid || item.id === secondid
    );

    bestOfferItemData.forEach(item => {
        const finalProductPrice =
            item.price !== item.discountedPrice && item.discountedPrice ?
            item.discountedPrice :
            item.price;
        let addToShoppingBagProduct = {
            ...item,
            storageId: `storageID-${Math.floor(Math.random() * 10000 + 1)}`,
            selectedSize: "",
            selectedColor: "",
            quantity: 1,
            finalProductPrice,
            discount: 15
        };
        storage.storeToShoppingCart(addToShoppingBagProduct);
    });
    renderHeaderComponent();
    window.location.pathname = "/shopping-bag.html";
};

const renderBestOfferItems = () => {
    const allProducts = window.catalog;
    const itemIdOne = "8c061815-6a7d-4465-bb78-1bdc6c5adebf";
    const itemIdTwo = "5677f851-1c4a-4e9b-80e9-16d1e6265257";
    const bestOfferItemData = allProducts.filter(
        item => item.id === itemIdOne || item.id === itemIdTwo
    );
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
                    <div class="button_wrapper text-center d-none d-block-desktop-up">
                        <button data-firstid=${itemIdOne} data-secondid=${itemIdTwo} data-selector="addToBagButton" class="btn f-size-20">Add to bag</button>
                    </div>
                </div>
            </div>
            <div class="button_wrapper text-center d-none-desktop-up">
                <button data-firstid=${itemIdOne} data-secondid=${itemIdTwo} data-selector="addToBagButton" class="btn  f-size-20">Add to bag</button>
            </div>
          `;
    const addToBag = document.querySelector("[data-selector='addToBagButton']");
    addToBag.addEventListener("click", addToBagBestOffer);
};

window.addEventListener("DOMContentLoaded", renderBestOfferItems);