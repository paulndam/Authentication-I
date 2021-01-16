/** @format */

require("dotenv").config();

console.log("UserController.js");

// requiring the user mode

const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
	Register(req, res) {
		console.log("creating the user");
		console.log(req.body);
		User.create(req.body)
			.then((newUser) =>
				res.json({
					status: "Successfuly created a new user",
					id: newUser._id,
				})
			)
			.catch((error) => res.json(error));
	},

	async LogIn(req, res) {
		// find users by email
		// confrim the password is a match
		// then store the users information

		const { email, password } = req.body;
		const errorMessage = "check email and password";

		const user = await User.findOne({ email });

		if (user === null) {
			console.log(user);
			// throw a new error
			return res.json({ message: errorMessage });
		}

		// check password match
		const check = await bcrypt.compare(password, user.password);
		console.log(check);
		if (check === false) {
			// throw a new error
			return res.json({ message: errorMessage });
		}
		res.json({
			status: "Success loging back into your account",
			userId: user._id,
		});

		const token = jwt.sign(
			{
				_id: user._id,
				email: user.email,
			},
			process.env.JWT_SECRET
		);
		console.log(`Here is our Token from the .env file ${token}`);

		// storing the user information in cookies
		res.cookie("token", token, { http: true });
		res.json({ message: "you got it all", token });
	},
	catch(error) {
		console.log(error);
		res.json({ message: errorMessage, error });
	},

	LogOut(req, res) {
		res.clearCookie("usertoken");
		res.json({ message: "You are logged Out" });
	},

	singleUser(req, res) {
		console.log(req.body);
		User.findOne({ _id: req.params._id })
			.then((user) => res.json(user))
			.catch((error) => res.json({ message: error.message }));
	},

	getAllUsers(req, res) {
		User.find()
			.then((users) => res.json(users))
			.catch((error) =>
				res.json({ message: "could not get all users" }, error)
			);
	},

	addClient(req, res) {
		User.findByIdAndUpdate(
			{ _id: req.params._id },
			{ $push: { clients: req.body } }
		)
			.then(() => res.json({ message: "client added" }))
			.catch((error) => res.json(error));
	},

	// clientOfUser: async (req, res) => {
	// 	const { _id } = req.params;
	// 	const user = await User.findById(_id).populate("Client");

	// 	res.send(user.Client);

	// 	// User.findById({
	// 	// 	_id: req.params._id,
	// 	// })
	// 	// 	.populate("Client")
	// 	// 	.then((user) => res.json(user.Client))
	// 	// 	.catch((error) => res.json({ message: "could not add client" }));
	// },

	upDateUser(req, res) {
		console.log(req.params._id);
		User.findOneAndUpdate(
			{ _id: req.params._id },
			req.body,
			// { new: true },
			{ runValidators: true }
		)
			.then((result) => res.json({ user: result }))
			.catch((err) =>
				res.json({ message: "Error, User not Updated", error: err.message })
			);
	},

	DeleteUser(req, res) {
		User.deleteOne({
			_id: req.params._id,
		})
			.then((deleteUser) =>
				res.json({ user: deleteUser, message: "User Deleted" })
			)
			.catch((err) =>
				res.json({ message: "Error, User not Deleted", error: err.message })
			);
	},
};
