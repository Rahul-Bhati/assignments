const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username, password} = req.headers;
    User.find({username:username, password:password})
    .then((res) => next())
    .catch((err) => res.status(500).json({message: 'Internal Server Error'}));

}

module.exports = userMiddleware;