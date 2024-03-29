import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/home/main-page.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeModule } from './Pages/home/home.module';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  { path: 'home', component: MainPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
