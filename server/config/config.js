/** @format */

// connecting a DB

const mongoose = require("mongoose");

module.exports = (DB_name) => {
	mongoose
		.connect("mongodb://localhost/UserDB-Auth", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			useCreateIndex: true,
		})
		.then(() => console.log(`connection established with Data Base ${DB_name}`))
		.catch((error) => console.log(`error, DB not connected`));
};
