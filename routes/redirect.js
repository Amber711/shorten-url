/**
 * Created by Amber on 6/4/17.
 */
var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);
    console.log('----originalUrl', shortUrl);
    console.log('--getLongUrl:', longUrl);
    if(longUrl) {
        res.redirect(longUrl)
    }

});

module.exports = router;