const express = require('express');
const app = express();
const port = 3001;

app.get('/api/customers', (req, res) => {
    // Temp database response
    const customers = [
        {id: 1, firstName: 'Taylor'},
        {id: 2, firstName: 'Aye'}
    ];
    res.json(customers);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
