import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  home() {
    this.router.navigate(['/dashboard'], {
      relativeTo: this.route,
    });
  }
}
