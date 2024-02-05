
// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}

interface DatabaseSessionAttributes {
	// country: string;
}
interface DatabaseUserAttributes {
	username: string;
}