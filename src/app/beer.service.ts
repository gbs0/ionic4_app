import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.punkyApi;


@Injectable({
  providedIn: 'root'
})

export class BeerService {
  // currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url) {
  	return this.http.get(`${API_URL}/${url}`);
  }
}
