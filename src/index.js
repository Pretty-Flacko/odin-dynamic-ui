import "./style.css";

function initDropdown(dropdown) {
	const toggle = dropdown.querySelector(".dropdown__toggle");

	toggle.addEventListener("click", (e) => {
		e.stopPropagation();
		dropdown.classList.toggle("is-open");
	});
}

document.querySelectorAll("[data-dropdown]").forEach(initDropdown);
