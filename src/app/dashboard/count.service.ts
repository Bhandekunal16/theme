import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor(private http: HttpClient) {}

  table() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'project/getCount').subscribe(
        (res: any) => {
          resolve(res);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  vedio(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'youtube/getCount1').subscribe(
        (res: any) => {
          resolve(res);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  following(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'insta/getFollowing').subscribe(
        (res: any) => {
          resolve(res);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  follower(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'insta/getFollower').subscribe(
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
