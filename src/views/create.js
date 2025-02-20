import { render, html } from "../lib/lit-html.js";

const template = () => html`
        <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form class="create-form">
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
	render(template());
}