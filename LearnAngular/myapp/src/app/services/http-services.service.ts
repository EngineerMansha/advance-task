import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HttpServicesService {
  apiUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<any>(`${this.apiUrl}users`);
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getFakeData() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a9e02cfa26mshbcd5b67c8c03f7dp183469jsna34f9e17dac0',
        'X-RapidAPI-Host': 'fake-data3.p.rapidapi.com',
      },
    };
    return this.http.get(
      'https://fake-data3.p.rapidapi.com/fk/companies',
      options
    );
  }
}
