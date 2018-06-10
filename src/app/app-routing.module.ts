import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RecommComponent } from './recomm/recomm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: '/', 
    component: AppComponent
  },
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: 'recomm',
    component: RecommComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule], 
  providers: []
})
export class AppRoutingModule {
}