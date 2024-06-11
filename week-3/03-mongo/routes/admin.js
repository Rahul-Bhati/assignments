const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { randomUUID } = require("crypto");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    Admin.create({username:username, password:password});
    res.json( { message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const data = Course.create({title:title, description:description , price:price , imageLink:imageLink})
    
    res.json({ message: 'Course created successfully', courseId: randomUUID()});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json(courses);
});

module.exports = router;