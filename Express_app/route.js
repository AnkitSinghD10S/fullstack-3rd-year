import express from 'express';

const Router = express();

Router.get('/', (req, res) => {
    res.send('Hello World');
});


Router.get('/signup/:name/:pasword', (req, res) => {
    res.send('signup page');
    console.log(req.params);    
});

let data = [
    {
        name: "John",
        age: 20
    },
    {
        name: "Jane",
        age: 21
    },{
        name: "Doe",
        age: 22
    }
]

Router.get("/getdata", (req, res) => {
    console.log(req.query);
    let {name} = req.query;
    let d= data.find((item) => item.name == req.query.name);
    res.json(d);
})

export default {Router};