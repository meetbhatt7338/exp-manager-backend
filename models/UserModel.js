const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName:{
        type: String,
        
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
    },
    role:{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    status:{
        type:Boolean,
        default: true
    }


})
module.exports = mongoose.model('User', userSchema);