const searchBtn = document.querySelector("[data-selector='search_icon']");
const headerNavBar = document.querySelector("[data-selector='header_navbar']");
const openMobileBtn = document.querySelector("[data-selector='mobile_open']");
const closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
const mobileMenu = document.querySelector("[data-selector='mobile_menu']");
const verticalDivider = document.querySelector("[data-selector='vertical_divider']");




const openSearch = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1024) return;
    if (headerNavBar && headerNavBar.classList.contains("expanded")) {
        headerNavBar.classList.remove("expanded");
    } else {
        headerNavBar.classList.add("expanded");
    }
}

const openMobileHandler = () => {

    if (mobileMenu && mobileMenu.classList.contains("d-none")) {
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