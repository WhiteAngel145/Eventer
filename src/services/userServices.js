import { api } from "../api/requester.js";
import { userUtils } from '../utils/userUtils.js';

const endpoints = {
	register: '/users/register',
	login: '/users/login',
	logout: '/users/logout',
}

export async function register(data) {
	const userData = await api.post(endpoints.register, data);
	userUtils.setUserData(userData);
	return userData;
}

export async function login(data) {
	const userData = await api.post(endpoints.login, data);
	userUtils.setUserData(userData);
	return userData;
}

export async function logout() {

	const result = await api.get(endpoints.logout);	
	userUtils.clearUserData();
	return result;
}