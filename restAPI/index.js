import express from "express";
import Users from "./data/users.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/users", (req, res) => {
    res.render("users", { Users });
    // console.log(Users);
    // res.json(Users);
});

app.get("/users/new", (req, res) => {
    res.render("new");
});

app.post("/users", (req, res) => {
    console.log(req.body);
    const { name, email, age, city } = req.body;
    const id = Users.length == 0 ? 1 : Users[Users.length - 1].id + 1;
    Users.push({ id, name, email, age, city });
    res.redirect("/users");
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    const user = Users.find((user) => user.id == id);
    res.render("show", { user });
});

app.get("/user/:id/edit", (req, res) => {
    const { id } = req.params;
    const user = Users.find((user) => user.id == id);
    res.render("edit", { user });
});

app.post("/abc/:id", (req, res) => {
    const { id } = req.params;
    const user = Users.find((user) => user.id == id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;
    user.city = req.body.city;
    res.redirect("/users");
});

app.post("/delete/:id", (req, res) => {
    const { id } = req.params;
    const user = Users.find((user) => user.id == id);
    const index = Users.indexOf(user);
    Users.splice(index, 1);
    res.redirect("/users");
});

app.listen(3000, () => {
    console.log(`server is listenin on port ${3000}`);
});
