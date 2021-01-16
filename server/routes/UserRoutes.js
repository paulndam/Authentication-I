/** @format */

const UserController = require("../controllers/UserController");
const ClientController = require("../controllers/ClientController");
const { authenticate } = require("../config/jwt");

module.exports = (app) => {
	// User Routes
	app.post("/api/registerUser", UserController.Register);
	app.post("/api/LogInUser", UserController.LogIn);
	app.get("/api/singleUser/:_id", UserController.singleUser);
	app.get("/api/getAllUsers", UserController.getAllUsers);
	app.put("/api/updatOneUser/:_id", UserController.upDateUser);
	app.delete("/api/LogOut", UserController.LogOut);
	app.delete("/api/deleteUser/:_id", UserController.DeleteUser);

	// Client Routes
	app.put("/api/addClient/:_id", UserController.addClient);
	app.get("/api/singleClient/:_id", ClientController.getOneClient);
};
