import { navigationView } from "../views/navigation.js";

export function navMiddleware(ctx, next) {
	navigationView(ctx);
	next();
}
