let located = false;
let isSubmit = false;
const form = document.getElementById('searchForm');

function getLocation() {
	if('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position.coords.latitude, position.coords.longitude);
			let lat = document.getElementById('lat');
			let lon = document.getElementById('lon');
			lat.value = position.coords.latitude;
			lon.value = position.coords.longitude;
			located = true;

			if (isSubmit) form.submit();

			document.getElementById('gettingLoc').innerText = 'Found you!';
			document.getElementById('btnSubmit').disabled = false;
		});

		} else {
			console.log("I can't seem to find you :/");
		}
}

document.getElementById('btnSubmit').addEventListener('click', () => {
	if (located) form.submit();
	else isSubmit = true;
});

const latInput = document.getElementById('lat');
const lonInput = document.getElementById('lon');
if (latInput.value != '' && lonInput.value != '') {
	located = true;
} else getLocation();