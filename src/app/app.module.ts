import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { TopbarLeftComponent } from './views/topbar-left/topbar-left.component';
import { TopbarRightComponent } from './views/topbar-right/topbar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    TopbarLeftComponent,
    TopbarRightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
