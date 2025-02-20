import { render, html } from "../lib/lit-html.js";
import { getEvents } from "../services/dataServices.js";

const template = (events) => html`
	    <h2>Current Events</h2>
        <section id="dashboard">
        ${events.length > 0
          ? events.map(eventTemplate) 
          : html`<h4>No Events yet.</h4>`
          }
        </section>
`;

const eventTemplate = (data) => html`
  <div class="event">
    <img src=${data.imageUrl} alt="example1" />
    <p class="title">${data.name}</p>
    <p class="date">${data.date}</p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
  </div>
`;

export async function eventsView(ctx) {
  const events = await getEvents();
	render(template(events));
}