/** @format */

require("dotenv").config();
const mySecret = process.env.JWT_SECRET;
console.log(mySecret);

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const DB_name = process.env.DB_name;

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const DBConnection = require("./server/config/config")(DB_name);
require("./server/config/config");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allUserRoutes = require("./server/routes/UserRoutes");
allUserRoutes(app);

const server = app.listen(process.env.DB_PORT, () => {
	console.log(`Listening on PORT: ${process.env.DB_PORT}`);
});
