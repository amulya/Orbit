import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RecommComponent } from './recomm/recomm.component';

const routes: Routes = [
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: 'recomm',
    component: RecommComponent
  },
  {
    path: '', 
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule], 
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [RatingsComponent, RecommComponent];