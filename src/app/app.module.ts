import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component'
import { RecommComponent } from './recomm/recomm.component'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
// import NgModule for each component you want to use
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { SidenavComponent } from './shared/sidenav.component';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

const appRoutes: Routes = [
  { path: 'ratings', component: RatingsComponent },
  { path: 'recomm',  component: RecommComponent }
  , { path: '', redirectTo: '/', pathMatch: 'full' },
   { path: '**', component: RatingsComponent }
  
  // maybe add a 'page not found' component for any random requests?
  //, { path: '**', component: PageNotFoundComponent }
];   

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    RecommComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 
