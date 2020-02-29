const openFiltersBtn = document.querySelector("[data-selector='filters_open']");
const closeFiltersBtn = document.querySelector("[data-selector='filters_close']");
const mobileFilters = document.querySelector("[data-selector='mobile_filters']");


const openFiltersHandler = () => {
    if (mobileFilters.classList.contains("d-none")) {
        mobileFilters.classList.remove("d-none");
        openFiltersBtn.classList.add("d-none");
        closeFiltersBtn.classList.remove("d-none");
    }

}

const closeFiltersHandler = () => {
    if (!mobileFilters.classList.contains("d-none")) {
        mobileFilters.classList.add("d-none");
        openFiltersBtn.classList.remove("d-none");
        closeFiltersBtn.classList.add("d-none");
    }

}

const filterAndOrderProducts = (products) =>
    products.filter(product => {
        return product.category === "women" && product.fashion === "Casual style";
    }).sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    });


const getCatalogProductsTopItemsCount = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768 && windowWidth < 1025) {
        return 3;
    } else if (windowWidth >= 1025) {
        return 4;
    } else {
        return 2;
    }
}

const renderProducts = (products, productCounts, element1, element2) => {
        return products.forEach((item, index) => {
                    let product = `
        <a href="item.html " class="product_item_link ">
            <div class="product_item_img pos-relative">
                ${item.hasNew ? "<span class='product_item_promo'>New</span>" : ""}
                <img src="${item.thumbnail}" alt=${item.title}>
                <div class="item_hover d-none">
                    <span class="item_hover_link">View item</span>
                </div>
            </div>
            <div class="product_info d-flex flex-direction-column text-center f-size-14-tablet">
                <span class="product_name">${item.title}</span>
                ${item.discountedPrice && item.discountedPrice !== item.price  ? 
                `<div class="discount_amounts_catalog">
                    <span class="price_before_discount price_before_discount_catalog f-size-18">£${(item.price).toFixed(2)}
                        <hr class="crossItem">
                    </span>
                    <span class="product_price">£${(item.discountedPrice).toFixed(2)}</span>
                </div>` : `<span class="product_price">£${(item.price).toFixed(2)}</span>`
            }
            </div>
        </a>
    `;
    const productItem = document.createElement("div");
    productItem.className = "product_item";
    productItem.innerHTML = product;
    if (index + 1 <= productCounts) {
        element1.appendChild(productItem);
    } else {
        element2.appendChild(productItem);
    }
    });
}
const renderProductItems = () => {
        const catalogProductsTop = document.querySelector("[data-selector='catalog_products_top']");
        const catalogProductsBottom = document.querySelector("[data-selector='catalog_products_bottom']");
        catalogProductsTop.innerHTML = "";
        catalogProductsBottom.innerHTML = "";
        const allProducts = window.catalog;
        const filteredAndOrderedProducts = filterAndOrderProducts(allProducts);
        const catalogProductsTopItemsCount = getCatalogProductsTopItemsCount();
        console.log(filteredAndOrderedProducts, catalogProductsTopItemsCount);
        renderProducts(filteredAndOrderedProducts,catalogProductsTopItemsCount,catalogProductsTop,catalogProductsBottom);
}
window.addEventListener("DOMContentLoaded", renderProductItems);


window.addEventListener("resize", renderProductItems);