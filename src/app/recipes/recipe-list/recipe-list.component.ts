import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Description of recipe',
      'https://secure.meetupstatic.com/photos/member/5/7/6/3/highres_271642371.jpeg',
      [new Ingredient('ingredient1', 2)]),
    new Recipe('A Test Recipe 2',
      'Description of recipe',
      'https://secure.meetupstatic.com/photos/member/5/7/6/3/highres_271642371.jpeg',
      [new Ingredient('ingredient1', 2)])
  ];

  @Output() myRecipes: EventEmitter<Recipe[]> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.myRecipes.emit(this.recipes);
  }

}
