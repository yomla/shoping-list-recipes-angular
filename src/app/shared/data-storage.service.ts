import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-7466b.firebaseio.com/recipes.json', 
      this.recipeService.getRecipes());
  }
}
