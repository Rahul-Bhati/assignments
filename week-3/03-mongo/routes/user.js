const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    User.create({username:username, password:password});
    res.json( { message: 'User created successfully' });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((data) => res.json(data));
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    // console.log(req.params.courseId)
    Course.findById({_id: req.params.courseId}).
    then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic

});

module.exports = router