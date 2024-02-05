import database from "./base";
import { Schema } from "mongoose";

const Session = database.model(
	"Session",
	new Schema(
		{
			_id: {
				type: String,
				required: true
			},
			user_id: {
				type: String,
				required: true
			},
			expires_at: {
				type: Date,
				required: true
			}
		} as const,
		{ _id: false }
	)
);

export { Session };