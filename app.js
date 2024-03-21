const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

//config

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());





//database connection part
// mongoose.connect('mongodb://127.0.0.1:27017/exp_manager')
mongoose.connect('mongodb+srv://bhattmeet9099:meet@cluster0.wb7kyr3.mongodb.net/exp_manager').then(() => {
    console.log('Database connected');
}).catch((err) =>
    console.log('Error at database connection', err))


// import routes here..
const  userRout = require('./routes/UserRoute')
const  roleRout = require('./routes/RoleRoute')
const expenseRout = require('./routes/ExpenseRoute')
const categoryRout = require('./routes/ExpenseCategoryRoute')
const goalRout = require('./routes/GoalRoute')
const revenueRoute = require('./routes/RevenueRoute')
const profileRoute = require('./routes/ProfilePicRoute')



//api 
app.use('/api',userRout)
app.use('/api',roleRout)
app.use('/api',expenseRout)
app.use('/api',categoryRout)
app.use('/api',goalRout)
app.use('/api',revenueRoute)
app.use('/api',profileRoute)



//server part
const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`);
})