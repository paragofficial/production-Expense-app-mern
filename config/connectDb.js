const mongoose = require('mongoose');
const colors = require('colors');


const connectDb = async ()=>{
    try{
        // await mongoose.connect(process.env.MONGO_URL);
        await mongoose.connect(`mongodb+srv://paragofficial1002:parag@cluster0.6w0ekc6.mongodb.net/expense`);
        console.log(`server running on ${mongoose.connection.host}`.bgCyan.white);
    }catch(error){
        console.log(`${error}.bgRed`);
    }
}

module.exports = connectDb
