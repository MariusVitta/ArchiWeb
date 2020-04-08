import { Component, OnInit  } from '@angular/core';
import { Meteo } from './meteo.model';
import * as L from 'leaflet';
import { MeteoService } from './meteo.service';
//import {TweetService,Tweets} from '../test';


declare function getTweets(param1): any;
const CONSUMER_KEY = 'hZBufPmhjsHj4V78aILmiltjY';
const CONSUMER_SECRET = 'hNb3XDRLCsyCk2YjYJEwGsnTooHHpHiDzl67UrU9dYzCTaP7ve';
const TOKEN = '1237727295667929090-XQZou8KGU0I997y1qCE5SFpb5EJ5uI';
const TOKEN_SECRET = 'f3lCdjc7y4lN57x0jIzQyCcHLWa9CbMbMSoPrpjpDKfiC';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'salut';
  meteo$: Meteo;
  //tweets: Tweets[];
 
  constructor(private meteoService: MeteoService){}
 
  // Fonction d'initialisation du composant.
  ngOnInit() {
    
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const carte = L.map('macarte').setView([47.9482, 0.2083], 13); 
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carte);

    const carteMonde = L.map('macarte2').setView([44,12], 2);
       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carteMonde);

    L.circle([47.95, 0.2087], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500000
    }).addTo(carteMonde);

    L.circle([51.5, -0.10], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);

    L.circle([37.75, -122.37], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);

    L.circle([40.79, -73.9], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 400000
    }).addTo(carteMonde);

    L.circle([48.76, 9.18], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500000
    }).addTo(carteMonde);

    L.circle([35.6, 140], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(carteMonde);

    this.meteoService.getMeteo().subscribe(meteo => this.meteo$ = meteo);
    //this.tweets = this.tweetService.getTweets();
    return;
  } 

  
  /*
  getTweets(){
    return this.tweets;
  }
  */
  
   tweetsLeMans = () => {
    var require: any;
    var Twit = require('twit');

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
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, search :any, response) {
      //this.tweets = search;
      /*let test ;
      search.statuses.forEach(element => {
        test += element.text;
        console.log( element.created_at);
        console.log( element.text);
      });
      console.log(test);*/
      return search;
    })
  };
  
}
