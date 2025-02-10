import express from "express"
const app = express()
import cors from "cors"

let todo = ["cricket","timepass"];

app.use(cors())

app.get("/",(req,res)=>{
    res.json(todo)
})

app.listen(3000,()=>{
    console.log("Server is running on the port ",3000);
    
})