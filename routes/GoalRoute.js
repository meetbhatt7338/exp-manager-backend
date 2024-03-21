const router = require('express').Router();
const goalController = require('../controllers/GoalController');

router.post('/goal',goalController.createGoal);
router.get('/goalbyuser/:id',goalController.getAllGoalByUserId);
router.delete('/deletegoal/:id',goalController.deletGoal);
// router.get('/goalbygoalid/:id',goalController.getGoalByGoalId);


module.exports = router;
