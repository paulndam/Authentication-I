/** @format */

import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import UserForm from "./components/UserForm";
import UserLogInForm from "./components/UserLogInForm";
import UserPage from "./components/UserPage";

function App() {
	return (
		<div className="App">
			<Router>
				<UserForm path="/" />
				<UserLogInForm path="/logInUser" />
				<UserPage path="/userpage/:_id" />
			</Router>
		</div>
	);
}

export default App;
