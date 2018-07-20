import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component'
import { RecommComponent } from './recomm/recomm.component'
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
  //,{ path: '/', component: AppComponent}
  
  
  // add a 'page not found' component for any random requests?
  //, { path: '**', component: PageNotFoundComponent }
];   

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    ,RouterModule.forRoot(appRoutes, { useHash: true}) 
    ,LayoutModule
    , MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    //,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 
