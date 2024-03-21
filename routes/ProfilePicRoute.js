const router = require('express').Router();
const uploadController = require('../controllers/ProfilePicController');
router.post("/upload/:id", uploadController.fileUpload);
router.get("/imagebyuser/:id", uploadController.getimageByuser);
module.exports = router;