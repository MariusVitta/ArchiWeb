
  var Twit = require('twit');
  var tweets ;
  var T = new Twit({
    consumer_key:         'hZBufPmhjsHj4V78aILmiltjY',
    consumer_secret:      'hNb3XDRLCsyCk2YjYJEwGsnTooHHpHiDzl67UrU9dYzCTaP7ve',
    access_token:         '1237727295667929090-XQZou8KGU0I997y1qCE5SFpb5EJ5uI',
    access_token_secret:  'f3lCdjc7y4lN57x0jIzQyCcHLWa9CbMbMSoPrpjpDKfiC',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  
  //
  //  search twitter for all tweets containing the word 'banana' since July 11, 2011
  //
  
    
    module.exports.tweets = T.get('search/tweets', { q: '#LeMans24 since:2017-01-01', count: 15 }, function(err, search, response) {
 
       console.log(search);     
       return search;
     });
  
  //tweets = getTweets();
  //console.log(tweets);

  