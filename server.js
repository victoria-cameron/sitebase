const express = require('express');
const app = express();
var cons = require('consolidate');
var path = require('path');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
    });
});


const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});