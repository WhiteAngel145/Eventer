import { render, html } from "../lib/lit-html.js";

const template = () => html`
	    <h2>Current Events</h2>
        <section id="dashboard">
          <div class="event">
            <img src="./images/large_deniroparty_marquee.jpg" alt="example1" />
            <p class="title">
              Robert De Niro Themed Party
            </p>
            <p class="date">15.04.2023 from 17:00</p>
            <a class="details-btn" href="">Details</a>
          </div>
        </section>
        
        <h4>No Events yet.</h4>
`;

export async function eventsView(ctx) {
	render(template());
}