declare var require: any;

var Twit = require('twit'); 

var T = new Twit({
    consumer_key:         'hZBufPmhjsHj4V78aILmiltjY',
    consumer_secret:      'hNb3XDRLCsyCk2YjYJEwGsnTooHHpHiDzl67UrU9dYzCTaP7ve',
    access_token:         '1237727295667929090-XQZou8KGU0I997y1qCE5SFpb5EJ5uI',
    access_token_secret:  'f3lCdjc7y4lN57x0jIzQyCcHLWa9CbMbMSoPrpjpDKfiC',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

export class Tweets{

    private _date: string;
    private _texte: string; 
    private _localisation: string; 

    constructor(date, localisation, texte){
        this._date = date;
        this._texte = texte;
        this._localisation = localisation;
    }
    public getLocalisation(): string{
        return this._localisation;
    }

    public getDate(): string {
        return this._date;
    }
    public getTexte(): string {
        return this._texte;
    }

}

export class TweetService{

    public _liste: Array<Tweets>;

    constructor(){
        let listeTweets = new Array<Tweets>(10);

        T.get('search/tweets', { q: '#LeMans24 since:2017-01-01', count: 200 }, (err, search, response)=>{
            let i = 0;
            
            search.statuses.forEach(element => {
                if(element.text.indexOf("RT") === -1 && i < 15){
                    listeTweets[i] = new Tweets(element.created_at, element.geo, element.text);
                    i++;
                }
            })
            this.reception(listeTweets);
            return listeTweets; 
        });
    }

    public reception(liste){
        this._liste = liste;
        //console.log(this._liste);
        this._liste.forEach(element => {
            console.log(element.getDate() + " : " + element.getTexte() + "\n");
        });
    }

    public getTweets(){
        return this._liste;
    }
}

var t = new TweetService();