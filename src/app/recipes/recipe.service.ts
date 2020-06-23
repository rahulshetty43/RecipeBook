import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] =[
    new Recipe(
      'Naati Koli Saaru',
      'Most Delicious Saaru you can have',
      'https://i0.wp.com/www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/3-oct/Meal_Plate_Ragi_Mudde_Koli_Saaru_-2.jpg?resize=650,400',
    [
      new Ingredient('Naati Koli', 1),
      new Ingredient('Mudde', 1)
    ]
    ),
    new Recipe(
      'Scrambled Egg Paradise',
      'You will get lost by tasting this beauty' ,
    'https://cdn4.sg.orstatic.com/userphoto/photo/1/12K/007M8V277659B279C31D67px.jpg',
    [
      new Ingredient('Eggs', 10),
      new Ingredient('Oil', 1)
    ]
    )
   ];

   constructor(private shoppingListService: ShoppingListService) { }

   getRecipes() {
     return this.recipes.slice();
   }

   getRecipe(index: number){
     return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
   }
}
