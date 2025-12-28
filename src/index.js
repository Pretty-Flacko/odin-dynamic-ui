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
