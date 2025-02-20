import { render, html, nothing } from "../lib/lit-html.js";
import { getEventById } from "../services/dataServices.js";
import { userUtils } from "../utils/userUtils.js";

const template = (data, isOwner, userData) => html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt=${data.name} />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
          Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-date">
          Date:<span id="date">${data.date}</span></p>
        <div id="info-wrapper">
          <div id="details-description">
            <span>${data.description}</span>
          </div>
        </div>
        <h3>Going: <span id="go">0</span> times.</h3>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${userData
              ? isOwner
                ? html`<a href="/edit/${data._id}" id="edit-btn">Edit</a>
                       <a href="/delete/${data._id}" id="delete-btn">Delete</a>`
                : html`<a href="#" id="go-btn">Going</a>`
              : nothing
          }
        </div>
      </div>
    </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const data = await getEventById(id);
  const userData = userUtils.getUserData();
  const isOwner = userData && userData._id === data._ownerId;

	render(template(data, isOwner, userData));
}