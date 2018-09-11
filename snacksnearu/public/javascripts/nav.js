const button = document.getElementById('navButton');
const nav = document.getElementById('nav');

let open = false;

button.addEventListener('click', () => {
	if (open) {
		nav.style.marginLeft = '-100%';
		nav.style.opacity = '0';
		open = false;
	} else {
		nav.style.marginLeft = '0';
		nav.style.opacity = '1';
		open = true;
	}
});