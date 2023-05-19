import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { registerLocaleData } from '@angular/common';
import { NzConfig } from 'ng-zorro-antd/core/config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ContainerComponent } from './container/container.component';
import { InstagramComponent } from './instagram/instagram.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { InstagramFormComponent } from './instagram-form/instagram-form.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#dcdcdc',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DashboardComponent,
    ProjectComponent,
    ContainerComponent,
    InstagramComponent,
    YoutubeComponent,
    ProjectFormComponent,
    InstagramFormComponent,
    SubscribeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
    DragDropModule,
    ScrollingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    NzListModule,
    NzDropDownModule,
    NzCollapseModule,
    NzDrawerModule,
    NzNoAnimationModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzSwitchModule,
    NzModalModule,
    NzSelectModule,
    NzGridModule,
    NzTabsModule,
    NzTableModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
