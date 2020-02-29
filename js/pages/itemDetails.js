const productItemWrapper = document.querySelector("[data-selector='product_item']");


const getProductPhotos = product => product.preview.map(productPhoto =>
    `<img src="${productPhoto}" alt="${product.title}" class="item_secondary_image">`
);

const getProductsSizes = product => product.sizes.map(productSize =>
    ` <input type="radio" name="size" class="item_btn" id="${productSize.replace(/\s+/g, '')}" value="${productSize}" />
    <label for="${productSize.replace(/\s+/g, '')}">${productSize}</label>`);

const getProductsColors = product => product.colors.map(productColors =>
    ` <input type="radio" name="color" class="item_btn" type="submit" id="${productColors}" value="${productColors}" />
    <label for="${productColors}">${productColors}</label>`);

const renderProductItem = () => {
    const allProducts = window.catalog;
    const productItemData = allProducts.find(product => product.id === "80d32566-d81c-4ba0-9edf-0eceda3b4360");
    const photos = getProductPhotos(productItemData);
    const sizes = getProductsSizes(productItemData);
    const colors = getProductsColors(productItemData);
    let productHTML = `
        <div class="items d-flex flex-direction-column">
            <div class="item_primary">
                <img src="${productItemData.thumbnail}" alt="${productItemData.title}" class="item_primary_image">
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
            <div class="item_property d-flex  flex-direction-column f-size-14">
                <div class="item_size d-flex align-items-center justify-between">
                    <div class="item_description">Size</div>
                    <div class="item_button_wrapper d-flex">
                    ${sizes.join("")}
                    </div>
                </div>
                <div class="item_color d-flex align-items-center justify-between">
                    <div class="item_description">Color</div>
                    <div class="item_button_wrapper d-flex">
                    ${colors.join("")}
                    </div>
                </div>
            </div>
            <div class="button_wrapper text-center">
                <button class="btn f-size-20 f-size-24-desktop" type="button">Add to bag</button>
            </div>
             `;
    productItemWrapper.innerHTML = productHTML;
}

window.addEventListener("DOMContentLoaded", renderProductItem);