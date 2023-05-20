import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectTableService } from './project-table.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  constructor(private router: Router, private route:ActivatedRoute, private project:ProjectTableService) {}
  user: any[] = [];
  projectName:any;
  codeIn:any;
  Date:any;

  table() {
    this.project
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
