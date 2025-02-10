const { log } = require("console");
const fs = require("fs");
const path = require("path");

const loc = path.join(__dirname, "data", "abc.txt");
let data = "this is temp string data";

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('file wirtten succesfully')
// })

// const loc1=path.join(__dirname,'abc.txt');
// let data = 'this is temp string data';

fs.writeFile(loc, data, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("file wirtten succesfully");
});

// fs.readFile(loc,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         // console.log(data.toString());
//         console.log(data);

//     }
// })
fs.readFile(loc, { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(data.toString());
        console.log(data);
    }
});

