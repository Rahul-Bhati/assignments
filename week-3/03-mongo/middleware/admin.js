const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    Admin.findOne({username:username, password:password})
    .then((res) => next())
    .catch((err) => res.status(500).json({message: 'Internal Server Error'}));
}

module.exports = adminMiddleware;