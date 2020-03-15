const renderMobileFiltersComponent = () => {

    let mobileFilters = document.querySelector("[data-selector='mobile_filters']");
    const windowWidth = window.innerWidth;
    if (windowWidth > 1025) {
        mobileFilters.innerHTML = ""
        return
    }
    mobileFilters.innerHTML = `
        <ul class="mobile_filters_list d-flex flex-wrap py-4">
        <li class="filter ">
            <h2>Fashion</h2>
            <ul class="filter_items text-gray">
                <li>Not selected</li>
                <li>Nail the 90s</li>
                <li class="text-danger">Casual style</li>
                <li>New Look</li>
                <li>Sport</li>
                <li>Vintage</li>
                <li>Classical style</li>
            </ul>
        </li>
        <li class="filter">
            <h2>Product type</h2>
            <ul class="filter_items text-gray">
                <li class="text-dark">Not selected</li>
                <li>Coats & Jackets</li>
                <li>Dresses</li>
                <li>Jersey Tops</li>
            </ul>
        </li>
        <li class="filter">
            <h2>Color</h2>
            <ul class="filter_items text-gray">
                <li class="text-dark">Not selected</li>
                <li>Black</li>
                <li>Blue</li>
                <li>Red</li>
                <li>Green</li>
                <li>Golden</li>
            </ul>
        </li>
        <li class="filter">
            <h2>Brand</h2>
            <ul class="filter_items text-gray">
                <li>Not selected</li>
                <li>Chi cji London</li>
                <li class="text-danger">Antipodium</li>
                <li>Adidas</li>
                <li>New Balance</li>
                <li>River Island</li>
            </ul>
        </li>
        <li class="filter">
            <h2>Size</h2>
            <ul class="filter_items text-gray">
                <li>Not selected</li>
                <li>UK 2</li>
                <li class="text-danger">UK 18</li>
                <li>UK 18L</li>
                <li>UK 20</li>
                <li>UK 20L</li>
                <li>UK 20S</li>
                <li>UK 22S</li>
                <li>UK 22</li>
            </ul>
        </li>
        <li class="filter">
            <h2>Price range</h2>
            <ul class="filter_items text-gray">
                <li class="text-dark">Not selected</li>
                <li>To £99</li>
                <li>£100-£299</li>
                <li>From £300</li>
            </ul>
        </li>
    </ul>
        `;
};

window.addEventListener("DOMContentLoaded", renderMobileFiltersComponent);
window.addEventListener("resize", renderMobileFiltersComponent);