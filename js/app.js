const searchBtn = document.querySelector("[data-selector='search_icon']");
const searchInput = document.querySelector("[data-selector='search_field']");
const openMobileBtn = document.querySelector("[data-selector='mobile_open']");
const closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
const mobileMenu = document.querySelector("[data-selector='mobile_menu']");
const verticalDivider = document.querySelector("[data-selector='vertical_divider']");




const openSearch = () => {
    if (searchInput.classList.contains("d-none")) {
        searchInput.classList.remove("d-none");
    }
}

const openMobileHandler = () => {
    if (mobileMenu.classList.contains("d-none")) {
        mobileMenu.classList.remove("d-none");
        openMobileBtn.classList.add("d-none");
        closeMobileBtn.classList.remove("d-none");
        verticalDivider.classList.add("d-none");
    }

}

const closeMobileHandler = () => {
    if (!mobileMenu.classList.contains("d-none")) {
        mobileMenu.classList.add("d-none");
        openMobileBtn.classList.remove("d-none");
        closeMobileBtn.classList.add("d-none");
    }

}