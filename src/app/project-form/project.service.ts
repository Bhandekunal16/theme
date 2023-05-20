import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env/envirment';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  constructor(private http: HttpClient) {}
  addproject(data: ProjectService) {
    return new Promise((resolve, reject) => {
      this.http
        .post<ProjectService>(environment.apiUrl +'project/addproject', data)
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
