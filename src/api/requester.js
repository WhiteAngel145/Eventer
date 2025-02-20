import { userUtils } from './user.js';
const baseUrl = 'http://localhost:3030';

async function requester(method, url, data) {
	
	const options = {
		method,
		headers: {},
	};

	const userData = userUtils.getUserData();

	if (data) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	if (userData) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	try {
		const response = await fetch(baseUrl + url, options);
		if (!response.ok) {
			const error = await response.json();
			
			if (response.status === 403 && error.message === 'Invalid access token') {
				userUtils.clearUserData();
			}

			throw new Error(error.message);
		}

		if (response.status === 204) {
			return response.json();
		}
	} catch (error) {
		alert(error.message);
		throw error;
	}
}

export const api = {
	get: (url) => requester('GET', url),
	post: (url, data) => requester('POST', url, data),
	put: (url, data) => requester('PUT', url, data),
	del: (url) => requester('DELETE', url),
}