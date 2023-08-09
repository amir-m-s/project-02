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
		console.log(e.target);
		this.classList.toggle("faq-active");
	});
	console.log(questions[i].nodeName);
}

