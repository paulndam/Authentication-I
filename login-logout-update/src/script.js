/** @format */
import ApexCharts from "react-apexcharts";

var options = {
	series: [
		{
			name: "Net Profit",
			data: [14, 25, 37, 45, 56, 79, 84, 92, 77],
		},
		{
			name: "Revenue",
			data: [43, 56, 87, 100, 67, 45, 99, 12, 45],
		},
		{
			name: "Frees Cash Flow",
			data: [32, 67, 98, 45, 31, 23, 67, 85, 12],
		},
	],

	chart: {
		type: "bar",
		height: 250,
		sparkline: {
			enabled: true,
		},
	},

	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: "55%",
			endingShape: "rounded",
		},
	},

	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ["transparent"],
	},

	xaxis: {
		categories: [
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"July",
			"Aug",
			"Sep",
			"Oct",
		],
	},
	yaxis: {
		title: {
			text: "$ (thousand)",
		},
	},

	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$" + val + "thousand";
			},
		},
	},
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// sidebar toggle codes

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
	if (!sidebarOpen) {
		sidebar.classList.add("sidebar_responsive");
		sidebarOpen = true;
	}
}

function closeSidebar() {
	if (sidebarOpen) {
		sidebar.classList.remove("sidebar_responsive");
		sidebarOpen = false;
	}
}
