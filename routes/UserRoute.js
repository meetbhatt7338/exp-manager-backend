const userController = require('../controllers/UserController');    
const router = require('express').Router();

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.post("/user/login", userController.loginUser);
module.exports = router;