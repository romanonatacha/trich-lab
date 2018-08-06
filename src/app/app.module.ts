import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgxPageScrollModule} from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { CollapseComponent } from './collapse/collapse.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    CollapseComponent,
    PortfolioComponent,
    ContactComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    CollapseModule.forRoot(),
    FormsModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
