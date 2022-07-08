import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public async getProducts() {
    const getData = await this.http.get(`${SERVER_URL}`);
    return getData;
  }
}
