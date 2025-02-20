import { render, html } from "../lib/lit-html.js";
import { createEvent } from "../services/dataServices.js";
import page from "../lib/page.js";

const template = (onCreate) => html`
        <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form @submit=${onCreate} class="create-form">
              <input type="text" name="name" id="name" placeholder="Event"/>
              <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL"/>
              <input type="text" name="category" id="event-category" placeholder="Category" />
              <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50" ></textarea>
              <input type="text" name="date" id="date" placeholder="When?" />
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export async function createView(ctx) {
	render(template(createEventHandler));
}

async function createEventHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (data.name == '' || data.imageUrl == '' || data.category == '' || data.description == '' || data.date == '') {
    return alert('All fields are required!');
  }

  await createEvent(data);
  page.redirect('/events');
}