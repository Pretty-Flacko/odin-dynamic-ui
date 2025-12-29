import "./style.css";

function initDropdown(dropdown) {
	const toggle = dropdown.querySelector(".dropdown__toggle");

	toggle.addEventListener("click", (e) => {
		e.stopPropagation();
		dropdown.classList.toggle("is-open");
	});
}

document.querySelectorAll("[data-dropdown]").forEach(initDropdown);

document.addEventListener("click", () => {
	document.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
		dropdown.classList.remove("is-open");
	});
});

function initCarousel(carousel) {
	const track = document.querySelector(".carousel__track");

	let currentIndex = 0;

	function goToSlide(index) {
		currentIndex = index;
		track.style.transform = `translateX(-${index * 100}%)`;
	}

	goToSlide(0);

	const prevBtn = document.querySelector(".carousel__btn--prev");
	const nextBtn = document.querySelector(".carousel__btn--next");

	prevBtn.addEventListener("click", () => {
		goToSlide(currentIndex - 1);
	});
	nextBtn.addEventListener("click", () => {
		goToSlide(currentIndex + 1);
	});
}

document.querySelectorAll("[data-carousel]").forEach(initCarousel);
