const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, userName: 'MattSk8s23', mainPost: 'Kickflip Challenge'},
        {id: 2, userName: 'EyesackCraw95', mainPost: 'Vert Challenge'},
        {id: 3, userName: 'KyleBean666', mainPost: 'Rail Grind Challenge'},
    ];

    res.json(users);
    
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));