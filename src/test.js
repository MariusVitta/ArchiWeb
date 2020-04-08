"use strict";
exports.__esModule = true;
var Twit = require('twit');
var T = new Twit({
    consumer_key: 'hZBufPmhjsHj4V78aILmiltjY',
    consumer_secret: 'hNb3XDRLCsyCk2YjYJEwGsnTooHHpHiDzl67UrU9dYzCTaP7ve',
    access_token: '1237727295667929090-XQZou8KGU0I997y1qCE5SFpb5EJ5uI',
    access_token_secret: 'f3lCdjc7y4lN57x0jIzQyCcHLWa9CbMbMSoPrpjpDKfiC',
    timeout_ms: 60 * 1000,
    strictSSL: true
});
var Tweets = /** @class */ (function () {
    function Tweets(date, localisation, texte) {
        this._date = date;
        this._texte = texte;
        this._localisation = localisation;
    }
    Tweets.prototype.getLocalisation = function () {
        return this._localisation;
    };
    Tweets.prototype.getDate = function () {
        return this._date;
    };
    Tweets.prototype.getTexte = function () {
        return this._texte;
    };
    return Tweets;
}());
exports.Tweets = Tweets;
var TweetService = /** @class */ (function () {
    function TweetService() {
        var _this = this;
        var listeTweets = new Array(10);
        T.get('search/tweets', { q: '#LeMans24 since:2017-01-01', count: 200 }, function (err, search, response) {
            var i = 0;
            search.statuses.forEach(function (element) {
                if (element.text.indexOf("RT") === -1 && i < 10) {
                    listeTweets[i] = new Tweets(element.created_at, element.geo, element.text);
                    i++;
                }
            });
            _this.reception(listeTweets);
            return listeTweets;
        });
    }
    TweetService.prototype.reception = function (liste) {
        this._liste = liste;
        //console.log(this._liste);
        this._liste.forEach(function (element) {
            console.log(element.getDate() + " : " + element.getTexte() + "\n");
        });
    };
    TweetService.prototype.getTweets = function () {
        return this._liste;
    };
    return TweetService;
}());
exports.TweetService = TweetService;
var t = new TweetService();
