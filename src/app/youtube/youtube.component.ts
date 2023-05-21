import { Component } from '@angular/core';
import { YoutubeService } from '../subscribe-form/youtube.service';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeTableService } from './youtube-table.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private youtube: YoutubeTableService
  ) {}

  user: any[] = [];
  type: any;
  name: any;
  Date: any;

  ngOnInit() {
    this.youtube
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
