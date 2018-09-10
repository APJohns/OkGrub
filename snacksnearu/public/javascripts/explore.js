const placeList = document.getElementsByClassName('place');

let index = 0;
showPlaces(index);

function showPlaces(n) {
	if (n > placeList.length - 1) index = 0;
	if (n < 0) index = placeList.length - 1;
	for (let i = 0; i < placeList.length; i++) placeList[i].style.display = 'none';
	placeList[index].style.display = 'flex';
}

document.getElementById('next').addEventListener('click', () => showPlaces(++index));
document.getElementById('back').addEventListener('click', () => showPlaces(--index));

const names = document.getElementsByClassName('name');
const moreInfo = document.getElementsByClassName('moreInfo');
for (let i = 0; i < names.length; i++) {
	names[i].addEventListener('click', () => {
		moreInfo[i].classList.toggle('slide');
	});
}