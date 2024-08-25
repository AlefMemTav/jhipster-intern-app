import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url = 'https://restcountries.com/v3.1/';

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}all`);
  }
}
