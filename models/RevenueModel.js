const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const revenueShema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String
    },
    income:{
        type:Number
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Revenue' , revenueShema);