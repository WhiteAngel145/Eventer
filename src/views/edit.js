import { render, html } from "../lib/lit-html.js";
import { getEventById, editEvent } from "../services/dataServices.js";
import page from "../lib/page.js";

const template = (onEdit, data) => html`
        <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${onEdit} class="edit-form">
              <input type="text" name="name" id="name" placeholder="Event" value=${data.name} />
              <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" value=${data.imageUrl} />
              <input type="text" name="category" id="event-category" placeholder="Category" value=${data.category} />
              <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50" >${data.description}</textarea>  
              <label for="date-and-time">Event Time:</label>
              <input type="text" name="date" id="date" placeholder="When?" value=${data.date} />
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function editView(ctx) {
  const idEvent = ctx.params.id;
  const data = await getEventById(idEvent);

	render(template(editEventHandler.bind(null, idEvent), data));
}

export async function editEventHandler(idEvent, event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (data.name == '' || data.imageUrl == '' || data.category == '' || data.description == '' || data.date == '') {
    return alert('All fields are required!');
  }

  const response = await editEvent(idEvent, data);
  page.redirect(`/details/${idEvent}`);
  console.log(response);
  
}