import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("login success");
});

app.listen(3000, () => {
    console.log(`sever is running on ${3000}`);
});
