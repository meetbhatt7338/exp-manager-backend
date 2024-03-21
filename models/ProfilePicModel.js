const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    profilImgeUrl:{
        type:String,
    }
}) 

module.exports = mongoose.model("Profile",profileSchema)