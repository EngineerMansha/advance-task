import { Injectable } from '@angular/core';
import { HttpServicesService } from './http-services.service';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  constructor(private _http: HttpServicesService) {}
  getUsers() {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this._http.getUsers().subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }
  getFakeData() {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this._http.getFakeData().subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }
}
