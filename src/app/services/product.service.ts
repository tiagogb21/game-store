import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  SERVER_URL = 'https://api-labs.tindin.com.br/games';

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get(`${this.SERVER_URL}`);
  }
}
