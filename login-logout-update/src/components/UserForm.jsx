/** @format */

import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import "./UserForm.css";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.svg";
import linkedin from "../Images/linkedin.svg";
import gmail from "../Images/gmail.svg";
import RegisterImage2 from "../Images/RegisterImage2.jpeg";

const UserForm = (props) => {
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	//const [confirmpassword, setconfirmpassword] = useState("");
	const [errors, seterrors] = useState([]);

	const Create = (e) => {
		e.preventDefault();

		const newUser = { firstname, lastname, email, password };
		console.log(newUser);

		setfirstname("");
		setlastname("");
		setemail("");
		setpassword("");
		// setconfirmpassword('')

		axios
			.post("http://localhost:5000/api/registerUser", newUser, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res, "in thes RESPOND FROM USERFORM");
				if (res.data.errors) {
					seterrors(res.data.errors);
				} else {
					console.log(`still in the response`);
					navigate(`/userpage/${res.data.id}`);
				}
			})
			.catch((error) => console.log(`Here is error from USERFORM ${error}`));
	};

	return (
		<div className="section">
			<div className="imgBx">
				<img src={RegisterImage2} alt="pict" />
			</div>
			<div className="contentBx">
				<div className="formBx">
					<h2>Register</h2>
					<form onSubmit={Create}>
						<div className="inputBx">
							<span>Firstname</span>
							<input
								type="text"
								name="firstname"
								onChange={(e) => setfirstname(e.target.value)}
								value={firstname}
							/>
							{errors.firstname ? (
								<p className="text-danger">
									{errors.firstname.properties.message}
								</p>
							) : (
								""
							)}
						</div>
						<div className="inputBx">
							<span>Lastname</span>
							<input
								type="text"
								name="Lastname"
								onChange={(e) => setlastname(e.target.value)}
								value={lastname}
							/>
							{errors.lastname ? (
								<p className="text-danger">
									{errors.lastname.properties.message}
								</p>
							) : (
								""
							)}
						</div>
						<div className="inputBx">
							<span>Email</span>
							<input
								type="text"
								name="Email"
								onChange={(e) => setemail(e.target.value)}
								value={email}
							/>
							{errors.email ? (
								<p className="text-danger">{errors.email.properties.message}</p>
							) : (
								""
							)}
						</div>
						<div className="inputBx">
							<span>Password</span>
							<input
								type="password"
								name="Password"
								onChange={(e) => setpassword(e.target.value)}
								value={password}
							/>
							{errors.password ? (
								<p className="text-danger">
									{errors.password.properties.message}
								</p>
							) : (
								""
							)}
						</div>
						{/* <div className="inputBx">
							<span>Confirm Password</span>
							<input
								type="password"
								name="Password"
								onChange={(e) => setconfirmpassword(e.target.value)}
								value={confirmpassword}
							/>
							{errors.confirmpassword ? (
								<p className="text-danger">
									{errors.confirmpassword.properties.message}
								</p>
							) : (
								""
							)}
						</div> */}
						<div className="inputBx">
							<input type="submit" value="Sign Up" name="" />
						</div>
						<div className="inputBx">
							<p>
								Already have an account? <Link to="/logInUser">Sign in</Link>
							</p>
						</div>
					</form>
					<h3>Sign Up using Social media Accounts</h3>
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

export default UserForm;
