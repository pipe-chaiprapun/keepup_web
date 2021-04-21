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
import { SerumComponent } from './components/serum/serum.component';
import { ContactLine2Component } from './components/share/contact-line2/contact-line2.component';
import { TubeComponent } from './components/tube/tube.component';
import { JarComponent } from './components/jar/jar.component';
import { LipComponent } from './components/lip/lip.component';
import { PowderComponent } from './components/powder/powder.component';
import { BoxComponent } from './components/box/box.component';
import { ScrollToTopComponent } from './components/share/scroll-to-top/scroll-to-top.component';

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
    ContactLineComponent,
    SerumComponent,
    ContactLine2Component,
    TubeComponent,
    JarComponent,
    LipComponent,
    PowderComponent,
    BoxComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
