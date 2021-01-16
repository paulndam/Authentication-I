/** @format */

require("dotenv").config();

console.log("ClientController.js");

// requiring the user mode

const Client = require("../model/Client");
const User = require("../model/User");

module.exports = {
	createClient: async (req, res) => {
		console.log(req.params);

		user = req.params;
		_id = user._id;

		const { firstname, lastname, Statez } = req.body;

		const client = await Client.create({
			firstname,
			lastname,
			Statez,
			user: _id,
		});
		await client.save();

		const userById = await User.findById(_id);
		userById.Client.push(client);
		await userById.save();

		return res.send(userById);
	},

	getOneClient(req, res) {
		console.log(req.body);
		Client.findOne({ _id: req.params._id })
			.then((client) => res.json(client))
			.catch((error) =>
				res.json({ message: `can't het specified user` }, error)
			);
	},

	// userByClient: async (req, res) => {
	// 	const { _id } = req.params;
	// 	const userByClient = await Client.findById(_id).populate("User");
	// 	res.send(userByClient);
	// },
};
