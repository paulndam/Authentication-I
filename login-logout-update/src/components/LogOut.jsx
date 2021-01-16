/** @format */

import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "./LogOut.css";

const LogOut = () => {
	const logOut = (e) => {
		axios
			.delete("http://localhost:5000/api/LogOut", { withCredentials: true })
			.then((res) => {
				console.log(res);
				navigate(`/logInUser`);
			})
			.catch((error) => console.log(error));
	};

	return (
		<body>
			<button className="btn" onClick={logOut}>
				log out
			</button>
		</body>
	);
};

export default LogOut;
