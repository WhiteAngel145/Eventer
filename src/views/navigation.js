import { baseRender, html } from "../lib/lit-html.js";
import { userUtils } from "../utils/userUtils.js";

const container = document.querySelector('#wrapper header');

const template = (user) => html`
	<a id="logo" href="/"
	  ><img id="logo-img" src="./images/logo.png" alt=""
	/></a>
	<nav>
	  <div>
	    <a href="/events">Events</a>
	  </div>
	  ${user
		? html`
			<div class="user">
	  		  <a href="/create">Add Event</a>
	  		  <a href="/logout">Logout</a>
	  		</div>
		`
		: html`
			<div class="guest">
	  		  <a href="/login">Login</a>
	  		  <a href="/register">Register</a>
	  		</div>
		`
	  }
	</nav>
`;

export function navigationView(ctx) {
	const user = userUtils.getUserData();
	baseRender(template(user), container);
}