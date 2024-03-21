const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const goalSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name:{
        type:String,
        unique:true,
    },
    maxAmount:{
        type:Number
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }
})

module.exports = mongoose.model("Goal",goalSchema);