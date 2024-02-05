import { auth } from "@/services/auth";

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof auth;
	}
}

interface DatabaseSessionAttributes {
	// country: string;
}
interface DatabaseUserAttributes {
	username: string;
}