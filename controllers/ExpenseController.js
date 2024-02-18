const expenseModel = require('../models/ExpenseModel');

const createExpense = async (req, res) => {

        try{
            const savedExpense = await expenseModel.create(req.body);
            res.status(201).json({
                status: "success",
                data: savedExpense,
                flag: 1
            })

        }catch(err){

            res.status(500).json({
                status: "fail",
                message: err.message,
                flag: -1
            })
        }


}

const getAllExpensesById = async (req, res) => {



    try{
        // const expenses  = await expenseModel.find({status: true}).populate('category').populate('user');
        const expenses  = await expenseModel.find({user : req.params.id}).populate('category').populate('user');
        if(expenses){
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else{
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    }catch(err){

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}
module.exports = {
    createExpense,
    getAllExpensesById
}