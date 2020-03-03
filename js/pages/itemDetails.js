const storage = new Storage();
const productItemWrapper = document.querySelector("[data-selector='product_item_section']");

const getProductPhotos = product => product.preview.map((productPhoto, index) =>
    `<div class="pos-relative switcher_secondary_image_wrapper">
    <img src="${productPhoto}" alt="${product.title}" class="${index === 0 ? "active" : ""} item_secondary_image switcher_image"/>
    <div class="item_hover d-none">
        <span class="item_hover_link"></span>
    </div>
    </div>
    `);

const getProductsSizes = product => product.sizes.map((productSize, index) => {
    const checkedByDefault = index === 0 ? "checked" : "";
    return (` <input type="radio" ${checkedByDefault} name="size" class="item_btn" id="${productSize.replace(/\s+/g, '')}" value="${productSize}" />
    <label for="${productSize.replace(/\s+/g, '')}">${productSize}</label>`)
});

const getProductsColors = product => product.colors.map((productColors, index) => {
    const checkedByDefault = index === 0 ? "checked" : "";
    return (` <input type="radio" ${checkedByDefault} name="color" class="item_btn" type="submit" id="${productColors}" value="${productColors}" />
    <label for="${productColors}">${productColors}</label>`)
});

const getSelectedSize = (inputElement) => {
    let selectedSizeValue;
    if (!inputElement.size) {
        selectedSizeValue = "";
    }
    if (inputElement.size && inputElement.size.checked) {
        selectedSizeValue = inputElement.size.value;
    }
    if (inputElement.size && !inputElement.size.checked) {
        const arrayOfSizes = Array.from(inputElement.size);
        const selectedSize = arrayOfSizes.find(item => item.checked);
        selectedSizeValue = selectedSize && selectedSize.value;
    }
    return selectedSizeValue;
}

const getSelectedColor = (inputElement) => {
    let selectedColorValue;
    if (!inputElement.color) {
        selectedColorValue = "";
    }
    if (inputElement.color && inputElement.color.checked) {
        selectedColorValue = inputElement.color.value;
    }
    if (inputElement.color && !inputElement.color.checked) {
        const arrayOfColors = Array.from(inputElement.color);
        const selectedColor = arrayOfColors.find(item => item.checked);
        selectedColorValue = selectedColor && selectedColor.value;
    }
    return selectedColorValue;
}

const getSelectedSizeAndColor = (inputElement) => {
    const selectedSizeValue = getSelectedSize(inputElement);
    const selectedColorValue = getSelectedColor(inputElement);
    return {
        size: selectedSizeValue,
        color: selectedColorValue
    }
}

const switchImage = (e) => {
    const primaryImage = document.querySelector("[data-selector='primary_image']");
    const switcherActiveImage = document.querySelector(".switcher_image.active");
    switcherActiveImage.classList.remove("active");
    const selectedImageSrc = e.target.src;
    primaryImage.setAttribute("src", selectedImageSrc);
    e.target.classList.add("active");
}

const addToBagHandler = (e) => {
    e.preventDefault();
    const addedProductId = e.target.productId.value;
    const selectedSizeAndColor = getSelectedSizeAndColor(e.target);
    const { size, color } = selectedSizeAndColor;
    const addedProduct = window.catalog.find(product => product.id === addedProductId);
    const finalProductPrice = addedProduct.price !== addedProduct.discountedPrice && addedProduct.discountedPrice ? addedProduct.discountedPrice : addedProduct.price;
    const { items } = storage.getShoppingCart();
    const isSameItem = items && items.find(item => item.id === addedProductId && item.selectedColor === color && item.selectedSize === size);
    let addToShoppingBagProduct;
    if (isSameItem) {
        addToShoppingBagProduct = {
            ...isSameItem,
            quantity: isSameItem.quantity + 1
        }
    } else {
        addToShoppingBagProduct = {
            ...addedProduct,
            storageId: `storageID-${Math.floor(Math.random() * 10000 + 1)}`,
            selectedSize: size,
            selectedColor: color,
            quantity: 1,
            finalProductPrice
        }
    }

    storage.storeToShoppingCart(addToShoppingBagProduct);
    renderHeaderComponent();
    window.location.pathname = "/shopping-bag.html";
}

const renderProductItem = () => {
    const allProducts = window.catalog;
    const defaultItem = "80d32566-d81c-4ba0-9edf-0eceda3b4360";
    const itemId = window.location.hash ? window.location.hash.replace("#", "") : defaultItem;
    const productItemData = allProducts.find(product => product.id === itemId);
    const photos = getProductPhotos(productItemData);
    const sizes = getProductsSizes(productItemData);
    const colors = getProductsColors(productItemData);
    let productHTML = `
    <div class="item_section d-flex flex-direction-column">
        <div class="items d-flex flex-direction-column">
            <div class="item_primary">
                <img src="${productItemData.thumbnail}" alt="${productItemData.title}" class="item_primary_image switcher_image" data-selector="primary_image"/>
            </div>
            <div class="item_secondary d-flex">
                ${photos.join("")}
            </div>
        </div>
        <div class="item_info text-center">
            <div class="item_text f-size-20 f-size-26-desktop">
                <h2>${productItemData.title}</h2>
            </div>
            <div class="item_block d-flex flex-direction-column">
                <div class="item_price f-size-18 f-size-25-desktop">
                <span>£${(productItemData.price).toFixed(2)}</span>
            </div>
            <div class="info_block  info_block_item f-size-14 f-size-16-tablet">
                <p><i>${productItemData.description}</i></p>
            </div>
        </div>
        <form data-selector="add_to_bag">
        <input type="hidden" value="${productItemData.id}" name="productId"/>
            <div class="item_property d-flex  flex-direction-column f-size-14">
                <div class="item_size d-flex align-items-center">
                    <div class="item_description">Size</div>
                    <div class="item_button_wrapper d-flex">
                    ${sizes.join("")}
                    </div>
                </div>
                <div class="item_color d-flex align-items-center">
                    <div class="item_description">Color</div>
                    <div class="item_button_wrapper d-flex">
                    ${colors.join("")}
                    </div>
                </div>
            </div>
            <div class="button_wrapper text-center">
                <button type="submit" data-id="${productItemData.id}" class="btn f-size-20 f-size-24-desktop" type="button">Add to bag</button>
            </div>
        </form>
     </div>
             `;
    productItemWrapper.innerHTML = productHTML;
    const addToBagForm = document.querySelector("[data-selector='add_to_bag']");
    const switcherImages = document.querySelectorAll(".switcher_image");
    addToBagForm.addEventListener("submit", addToBagHandler);
    switcherImages.forEach(image => image.addEventListener("click", switchImage));
}

window.addEventListener("DOMContentLoaded", renderProductItem);
window.addEventListener("resize", renderProductItem);