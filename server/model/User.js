/** @format */

const mongoose = require("mongoose");
const clientSchema = require("./Client");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: [true, "firstname line is required"],
			minlength: [3, " gotta be at least 3 characters"],
		},
		lastname: {
			type: String,
			required: [true, "lastname line is required"],
			minlength: [3, "lastname gotta be at least 3 characters"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "email line is required"],
			validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "enter valid email ",
		},
		password: {
			type: String,
			required: [true, "password line is required"],
			minlength: [8],
		},
		clients: [
			{ body: String, date: Date },
			// // {
			// // 	type: mongoose.Schema.Types.ObjectId,
			// // 	ref: "clients",
			// // },
			// clientSchema,
		],
	},
	{ timestamps: true }
);

// virtuall field to confirm password, creating an extra field but will not be stored in DB
// jsut a secondary verification process

// UserSchema.virtual("confirmpassword")
// 	.get(() => this._confirmpassword)
// 	.set((value) => (this._confirmpassword = value));

// // establishing verification and making sure all the fields are correct
// UserSchema.pre("validate", function (next) {
// 	if (this.password !== this._confirmpassword) {
// 		this.invalidate("confirmpassword", "password no match");
// 	}
// 	next();
// });

// now saving it, and then hashing the password once we got the authenticated user
UserSchema.pre("save", function (next) {
	bcrypt.hash(this.password, 10).then((hashedPw) => {
		this.password = hashedPw;
		next();
	});
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
