/** @format */

const mongoose = require("mongoose");
const userSchema = require("./User");

const ClientSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "firstname is required"],
		minlength: [3, " gotta be at least 3 characters"],
	},
	lastname: {
		type: String,
		required: [true, "lastname is required"],
		minlength: [3, "lastname gotta be at least 3 characters"],
	},
	Statez: {
		type: String,
		required: [true, "state is required"],
		minlength: [2, "minimum of two letters"],
	},
	User: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		userSchema,
	],
});

const Cleint = mongoose.model("Cleint", ClientSchema);

module.exports = Cleint;
