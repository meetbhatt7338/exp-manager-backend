const revenueModel = require('../models/RevenueModel');

const createRevenue = async(req,res)=>{

    try {

        const income = await revenueModel.create(req.body);
        if(income){
                res.status(200).json({
                    data:income,
                    status:'success',
                    flag : 1,
                })
        }else{
            
            res.status(404).json({
                status:'fail',
                message:'Income not getting',
                flag : -1,
            })
        }
    } catch (error) {
        
        res.status(500).json({
            status:'fail',
            message:error.message,
            flag : -1,
        })
    }
}

const getAllRevenueByUserId=async(req,res)=>{

    try {
        const getRevenue = await revenueModel.find({user:req.params.id})
        if(getRevenue){
            
            res.status(201).json({
                data:getRevenue,
                status : 'success',
                flag : 1,
            })
        }else{
            
            res.status(404).json({
                status:'fail',
                message:'Income not getting',
                flag : -1,
            })
        }
    } catch (error) {
        
        res.status(500).json({
            status:'fail',
            message:error.message,
            flag : -1,
        })
    }
}

const getAllRevenueById=async(req,res)=>{

    try {
        const getRev = await revenueModel.find({_id:req.params.id})
        if(getRev){
            
            res.status(201).json({
                data:getRev,
                status : 'success',
                flag : 1,
            })
        }else{
            
            res.status(404).json({
                status:'fail',
                message:'Income not getting',
                flag : -1,
            })
        }
    } catch (error) {
        
        res.status(500).json({
            status:'fail',
            message:error.message,
            flag : -1,
        })
    }
}

const removeRevenue = async(req,res)=>{
    try {
        const remRev = await revenueModel.findByIdAndDelete(req.params.id);
        if(remRev){
            res.status(200).json({
                data:remRev,
                status:"success",
                flag:1,

            })
        }else{
            res.status(404).json({
                message:"Data not found!!",
                flag:-1,
                status:"fail"
            })
        }
    } catch (error) {
        
        res.status(500).json({
            message:error.message,
            flag:-1,
            status:"fail"
        })
    }
}

const updateRevenue =async(req,res)=>{

    try {
        const updareRes = await revenueModel.findByIdAndUpdate(_id = req.params.id,req.body,{new:true})
        // console.log('adsf',updareRes)
        if(updareRes){
            res.status(200).json({
                data:updareRes,
                status:"success",
                flag:1,

            })
        }
    } catch (error) {
        
        res.status(500).json({
            message:error.message,
            flag:-1,
            status:"fail"
        })
    }
}
module.exports ={
    createRevenue,
    getAllRevenueByUserId,
    getAllRevenueById,
    removeRevenue,
    updateRevenue
}