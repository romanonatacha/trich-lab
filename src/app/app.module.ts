import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
