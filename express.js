var Express = require('express');
var webtask = require('webtask-tools');
var app = Express();

app.use(require('body-parser'));

// POST
app.post('/', function (req, res) {
    res.json({ id: 1 })
});

// GET
app.get('/', function (req, res) {
    res.json({ id: 1 })
});

// PUT
app.put('/', function (req, res) {
    res.json({ id: 1 })
});

// DEL
app.del('/', function (req, res) {
    res.json({ id: 1 })
});

// Expose this express app as a webtask-compatible function

module.exports = webtask.fromExpress(app);