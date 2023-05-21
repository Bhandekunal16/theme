import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ContainerComponent } from './container/container.component';
import { InstagramComponent } from './instagram/instagram.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { InstagramFormComponent } from './instagram-form/instagram-form.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: BoxComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'project', component: ProjectComponent },
          { path: 'instagram', component: InstagramComponent },
          { path: 'youtube', component: YoutubeComponent },
          { path: 'projectform', component: ProjectFormComponent },
          { path: 'instform', component: InstagramFormComponent },
          { path: 'subform', component: SubscribeFormComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
