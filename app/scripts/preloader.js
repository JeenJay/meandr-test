'use strict';

window.addEventListener('DOMContentLoaded', function () {
	let preloaderWrapper = document.getElementById('preloader');
	preloaderWrapper.setAttribute('class', 'animate');
	function loadSuccess() {
		document.body.removeChild(document.querySelector('#preloader'));
		document.body.removeAttribute('style');
		console.log('Загрузка завершена');
	}
	setTimeout(loadSuccess, 2000);
}, false);
