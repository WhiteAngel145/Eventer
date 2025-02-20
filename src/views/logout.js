import { logout } from "../services/userServices.js";
import page from "../lib/page.js";

export async function logoutView(ctx) {
	await logout();
	page.redirect('/');
}