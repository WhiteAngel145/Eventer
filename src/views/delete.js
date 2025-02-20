import { deleteEvent } from "../services/dataServices.js";
import page from "../lib/page.js";

export async function deleteView(ctx) {
	const idEvent = ctx.params.id;
	if (!confirm('Are you sure you want to delete this event?')) {
		return;
	}
	await deleteEvent(idEvent);
	page.redirect('/events');
}
