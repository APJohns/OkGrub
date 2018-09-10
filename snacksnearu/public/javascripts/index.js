if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(position => {
		console.log(position.coords.latitude, position.coords.longitude);
		let lat = document.getElementById('lat');
		let lon = document.getElementById('lon');
		lat.value = position.coords.latitude;
		lon.value = position.coords.longitude;
	});

	} else {
		console.log('Sneaky Beaky');
	}