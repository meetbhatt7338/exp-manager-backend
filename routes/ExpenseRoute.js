const  router = require('express').Router();
const expenseController = require('../controllers/ExpenseController');

router.post('/expense', expenseController.createExpense);
router.get('/expense/:id', expenseController.getAllExpensesById);
router.get('/expense/:uid/:id', expenseController.getSpecificExpenseById);
router.put('/expenseupdate/:id', expenseController.findByIdExpenseAndUpdate);
router.delete('/expensedelete/:id', expenseController.findByIdExpenseAndDelete);
router.get('/expensebygoal/:id', expenseController.getExpenseByGoalId);
router.get('/filterexpense/:id', expenseController.filterExpenseByname);
module.exports = router;