window.onload = () => {
	const card = document.getElementById('place');
	const yelpLogo = document.getElementById('yelpLogo');
	const placeImg = document.getElementById('place-image');
	const placeName = document.getElementById('name');
	const placeRating = document.getElementById('rating');
	const placePhone = document.getElementById('phone');
	const placeDistance = document.getElementById('distance');
	const placeAddress = document.getElementById('address');

	const loader = document.getElementById('loader');

	const saved = [];

	if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(position => {
		loader.style.left = '100%';
		loader.style.position = 'fixed';
		loader.style.marginRight = '-100%';
		loader.style.opacity = 0;
		console.log(position.coords.latitude, position.coords.longitude);

		// Send Position Data to Server
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let res = JSON.parse(this.responseText);
				console.log(res);
				let i = 0;
				showPlace(res, i);
				document.getElementById('yes').addEventListener('click', () => {
					savePlace(res[i].id);
					showPlace(res, ++i);
				});
				document.getElementById('no').addEventListener('click', () => {
					showPlace(res, ++i);
				});
			}
		};
		xhttp.open('POST', '', true);
		xhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
		xhttp.send(JSON.stringify({
			lon: position.coords.longitude,
			lat: position.coords.latitude
		}));
	});

	} else {
		console.log('Sneaky Beaky');
	}

	// Inputs data into html elements
	function showPlace(res, i) {
		console.log(i);
		if (i < res.length && i >= 0) {
			yelpLogo.href = res[i].url;
			placeImg.style.backgroundImage = `url('${res[i].image_url}')`;
			placeName.innerText = res[i].name;
			if (res[i].rating % 1 == 0) placeRating.src = `/images/yelp_stars/regular_${Math.floor(res[i].rating)}.png`;
			else placeRating.src = `/images/yelp_stars/regular_${Math.floor(res[i].rating)}_half.png`;
			placePhone.innerHTML = `<a href="${res[i].phone}">${res[i].display_phone}</a>`;
			placeDistance.innerText = `${Math.round(res[i].distance)} Meters Away`;
			placeAddress.innerHTML = `${res[i].location.display_address[0]}<br>${res[i].location.display_address[1]}`;
		}
		else {
			console.error("Error: Tried to display place that doesn't exist (Out of bounds)");
		}
	}

	function savePlace(id) {
		saved.push(id);
		document.getElementById('saved-list').innerHTML += `<li>${id}</li>`;
	}
}