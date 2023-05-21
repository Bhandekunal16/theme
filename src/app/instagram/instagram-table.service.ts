import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root',
})
export class InstagramTableService {
  constructor(private http: HttpClient) {}

  table() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'insta/getAllinst').subscribe(
        (res: any) => {
          resolve(res);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
}
