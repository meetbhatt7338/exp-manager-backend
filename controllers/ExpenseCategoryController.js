const expenseCategoryModel = require('../models/ExpenseCategoryModel');

const addCategory = async(req,res)=>{
    try {
        const saveCat = await expenseCategoryModel.create(req.body);
        if(saveCat){
            res.status(201).json({
                status :"success",
                message : "Category added successfully...",
                data : saveCat,

            })
        } 
    } catch (err) {
        es.status(404).json({
            status :"fail",
            message : "Category added successfully..."+err,
           
        })
    }
}

const getCategory = async(req,res)=>{
    try {
        const resCat = await expenseCategoryModel.find();
        if(resCat){
            res.status(200).json({
                status :"success",
                message : "Category fetched successfully...",
                data : resCat,

            })
        }else{
            res.status(500).json({
                status :"fail",
                message : "Category not getting...",


            })
        }
    } catch (err) {
        res.status(404).json({
            status :"fail",
            message : err,


        })
    }
}

module.exports = {
    addCategory,
    getCategory
}