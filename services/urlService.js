/**
 * Created by Amber on 3/4/17.
 */

var longToShortHash = {};
var shortToLongHash = {};

var getShortUrl =function(longUrl) {
    if(longUrl.indexOf('http') === -1) {
        longUrl = "http://" + longUrl
    }
    var longToShort = longToShortHash[longUrl];
    if(longToShort != undefined) {
            return longToShort
    }else {
        var shortUrl = generateShortUrl();
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl
    }
};

var generateShortUrl = function () {
    return Object.keys(longToShortHash).length;

};

var getLongUrl = function (shortUrl) {
    return shortToLongHash[shortUrl]
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};