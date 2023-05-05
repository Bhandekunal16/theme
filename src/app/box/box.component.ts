import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  constructor(private router: Router) {}
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  // external() {
  //   this.router.navigate(['assets/test.html']);
  // }
}
