import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PackagingComponent } from './components/packaging/packaging.component';
import { DesignComponent } from './components/design/design.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { ContactLineComponent } from './components/share/contact-line/contact-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagingComponent,
    DesignComponent,
    MarketingComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ContactLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
