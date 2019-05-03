import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, PreloadAllModules, RouterModule} from '@angular/router';

/**
 * This component implements the sibling outlets strategy.
 */
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div ui-view></div>
  `
})
export class AppComponent {}

@Component({
  template: `
    <div style="background-color: green">
      <div>Angular A!</div>
      <div>Go to Angular A</div>
      <div><a routerLink="/angular_b">Go to Angular B</a></div>
      <div><a routerLink="/lazy1/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/lazy1/angularjs_b">Go to AngularJS B</a></div>
      <div><a routerLink="/lazy2/angularjs_c">Go to AngularJS C</a></div>
      <div><a routerLink="/lazy2/angularjs_d">Go to AngularJS D</a></div>
    </div>
  `
})
export class AngularAComponent {
}

@Component({
  template: `
    <div style="background-color: green">
      <div>Angular B!</div>
      <div><a routerLink="/angular_a">Go to Angular A</a></div>
      <div>Go to Angular B</div>
      <div><a routerLink="/lazy1/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/lazy1/angularjs_b">Go to AngularJS B</a></div>
      <div><a routerLink="/lazy2/angularjs_c">Go to AngularJS C</a></div>
      <div><a routerLink="/lazy2/angularjs_d">Go to AngularJS D</a></div>
    </div>
  `
})
export class AngularBComponent {
}

@NgModule({
  declarations: [
    AppComponent,
    AngularAComponent,
    AngularBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
      {path: 'angular_a', component: AngularAComponent},
      {path: 'angular_b', component: AngularBComponent},
      {path: 'lazy1', loadChildren: './js1/angularjs.module#AngularJSModule'},
      {path: 'lazy2', loadChildren: './js2/angularjs.module#AngularJS2Module'}
    ], {
      enableTracing: true,
      // Uncomment to enable preloading and prebootstrapping
      // preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
