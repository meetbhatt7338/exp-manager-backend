const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
    },

    category:{
        type: Schema.Types.ObjectId,
        ref: 'ExpenseCategory'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    mode:{
        type: String,
        enum: ['cash', 'credit', 'debit'],
    },
    date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: Boolean,
        default: true
    }

})
module.exports = mongoose.model('Expense', expenseSchema);