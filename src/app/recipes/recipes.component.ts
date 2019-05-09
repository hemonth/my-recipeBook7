import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    recipes: Recipe[];

  // recipes: Recipe[];
  constructor() { }

  ngOnInit() {
  }

  handleRecipes(value) {
    this.recipes = value;
    console.log('recipes: ' + this.recipes);
  }

}
