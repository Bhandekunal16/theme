import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) {}
  addInsta(data: InstagramService) {
    return new Promise((resolve, reject) => {
      this.http
        .post<InstagramService>(environment.apiUrl +'insta/createInsta', data)
        .subscribe(
          (res: any) => {
            console.log(res);
            resolve(res);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
  }
}
