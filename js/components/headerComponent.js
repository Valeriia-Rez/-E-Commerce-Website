const openSearch = () => {
    const headerNavBar = document.querySelector("[data-selector='header_navbar']");
    const windowWidth = window.innerWidth;
    if (windowWidth > 1024) return;
    if (headerNavBar && headerNavBar.classList.contains("expanded")) {
        headerNavBar.classList.remove("expanded");
    } else {
        headerNavBar.classList.add("expanded");
    }
}

const openMobileHandler = () => {
    const openMobileBtn = document.querySelector("[data-selector='mobile_open']");
    const closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
    const mobileMenu = document.querySelector("[data-selector='mobile_menu']");
    const verticalDivider = document.querySelector("[data-selector='vertical_divider']");

    if (mobileMenu && mobileMenu.classList.contains("d-none")) {

        mobileMenu.classList.remove("d-none");
        openMobileBtn.classList.add("d-none");
        closeMobileBtn.classList.remove("d-none");
        verticalDivider.classList.add("d-none");

    }

}

const closeMobileHandler = () => {
    const openMobileBtn = document.querySelector("[data-selector='mobile_open']");
    const closeMobileBtn = document.querySelector("[data-selector='mobile_close']");
    const mobileMenu = document.querySelector("[data-selector='mobile_menu']");
    const verticalDivider = document.querySelector("[data-selector='vertical_divider']");

    if (!mobileMenu.classList.contains("d-none")) {
        mobileMenu.classList.add("d-none");
        openMobileBtn.classList.remove("d-none");
        closeMobileBtn.classList.add("d-none");
        verticalDivider.classList.remove("d-none");
    }
}



const renderHeaderComponent = () => {

        let header = document.querySelector("[data-selector='header']");
        const storage = new Storage();
        const { itemsCount, totalCost } = storage.getShoppingCart();

        header.innerHTML = `
    <div class="header d-flex">
        <div class="header_logo d-flex f-size-26-tablet">
            <h3 class="logo d-none d-block-tablet-up f-size-24"><a href="start.html">Template</a></h3>
            <h3 class="logo d-none-tablet-up f-size-24"><a href="start.html">TL</a></h3>
        </div>
        <div class="header_shopArea d-flex align-items-center">
            <a href="#" class="header_email d-none d-block-tablet-up">E-mail sing up</a>
            <a href="shopping-bag.html" class="header_bag"><img src="img/ico_bag.jpg" alt="bag" class="header_icon">Bag ${parseInt(totalCost) ? `£${totalCost.toFixed(2)}` : ""} (${itemsCount || "0"})</a>
        </div>
        <div class="vertical_divider d-none-tablet-up" data-selector="vertical_divider"></div>
        <div class="mobile_icon d-none-tablet-up f-size-20">
            <div onclick="openMobileHandler()" data-selector="mobile_open">
                <span class="gamburger"></span>
                <span class="gamburger"></span>
                <span class="gamburger"></span>
            </div>
            <span onclick="closeMobileHandler()" class="d-none text-danger" data-selector="mobile_close">&#10006;</span>
        </div>
        </div>
        <div class="mobile_menu d-none" data-selector="mobile_menu">
            <nav>
                <ul class="mobile_menu_list f-size-24">
                    <li><a href="#" class="mobile_link text-danger">Women</a></li>
                    <li><a href="#" class="mobile_link text-dark">Men</a></li>
                    <li><a href="#" class="mobile_link text-dark">Handbags</a></li>
                    <li><a href="#" class="mobile_link text-dark">Accessories</a></li>
                    <li><a href="#" class="mobile_link text-dark">Sale</a></li>
                    <li><a href="#" class="mobile_link text-dark">New Arrivals</a></li>
                    <li><a href="#" class="mobile_link text-dark">Clearance</a></li>
                    <li><a href="#" class="mobile_link text-dark">Store Locator</a></li>
                </ul>
            </nav>
        <div class="mobile_menu_search">
            <div class="search_wrapper">
                <input type="search" class="search_field" data-selector="search_field" placeholder="Style Name">
                <img src="img/ico.jpg" alt="search_icon" class="search_icon">
            </div>
        </div>
        </div>
        <div class="header_navbar d-none d-flex-tablet-up justify-between" data-selector="header_navbar">
            <nav class="nav_main f-size-13-desktop">
                <a href="#" class="header_nav">Women</a>
                <a href="#" class="header_nav">Men</a>
                <a href="#" class="header_nav">Handbags</a>
                <a href="#" class="header_nav">Accessories</a>
                <a href="#" class="header_nav">Sale</a>
                <a href="#" class="header_nav">New Arrivals</a>
                <a href="#" class="header_nav">Clearance</a>
                <a href="#" class="header_nav">Store Locator</a>
            </nav>
        <div class="menu_search">
            <div class="search_wrapper">
                <input type="search" class="search_field d-none" data-selector="search_field" placeholder="Style Name">
                <img src="img/ico.jpg" alt="search_icon" class="search_icon" onclick="openSearch()" data-selector="search_icon">
            </div>
        </div>
    </div>`;

}

window.addEventListener("DOMContentLoaded", renderHeaderComponent);