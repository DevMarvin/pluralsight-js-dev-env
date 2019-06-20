import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    // Hard coding for simplicity. Assume it hits a real Database
    res.json([
        {"id": 1, "firstName": "Tim", "lastName": "Ochola", "email": "timochola@gmail.com"},
        {"id": 2, "firstName": "James", "lastName": "Makanga", "email": "jamesmakanga@gmail.com"},
        {"id": 3, "firstName": "Edwin", "lastName": "Oluoch", "email": "edwinoluoch@gmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})