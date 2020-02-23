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