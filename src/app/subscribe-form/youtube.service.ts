import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}
  addYouTube(data: YoutubeService) {
    return new Promise((resolve, reject) => {
      this.http
        .post<YoutubeService>(environment.apiUrl + 'youtube/createYoutube', data)
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
