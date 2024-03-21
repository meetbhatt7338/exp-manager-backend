const router = require("express").Router();
const roleController = require("../controllers/RoleController");

router.post("/role", roleController.addRole);
router.get("/role", roleController.getRoles);
module.exports = router;