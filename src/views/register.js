import page from "../lib/page.js";
import { render, html } from "../lib/lit-html.js";
import { register } from "../services/userServices.js";

const template = (onRegister) => html`
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="register-form">
          <input type="text" name="email" id="register-email" placeholder="email" />
          <input type="password" name="password" id="register-password" placeholder="password" />
          <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section>
`;

export async function registerView(ctx){
	render(template(registerEventHandler));
}

async function registerEventHandler(event){
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
		rePass: formData.get('re-password'),
	}

	if(data.email === '' || data.password === '' || data.rePass === ''){
		return alert('All fields are required!');
	}

	if(data.password != data.rePass){
		return alert('Passwords don\'t match!');
	}

	try {
		const result = await register({ email: data.email, password: data.password });
		if (result) {
			page.redirect('/');
		}
	} catch (error) {
		alert(error.message);
	}
}