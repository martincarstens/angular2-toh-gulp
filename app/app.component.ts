import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    	<a [routerLink]="['Dashboard']">Dashboard</a>
    	<a [routerLink]="['Heroes']">Heroes</a>
   	</nav>
   	<!-- view data start -->
    <router-outlet></router-outlet>
    <!-- view data end -->
    footer
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
	  path: '/dashboard',
	  name: 'Dashboard',
	  component: DashboardComponent,
	  useAsDefault: true  	
  },
  {
	  path: '/detail/:id',
	  name: 'HeroDetail',
	  component: HeroDetailComponent
  },  
])

export class AppComponent {
  title = 'Tour of Heroes';
}