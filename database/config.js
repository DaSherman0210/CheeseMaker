const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DB ONLINE");
    } catch (error) {
        throw new Error ("DB Can't sincronisize"); 
    }
}

module.exports = {
    dbConnection
} 
