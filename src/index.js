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
	const track = carousel.querySelector(".carousel__track");
	const slides = carousel.querySelectorAll(".carousel__slide");
	const dotsContainer = carousel.querySelector(".carousel__dots");
	const dots = [];

	let interval = setInterval(() => {
		goToSlide(currentIndex + 1);
	}, 5000);

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(() => {
			goToSlide(currentIndex + 1);
		}, 5000);
	}

	slides.forEach((_, i) => {
		const dot = document.createElement("button");
		dot.classList.add("carousel__dot");
		dot.addEventListener("click", () => {
			goToSlide(i);
			resetInterval();
		});

		dots.push(dot);
		dotsContainer.appendChild(dot);
	});

	let currentIndex = 0;

	function goToSlide(index) {
		if (index < 0) {
			currentIndex = slides.length - 1;
		} else if (index >= slides.length) {
			currentIndex = 0;
		} else {
			currentIndex = index;
		}

		track.style.transform = `translateX(-${currentIndex * 100}%)`;

		dots.forEach((dot) => dot.classList.remove("is-active"));
		dots[currentIndex].classList.add("is-active");
	}

	goToSlide(0);

	const prevBtn = carousel.querySelector(".carousel__btn--prev");
	const nextBtn = carousel.querySelector(".carousel__btn--next");

	prevBtn.addEventListener("click", () => {
		goToSlide(currentIndex - 1);
		resetInterval();
	});
	nextBtn.addEventListener("click", () => {
		goToSlide(currentIndex + 1);
		resetInterval();
	});
}

document.querySelectorAll("[data-carousel]").forEach(initCarousel);
