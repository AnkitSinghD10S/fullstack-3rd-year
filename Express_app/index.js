import express from "express";
import route from "./route.js";
const app = express();

app.use("/", route.Router);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
