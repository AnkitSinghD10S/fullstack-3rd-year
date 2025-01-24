import express from "express";
import Users from "./data/users.js";
import mongoose  from "mongoose";

const userScheam = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
})

const User = mongoose.model('User',userScheam);

mongoose.connect('mongodb://127.0.0.1:27017/sec-d').
then(()=>{
    console.log('db is connected');
}).catch((err)=>{
    console.log('error occured ' ,err);
})

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/users", async(req, res) => {
    const Users = await User.find();
    res.render("users", { Users });
    // console.log(Users);
    // res.json(Users);
});

app.get("/users/new", (req, res) => {
    res.render("new");
});

app.post("/users",async (req, res) => {
    console.log(req.body);
    const { name, email, age, city } = req.body;
    await User.create({
        name,
        email,
        age,
        city
    })
    res.redirect("/users");
});

app.get("/user/:id", async(req, res) => {
    const { id } = req.params;
    // console.log(id);
    const u= await User.findOne({_id:id})
    // console.log(u);
    res.render("show", { u });
});

app.get("/user/:id/edit",async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const u= await User.findOne({_id:id})
    console.log(u);
    res.render("edit", { u});
});

app.post("/abc/:id", async(req, res) => {
    const { id } = req.params;
    const u= await User.findOne({_id:id})
    u.name = req.body.name;
    u.email = req.body.email;
    u.age = req.body.age;
    u.city = req.body.city;
    res.redirect("/users");
});

app.post("/delete/:id", async(req, res) => {
    const { id } = req.params;
    await User.deleteOne({_id:id})
    res.redirect("/users");
});

app.listen(3000, () => {
    console.log(`server is listenin on port ${3000}`);
});

