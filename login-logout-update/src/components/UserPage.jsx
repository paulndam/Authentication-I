/** @format */

import React, { useState, useEffect } from "react";
import "./UserPage.css";
import axios from "axios";
import { Link } from "@reach/router";
import script from "../script";
import ApexCharts from "react-apexcharts";
import one from "../Images/one.png";
import two from "../Images/two.png";
import "font-awesome/css/font-awesome.min.css";
import LogOut from "./LogOut";

const UserPage = (props) => {
	const [user, setuser] = useState({});
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [Statez, setStatez] = useState("");
	const [Clients, setClients] = useState([]);

	const getOneUser = () => {
		console.log(`In the UserPage`);
		console.log(props._id);

		axios
			.get("http://localhost:5000/api/singleUser/" + props._id)
			.then((res) => {
				console.log(res);
				setuser(res.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getOneUser();
	}, []);

	const addClient = (e, _id) => {
		e.preventDefault();

		axios
			.put(`http://localhost:5000/api/addClient/${_id}`, {
				firstname: firstname,
				lastname: lastname,
				Statez: Statez,
			})
			.then((res) => {
				console.log(res);
				getOneUser();
			})
			.catch((error) => console.log(error));
	};

	return (
		<body>
			<div className="container">
				<nav className="navbar">
					<div classNameName="nav__icon" onclick="toggleSidebar()">
						<i className="fa fa-bars"></i>
					</div>
					<div className="navbar__left">
						<a href="#">home</a>
						<a href="#">task</a>
						<a className="active_link" href="#">
							schedule
						</a>
					</div>
					<div className="navbar__right">
						<a href="#">
							<i className="fa fa-search"></i>
						</a>
						<a href="#">
							<i className="fa fa-clock-o"></i>
						</a>
						<a href="#">
							<img width="30" src={two} alt="picz" />
						</a>
					</div>
				</nav>

				<main>
					<div className="main_container">
						<div className="main_title">
							<img src={one} alt="picz" />
							<div className="main_greeting">
								<h1>Hello {user.firstname}</h1>
								<p>Welcome to your Dashboard</p>
							</div>
						</div>

						<div className="main_cards">
							<div className="card">
								<i className="fa fa-user-o fa-2x text-lightblue"></i>
								<div className="card_inner">
									<p className="text-primary-p">Clients</p>
									<span className="font-bold text-title">10</span>
								</div>
							</div>

							<div className="card">
								<i className="fa fa-calendar fa-2x text-red"></i>
								<div className="card_inner">
									<p className="text-primary-p">Events/Meetings</p>
									<span className="font-bold text-title">2</span>
								</div>
							</div>

							<div className="card">
								<i className="fa fa-archive fa-2x text-yellow"></i>
								<div className="card_inner">
									<p className="text-primary-p">projects</p>
									<span className="font-bold text-title">7</span>
								</div>
							</div>

							<div className="card">
								<i className="fa fa-thumbs-up fa-2x text-green"></i>
								<div className="card_inner">
									<p className="text-primary-p">Done projects</p>
									<span className="font-bold text-title">3</span>
								</div>
							</div>
						</div>

						<div className="charts">
							<div className="charts_left">
								<div className="charts_left_title">
									<div>
										<h1>Daily Reports</h1>
										<p>Milan, Sansiro, USA</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Libero facere obcaecati illo consequuntur, quam omnis
											recusandae perspiciatis at tempora ipsa esse amet
											inventore saepe voluptates reprehenderit exercitationem
											incidunt debitis labore. Lorem ipsum, dolor sit amet
											consectetur adipisicing elit.
										</p>
									</div>
									<i className="fa fa-usd"></i>
								</div>
								<div id="apex1"></div>
							</div>

							<div className="charts_rigth">
								<div className="charts_rigth_title">
									<div>
										<h1>Stats Reports</h1>
										<p>Milan, Sansiro, USA</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Libero facere obcaecati illo consequuntur, quam omnis
											recusandae perspiciatis at tempora ipsa esse amet
											inventore saepe voluptates reprehenderit exercitationem
											incidunt debitis labore.
										</p>
									</div>
									<i className="fa fa-usd"></i>
								</div>

								<div className="charts_rigth_cards">
									<div className="card1">
										<h1>Income</h1>
										<p>$65000</p>
									</div>

									<div className="card2">
										<h1>Sales</h1>
										<p>$45000</p>
									</div>

									<div className="card3">
										<h1>User</h1>
										<p>$75000</p>
									</div>

									<div className="card4">
										<h1>Orders</h1>
										<p>$105000</p>
									</div>
								</div>
							</div>

							{/* <div className="schedule">
								<div className="schedule_title">
									<div>
										<h1>Daily Tasks</h1>
										<p>Schedule</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Libero facere obcaecati illo consequuntur, quam omnis
											recusandae perspiciatis at tempora ipsa esse amet
											inventore saepe voluptates reprehenderit exercitationem
											incidunt debitis labore. Lorem ipsum, dolor sit amet
											consectetur adipisicing elit.
										</p>
									</div>
									<i className="fa fa-usd"></i>
								</div>
								<div id="apex1"></div>
							</div> */}
						</div>
					</div>
					<div class="table-box"></div>
					<div class="table-row table-head">
						<div class="table-cell first-cell">
							<p>Firstname</p>
						</div>
						<div class="table-cell">
							<p>Lastname</p>
						</div>
						<div class="table-cell">
							<p>State</p>
						</div>
						<div class="table-cell">
							<p>Sleep</p>
						</div>
					</div>

					<div class="table-row">
						{Clients.map((clients) => (
							<div key={clients._id}>
								{clients.clients.map((clients) => (
									<div class="table-cell first-cell" key={clients._id}>
										<p>{clients.firstname}</p>
									</div>
								))}

								<div class="table-cell first-cell">
									<p>Drive</p>
								</div>

								<div class="table-cell">
									<p>Camp Nou</p>
								</div>
								<div class="table-cell">
									<p>Old Tradford</p>
								</div>
								<div class="table-cell last-cell">
									<p>Man U</p>
								</div>

								<form onSubmit={(e) => addClient(e, clients._id)}>
									<input
										type="text"
										className="form-control"
										onChange={(e) => setfirstname(e.target.value)}
									/>
									<input
										type="text"
										className="form-control"
										onChange={(e) => setlastname(e.target.value)}
									/>
									<input
										type="text"
										className="form-control"
										onChange={(e) => setStatez(e.target.value)}
									/>
									<input
										type="submit"
										className="btn btn-sm btn-info"
										value="Add Client"
									/>
								</form>
							</div>
						))}

						{/* <form onSubmit={(e) => addClient(e)}>
							<input
								type="text"
								className="form-control"
								onChange={(e) => setfirstname(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								onChange={(e) => setlastname(e.target.value)}
							/>
							<input
								type="text"
								className="form-control"
								onChange={(e) => setStatez(e.target.value)}
							/>
							<input
								type="submit"
								className="btn btn-sm btn-info"
								value="Add Client"
							/>
						</form> */}

						{/* <div class="table-cell first-cell">
							<p>Drive</p>
						</div>
						<div class="table-cell">
							<p>Camp Nou</p>
						</div>
						<div class="table-cell">
							<p>Old Tradford</p>
						</div>
						<div class="table-cell last-cell">
							<p>Man U</p>
						</div> */}
					</div>
				</main>

				<div id="sidebar">
					<div className="sidebar_title">
						<div className="sidebar_img">
							<img src={two} />
							<h1>
								{user.firstname} {user.lastname}
							</h1>
						</div>
						<i
							className="fa fa-items"
							id="sidebarIcon"
							onclick="closeSidebar()"></i>
					</div>

					<div className="sidebar_menu">
						<div className="sidebar_link active_menu_link">
							<i className="fa fa-home"></i>
							<a href="#">Dashboard</a>
						</div>
						<h2>MNG</h2>
						<div className="sidebar_link">
							<i className="fa fa-user-secret"></i>
							<Link to="/">Admin Management</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-building-o"></i>
							<Link to="#">Company Management</Link>
						</div>

						<div className="sidebar_link">
							<i className="fa fa-wrench"></i>
							<Link to="#">Employee Management</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-archive"></i>
							<Link to="#">Warehouse</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-handshake-o"></i>
							<Link to="#">Contracts</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-question"></i>
							<Link to="#">Request</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-calendar-check-o"></i>
							<Link to="#">Special Days</Link>
						</div>
						<h2>PAYROLL</h2>
						<div className="sidebar_link">
							<i className="fa fa-money"></i>
							<Link to="#">Payroll</Link>
						</div>
						<div className="sidebar_link">
							<i className="fa fa-briefcase"></i>
							<Link to="#">Pay grade</Link>
						</div>
						<div className="sidebar_logout">
							<i className="fa fa-power-off"></i>
							<LogOut />
						</div>
					</div>
				</div>
			</div>
			<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
			<script src="index.js"></script>
		</body>
	);
};

export default UserPage;
