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
    let {name} = req.query.name;
    let d= data.filter((item) => item.name === name);
    res.json(d);
})

Router.post("/postdata", (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.json(data);
})

export default {Router};