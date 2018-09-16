const form = document.getElementById('searchForm');
const termInput = document.getElementById('term');
const btnSubmit = document.getElementById('btnSubmit');
const laoder = document.getElementById('loader');

function getLocation() {
	if('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position.coords.latitude, position.coords.longitude);
			let lat = document.getElementById('lat');
			let lon = document.getElementById('lon');
			lat.value = position.coords.latitude;
			lon.value = position.coords.longitude;
			located = true;

			termInput.disabled = false;
			btnSubmit.disabled = false;
			loader.style.opacity = 0;
			document.getElementById('loading-text').innerText = 'Found you!';
			document.getElementById('loading-text').style.color = 'rgba(71, 135, 209, 0.85)';
			laoder.addEventListener('transitionend', () => loader.style.display = 'none');

		});

		} else {
			console.log("I can't seem to find you :/");
		}
}

const latInput = document.getElementById('lat');
const lonInput = document.getElementById('lon');
if (latInput.value != '' && lonInput.value != '') {
	termInput.disabled = false;
	btnSubmit.disabled = false;
	loader.style.display = 'none';
}
else getLocation();