/** @format */

//what this says is that, if user is not currently login into their page or trung to ligin to a page
//with any stored information in database , the page will respond back with a message unauthorized

const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
	console.log(
		"FROM THE JWT =============******>>>>>>>>>>>>>" + req.cookies.token
	);
	jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, payload) => {
		if (err) {
			//res.status(401).json({ verified: false });
			res.json({ error: "Unauthorize" });
		} else {
			next();
		}
	});
};
