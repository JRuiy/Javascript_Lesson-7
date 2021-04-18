function selectUl() {
	var elements = document.querySelectorAll('ul>li');
	var calculate = 0
	for (var i = 0; i < elements.length; i++) {
		var currentElement = elements[i];
		currentElement.innerHTML = 'Hi guys, how are u?';
		calculate++;
	}
	alert(calculate);
}

function search() {
	var elements = document.querySelectorAll('ul>li>a');

	for (var i = 0; i < elements.length; i++) {
		var currentElem = elements[i];
		if (currentElem.matches('[href*="http://"]')
				|| currentElem.matches('[href*="ftp://"]')) {
			currentElem.setAttribute('class', 'external-red');
		}

	}
}
