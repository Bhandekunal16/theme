import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountService } from './count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private count: CountService
  ) {}

  loading = false;
  projectcount: any;
  vediocount: any;
  following: any;
  follower: any;

  projects() {
    this.route.navigate(['/project'], {
      relativeTo: this.router,
    });
  }
  Instagram() {
    this.route.navigate(['/instagram'], {
      relativeTo: this.router,
    });
  }

  youtube() {
    this.route.navigate(['/youtube'], {
      relativeTo: this.router,
    });
  }

  projectform() {
    this.route.navigate(['/projectform'], {
      relativeTo: this.router,
    });
  }

  instaform() {
    this.route.navigate(['/instform'], {
      relativeTo: this.router,
    });
  }

  subform() {
    this.route.navigate(['/subform'], {
      relativeTo: this.router,
    });
  }

  ngOnInit() {
    this.count
      .table()
      .then((res: any) => {
        this.projectcount = res.data;
        // this.userName = res.data.userName;
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.count
      .vedio()
      .then((res: any) => {
        this.vediocount = res.data;
        // this.userName = res.data.userName;
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.count
      .following()
      .then((res: any) => {
        this.following = res.data;
        // this.userName = res.data.userName;
      })
      .catch((error: any) => {
        console.log(error);
      });

    this.count
      .follower()
      .then((res: any) => {
        this.follower = res.data;
        // this.userName = res.data.userName;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
