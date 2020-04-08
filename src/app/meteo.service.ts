import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from './meteo.model'

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  apiUrl = 'http://api.weatherstack.com/current?access_key=fd2f350abc918413aadc3bcfe028b9b8&query=Le%20Mans';
  constructor(private _http: HttpClient) { }
  getMeteo(){
    return this._http.get<Meteo>(this.apiUrl);
  }

}
