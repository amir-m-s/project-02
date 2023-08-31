// Courses search section

const captain_price = document.querySelector("#price-range-input");
let min_price = 0, max_price = 4000000;
const price_range = document.querySelector("#price-range");

function get_price() {
    let current_price = captain_price.value;
    price_range.innerHTML = `${current_price} تومان`;
}


// FAQ section 

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".ans");

for (let i=0; i < questions.length; i++) {
	questions[i].addEventListener("click", function (e) {
		this.classList.toggle("faq-active");
	});
}

// Website mobile menu
const toggler = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu")
toggler.addEventListener("click", () => {
	if (!menu.classList.contains("active"))
		menu.classList.add("active");
	else
		menu.classList.remove("active");
});

// Go to top button
const gtt_btn = document.querySelector(".gotop");

function scroll_top() {
	window.scrollTo({top: 0, behavior: "smooth"});
}

gtt_btn.addEventListener("click", scroll_top);