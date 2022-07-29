function init() {
	shade = document.getElementById('shade');
	shadeIcon = document.getElementById('shadeIcon');
	shadeOn = false;

	body = document.getElementById('body');
	fullscreenIcon = document.getElementById('fullscreenIcon');
	fullscreenOn = false;
}

function toggleShade() {
	if (shadeOn) {
		shade.setAttribute('style', 'display:none');
		shadeIcon.setAttribute('name', 'sunny-outline');
	}
	if (!shadeOn) {
		shade.removeAttribute('style');
		shadeIcon.setAttribute('name', 'sunny');
	}
	shadeOn = !shadeOn;
}

function toggleFullscreen() {
	if (fullscreenOn) {
		document.exitFullscreen();
		fullscreenIcon.setAttribute('name', 'scan-outline');
	}
	if (!fullscreenOn) {
		body.requestFullscreen();
		fullscreenIcon.setAttribute('name', 'scan');
	}
	fullscreenOn = !fullscreenOn;
}

function loadHome() {
	window.location.href = '../index.html';
}

function getVolume() {
	url = window.location.href;
	volume = url.slice(-6, -5);
	return parseInt(volume);
}

function loadPrevious() {
	vol = getVolume();
	window.location.href = 'volume' + (vol - 1) + '.html';
}

function loadNext() {
	vol = getVolume();
	window.location.href = 'volume' + (vol + 1) + '.html';
}
