const captain_price = document.querySelector("#price-range-input");
let min_price = 0, max_price = 4000000;
const price_range = document.querySelector("#price-range");

function get_price() {
    let current_price = captain_price.value;
    price_range.innerHTML = `${current_price} تومان`;
}