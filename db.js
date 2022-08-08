const mongoose = require('mongoose');


module.exports = async() => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try{
await mongoose.connect(process.env.DB,connectionParams);
 console.log("Connected to database")
    }catch(error){
        console.log("Not Connected to database")


    }
}