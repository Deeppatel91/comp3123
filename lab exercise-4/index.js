const express = require('express');
const app = express();
const SERVER_PORT = 3000
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200)
    res.send('Welcome to Express-JS');
})




app.get('/hello', (req, res) => {
    res.status(200)
    res.send('Hello Express JS');
})

app.post('/hello', (req, res) => {
    res.status(201)
        .send(' Hello Express JS');
})

app.get('/users', (req, res) => {
    res.status(200)
    const stud = {
        name: 'John Doe',
        age: 25,
    }
    res.json(stud);
});
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Deep';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

app.post('/users/:firstname/:lastname', (req, res) => {
    console.log(req.params);
    const fnm = req.params.firstname;
    const lnm = req.params.lastname;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});


app.get('/users/:fnm/:lnm', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
