import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstagramTableService } from './instagram-table.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent {
  constructor(private router: Router, private route:ActivatedRoute, private inst:InstagramTableService) {}

  user: any[] = [];
  userName: any;
  type:any;
  Date:any;

  table() {
    this.inst
      .table()
      .then((res: any) => {
        this.user = res.data;
        console.log(JSON.stringify(this.user));

        // this.userName = res.data.userName;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
