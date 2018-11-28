import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContent } from './interfaces/content';
import { Observable } from 'rxjs';
import { createDecipher } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = '../assets/mock_data/content.json';

  constructor(private http: HttpClient) { }
  getData(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this._url);
  }
  getProduct(id: number) {
    // TODO: when db is created, get only the selected product
    alert('To be continue...');
  }
}
