const form = document.getElementById('searchForm');
const termInput = document.getElementById('term');
const btnSubmit = document.getElementById('btnSubmit');

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

			document.getElementById('gettingLoc').innerText = 'Found you!';
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

}
else getLocation();