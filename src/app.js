import page from "./lib/page.js";


page('/', () => console.log('Home Page'));
page('/events', () => console.log('Events Page'));
page('/create', () => console.log('Create Page'));
page('/logout', () => console.log('Logout Page'));
page('/login', () => console.log('Login Page'));
page('/register', () => console.log('Register Page'));
// page('/details/:id', () => console.log('Details Page'));
// page('/edit/:id', () => console.log('Edit Page'));
// page('/delete', () => console.log('Delete Page'));
// page('/going', () => console.log('Going Page'));

page();