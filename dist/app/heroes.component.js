"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var router_deprecated_1 = require('@angular/router-deprecated');
//let similiar to var
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    //of class Hero
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //the double arrow is es6 for function(heroes){ this.heroes = heroes }
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        //hide the add box and refresh from the database
        //the my-hero-detail component is removed from the dom if addingHero is false: *ngIf="addingHero"
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    HeroesComponent.prototype.delete = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
            //this is so you can call my-hero-detail in the heroes.component.html template
            directives: [hero_detail_component_1.HeroDetailComponent],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//placement is important

//# sourceMappingURL=heroes.component.js.map
