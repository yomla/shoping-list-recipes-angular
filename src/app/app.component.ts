import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: boolean;
  shoppingList: boolean;

  showingRecipes(value) {
    this.recipes = value;
    this.shoppingList = false;
  }

  showingShoppingList(value) {
    this.shoppingList = value;
    this.recipes = false;
  }
}
