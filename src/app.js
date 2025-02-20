import page from "./lib/page.js";
import { navMiddleware } from "./middlewares/navMiddleware.js";
import { createView } from "./views/create.js";
import { eventsView } from "./views/events.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logoutView } from "./views/logout.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

page(navMiddleware);

page('/', homeView);
page('/events', eventsView);
page('/create', createView);
page('/logout', logoutView);
page('/login', loginView);
page('/register', registerView);
// page('/details/:id', detailsView);
// page('/edit/:id', editView);
// page('/delete', () => console.log('Delete Page'));
// page('/going', () => console.log('Going Page'));

page();