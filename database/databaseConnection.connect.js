const mongoose = require("mongoose");

async function databaseConnection() {
  try {
     const promise = await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.eqwxe.mongodb.net/inventory`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log("Connected successfully!")
  }
  catch (err) {
    console.log("Connection failed due to..", err)
  }
}


module.exports = { databaseConnection }