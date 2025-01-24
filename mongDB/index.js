import express  from "express";

const app = express()

import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/sec-d').
then(()=>{
    console.log('db is connected');
}).catch((err)=>{
    console.log('error occured ' ,err);
})

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    city:{
        type:String
    }
})

const User = mongoose.model('User',userSchema);

// ===============create =============================

// User.create({
//     username:'ankit',
//     password:'sdfsdfa',
//     age:15,
//     city:'mathura'
// }).then(()=>{
//     console.log("user created");
// })

//=============== read ========================

User.findOne({username:"ankit"}).
then((user)=>{
    console.log(user.name);
})

//==================update ===================

User.updateOne({username:'ankit'},{age:60}).
then((user)=>{
    console.log(user);
})
// User.updateMany({username:'ankit'},{age:20}).
// then((user)=>{
//     console.log(user);
// })

User.deleteOne({username:"ankit",age:60}).
then((user)=>{
    console.log(user);
})
app.listen(3000);