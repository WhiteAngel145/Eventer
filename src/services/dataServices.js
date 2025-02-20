import { api } from '../api/requester.js';

const endpoints = {
	events: '/data/events?sortBy=_createdOn%20desc',
	eventById: (idEvent) => `/data/events/${idEvent}`,
	createEvent: '/data/events',
	editEvent: (idEvent) => `/data/events/${idEvent}`,
	deleteEvent: (idEvent) => `/data/events/${idEvent}`,
	goToEvent: (idEvent) => '/data/going',
}

export async function getEvents() {
	const events = await api.get(endpoints.events);
	return events;
}

export async function getEventById(idEvent) {
	const event = await api.get(endpoints.eventById(idEvent));
	return event;
}

export async function createEvent(data) {
	const event = await api.post(endpoints.createEvent, data);
	return event;
}

export async function editEvent(idEvent, data) {
	const event = await api.put(endpoints.editEvent(idEvent), data);
	return event;
}

export async function deleteEvent(idEvent) {
	const event = await api.del(endpoints.deleteEvent(idEvent));
	return event;
}
