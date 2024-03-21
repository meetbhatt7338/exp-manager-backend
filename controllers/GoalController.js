const goalModel = require('../models/GoalModel');
const expenseModel = require('../models/ExpenseModel')



const createGoal =async (req,res)=>{
        

        try {
            const saveGoal = await goalModel.create(req.body);
            // console.log('saveGoal:  ',saveGoal);
            if(saveGoal != null ){
                   res.status(200).json({
                        status :"success",
                        data:saveGoal,
                        flag:1 
                   }) 
            }else{
                res.status(200).json({
                        status :"fail",
                        data:"Goal not getting",
                        flag:-1 
                   }) 
            }
        } catch (error) {
            res.status(500).json({
                status :"fail",
                data:error.message,
                flag:-1 
           }) 
        }
}

const getAllGoalByUserId=async(req,res)=>{

    try {
        const getData = await goalModel.find({user: req.params.id});
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

const deletGoal = async(req,res)=>{

    try {
        const expensesInGoal = await expenseModel.deleteMany({goal:req.params.id});
        const getData = await goalModel.findByIdAndDelete({_id: req.params.id});

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

module.exports ={
    createGoal,
    getAllGoalByUserId,
    deletGoal
}