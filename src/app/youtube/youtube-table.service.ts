import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeTableService {

  constructor(private http: HttpClient) {}

  table() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'youtube/getAllYoutube').subscribe(
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
