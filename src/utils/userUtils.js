
function getUserData() {
	const userData = localStorage.getItem('userData');
	return userData ? JSON.parse(userData) : null;
}

function setUserData(userData) {
	localStorage.setItem('userData', JSON.stringify(userData));
	
}

function clearUserData() {
	localStorage.removeItem('userData');
}