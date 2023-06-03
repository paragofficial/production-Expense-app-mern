const express = require('express');
const morgan =require ('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path')
dotenv.config();
const connectDb = require("./config/connectDb");

// mongodb+srv://paragofficial1002:parag@cluster0.6w0ekc6.mongodb.net/expensedb 

connectDb();
 const  app = express();

 app.use(morgan('dev'));
 app.use(express.json());
 app.use(cors());

//  routes for user
app.use('/api/v1/users', require('./routes/userRoute'))

// routes for transactions 
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = 8080 || process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})