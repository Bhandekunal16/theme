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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { registerLocaleData } from '@angular/common';
import { NzConfig } from 'ng-zorro-antd/core/config';

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
  declarations: [AppComponent, BoxComponent],
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
    NzCollapseModule,
    NzDrawerModule,
    NzNoAnimationModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
