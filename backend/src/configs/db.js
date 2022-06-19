const mongoose = require("mongoose");

const connectDb = ()=>{
    return mongoose.connect("mongodb+srv://satishmvc:mvc123@cluster0.dg3uq.mongodb.net/dot");
}

module.exports=connectDb;