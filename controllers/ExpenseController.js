const expenseModel = require('../models/ExpenseModel');

const createExpense = async (req, res) => {
    var objectToSubmit;
        if (req.body.goal === undefined || req.body.goal === '') {
            // Create a new object and assign it to objectToSubmit
          objectToSubmit = {
                title :req.body.title,
                amount : req.body.amount,
                category : req.body.category,
                mode : req.body.mode,
                user : req.body.user
          }
        }else{
            objectToSubmit = {
                goal:req.body.goal,
                title :req.body.title,
                amount : req.body.amount,
                category : req.body.category,
                mode : req.body.mode,
                user : req.body.user
          }
        }
    try {
        const savedExpense = await expenseModel.create(objectToSubmit);
        res.status(201).json({
            status: "success",
            data: savedExpense,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })
    }
}

const getAllExpensesById = async (req, res) => {

    

    try {
        // const expenses  = await expenseModel.find({status: true}).populate('category').populate('user');
        const expenses = await expenseModel.find({ user: req.params.id }).populate('category').populate('user');
        // console.log('expenses---',expenses)
        if (expenses) {
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else {
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    } catch (err) {

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}

//it is use in edit expenses
const getSpecificExpenseById = async (req, res) => {



    try {
        // const expenses  = await expenseModel.find({status: true}).populate('category').populate('user');
        const expenses = await expenseModel.find({ _id: req.params.id, user: req.params.uid }).populate('category').populate('user');
        if (expenses) {
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else {
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    } catch (err) {

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}
//update expenses
const findByIdExpenseAndUpdate = async (req, res) => {



    try {
        data = req.body;
        // console.log(data)
        const expenses = await expenseModel.findByIdAndUpdate(_id = req.params.id, data, { new: true }).populate('category').populate('user');
        if (expenses) {
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else {
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    } catch (err) {

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}

//delete a expense
const findByIdExpenseAndDelete = async (req, res) => {



    try {
        data = req.body;
        // console.log(data)
        const expenses = await expenseModel.findByIdAndDelete(_id = req.params.id, { new: true }).populate('category').populate('user');
        if (expenses) {
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else {
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    } catch (err) {

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}

const getExpenseByGoalId = async(req,res)=>{
    try {
        const getData = await expenseModel.find({goal: req.params.id}).populate('category').populate('goal');
        if(getData){
            res.status(201).json({
                data:getData,
                status :'success',
                flag:1,
            })
        }else{
            res.status(404).json({
                data:"Data not found",
                status :'fail',
                flag:-1,
            })
        }
    } catch (error) {
        res.status(404).json({
            data:error.message,
            status :'fail',
            flag:-1,
        })
    }
}

//filter
const filterExpenseByname=async(req,res)=>{
    // console.log('req.query',req.query);
    try {
        // const expenses  = await expenseModel.find({status: true}).populate('category').populate('user');
        const expenses = await expenseModel.find({user:req.params.id,title: { $regex:req.query.title}}).populate('category').populate('user');
        // console.log('expenses---',expenses)
        if (expenses && expenses.length > 0) {
            res.status(200).json({
                status: "success",
                data: expenses,
                flag: 1
            })
        }
        else {
            res.status(404).json({
                status: "fail",
                message: "No expense found",
                flag: -1
            })
        }
    } catch (err) {

        res.status(500).json({
            status: "fail",
            message: err.message,
            flag: -1
        })


    }

}
module.exports = {
    createExpense,
    getAllExpensesById,
    getSpecificExpenseById,
    findByIdExpenseAndUpdate,
    findByIdExpenseAndDelete,
    getExpenseByGoalId,
    filterExpenseByname
}