
function getUserData() {
	let userData = localStorage.getItem('userData');
	userData = JSON.parse(userData);
	return userData;
}

function setUserData(userData) {
	localStorage.setItem('userData', JSON.stringify(userData));
	
}

function clearUserData() {
	localStorage.removeItem('userData');
}

export const userUtils = {
	getUserData,
	setUserData,
	clearUserData,
};