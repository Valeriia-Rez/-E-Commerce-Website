const searchBtn = document.querySelector("[data-selector='search_icon']");
const searchInput = document.querySelector("[data-selector='search_field']");
console.log(searchBtn);

const openSearch = () => {
    console.log(searchInput);

    if (searchInput.classList.contains("d-none")) {
        searchInput.classList.remove("d-none");
    }
}