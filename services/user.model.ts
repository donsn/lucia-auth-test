import database from "./base";
import { Schema } from "mongoose";

export type UserType = {
    _id: string;
    __v?: any;
	email: string;
	hashed_password?: string;
	username?: string;
	firstName: string;
	lastName: string;
	phone: string;
	emailVerified?: boolean;
};

const User = database.model(
	"User",
	new Schema<UserType>(
		{
			_id: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true
			},
			username: {
				type: String,
				required: false,
				default: ""
			},
			firstName: {
				type: String,
				required: true
			},
			lastName: {
				type: String,
				required: true
			},
			phone: {
				type: String,
				required: false,
				default: ""
			},
			emailVerified: {
				type: Boolean,
				required: false,
				default: false
			},
			hashed_password: {
				type: String,
				required: false
			}
		} as const,
		{ _id: false }
	)
);

export { User };
