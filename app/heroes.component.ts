import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

import { Hero } from './hero';

import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

import { Router } from '@angular/router-deprecated';

//let similiar to var

@Component({
	selector: 'my-heroes',
  	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	//this is so you can call my-hero-detail in the heroes.component.html template
	directives: [HeroDetailComponent],
})


//this needs to be at the end
export class HeroesComponent implements OnInit {	
	constructor(private router: Router, private heroService: HeroService) {

	}

	title = 'Tour of Heroes';
	/*hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};*/

	//of class Hero
	selectedHero: Hero;
	addingHero: boolean;
	error: string;

	heroes: Hero[];

	//of class Hero
	onSelect(hero: Hero) 
	{ 
		this.selectedHero = hero; 
	}

 	getHeroes() {
		//the double arrow is es6 for function(heroes){ this.heroes = heroes }
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}	

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
	    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}	

	addHero() {
	  this.addingHero = true;
	  this.selectedHero = null;
	}

	close(savedHero: Hero) {
	  //hide the add box and refresh from the database
	  //the my-hero-detail component is removed from the dom if addingHero is false: *ngIf="addingHero"
	  this.addingHero = false;
	  if (savedHero) { this.getHeroes(); }
	}

	delete(hero: Hero, event: any) {
	  event.stopPropagation();
	  this.heroService
	      .delete(hero)
	      .then(res => {
	        this.heroes = this.heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
	      })
	      .catch(error => this.error = error); // TODO: Display error message
	}		

}

//placement is important
