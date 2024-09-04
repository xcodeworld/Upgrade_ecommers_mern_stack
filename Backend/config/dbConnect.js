const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://admin:<db_password>@cluster0.11eys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
