var express = require('express');
var app = express();

var restRouter = require('./routes/rest');
var rediretRouter = require('./routes/redirect');

app.use("/api/v1", restRouter);

app.use("/:shortUrl", rediretRouter);

app.listen(3000);