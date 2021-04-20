import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './components/design/design.component';
import { HomeComponent } from './components/home/home.component';
import { JarComponent } from './components/jar/jar.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { PackagingComponent } from './components/packaging/packaging.component';
import { SerumComponent } from './components/serum/serum.component';
import { TubeComponent } from './components/tube/tube.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'packaging', component: PackagingComponent },
  { path: 'design', component: DesignComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'serum', component: SerumComponent },
  { path: 'tube', component: TubeComponent },
  { path: 'jar', component: JarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
