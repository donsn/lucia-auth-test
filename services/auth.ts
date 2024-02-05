import { Lucia, generateId } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

const adapter = new MongodbAdapter(
	mongoose.connection.collection("sessions"),
	mongoose.connection.collection("users")
);

export const lucia = new Lucia(adapter, {
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