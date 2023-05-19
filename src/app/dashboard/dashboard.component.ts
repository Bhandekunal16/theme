import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor( private route: Router, private router: ActivatedRoute) {}

  loading = false;

  projects(){
    this.route.navigate(['/project'], {
      relativeTo: this.router,
    });
  }
  Instagram(){
    this.route.navigate(['/instagram'], {
      relativeTo: this.router,
    });
  }

  youtube(){
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


}
