/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "./UserLogInForm.css";
import LoginImage1 from "../Images/LoginImage1.jpeg";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.svg";
import linkedin from "../Images/linkedin.svg";
import gmail from "../Images/gmail.svg";

const UserLogInForm = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [errors, seterrors] = useState([]);

	const LogIn = (e) => {
		e.preventDefault();

		setemail("");
		setpassword("");

		axios
			.post(
				"http://localhost:5000/api/LogInUser",
				{ email, password },
				{ withCredentials: true }
			)
			.then((res) => {
				console.log(res);
				if (res.data.message) {
					seterrors(res.data.message);
				} else {
					navigate(`/userpage/${res.data.userId}`);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="section">
			<div className="imgBx">
				<img src={LoginImage1} alt="pict" />
			</div>
			<div className="contentBx">
				<div className="formBx">
					<h2>Sign In</h2>
					<form onSubmit={LogIn}>
						<div className="inputBx">
							<span>Email</span>
							<input
								type="text"
								name="logInEmail"
								onChange={(e) => setemail(e.target.value)}
								value={email}
							/>
							{errors ? <p className="text-danger">{errors}</p> : ""}
						</div>
						<div className="inputBx">
							<span>Password</span>
							<input
								type="password"
								name="logInPassword"
								onChange={(e) => setpassword(e.target.value)}
								value={password}
							/>
							{errors ? <p className="text-danger">{errors}</p> : ""}
						</div>

						<div className="inputBx">
							<input type="submit" value="Sign " name="" />
						</div>
						<div className="inputBx">
							<p>
								Don't have an account? <Link to="/">Sign Up</Link>
							</p>
						</div>
					</form>
					<h3>Login using Social media Accounts</h3>
					<ul className="sci">
						<li>
							<img src={facebook} alt="picz" />
						</li>
						<li>
							<img src={twitter} alt="picz" />
						</li>
						<li>
							<img src={instagram} alt="picz" />
						</li>
						<li>
							<img src={linkedin} alt="picz" />
						</li>
						<li>
							<img src={gmail} alt="picz" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserLogInForm;
