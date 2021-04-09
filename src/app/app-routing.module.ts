import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './components/design/design.component';
import { HomeComponent } from './components/home/home.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { PackagingComponent } from './components/packaging/packaging.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'packaging', component: PackagingComponent },
  { path: 'design', component: DesignComponent },
  { path: 'marketing', component: MarketingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
