const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/rakesh").then( 
    (res)=> console.log("DB connected")).catch((err) => console.log('Error', err))