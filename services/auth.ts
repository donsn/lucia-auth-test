import { Lucia, generateId } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import database from "./base";
import { Argon2id } from "oslo/password";

const adapter = new MongodbAdapter(
	database.collection("sessions"),
	database.collection("users")
);

export const auth = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	},
	getSessionAttributes: (attributes: any ) => {
		return {
		};
	},
	getUserAttributes: (attributes: any) => {
		return {
			username: attributes.username
		};
	},
});

export const generateUserId = generateId;
export const passwordUtil = new Argon2id();