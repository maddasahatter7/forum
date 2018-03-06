const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jane', lastName: 'Doe'},
        {id: 2, firstName: 'John', lastName: 'Deer'},
        {id: 3, firstName: 'Jack', lastName: 'Dawson'},
    ];

    res.json(customers);
    
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));