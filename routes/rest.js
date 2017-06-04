/**
 * Created by Amber on 3/4/17.
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlService');

router.post("/urls",jsonParser, function (req, res) {
    //json-parser will parse the request body and store the data into Object:body

    var longUrl = req.body.longUrl;
    console.log('~~~', longUrl);
    var shortUrl = urlService.getShortUrl(longUrl);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
    })

});

module.exports = router;