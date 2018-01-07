import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simly a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q'),
    new Recipe('Another Test Recipe', 'This is simly a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHU2QPOG0bbAjVj_zE-B8GtCDnv--88hY8clFZDyeiGpqrpRG')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}