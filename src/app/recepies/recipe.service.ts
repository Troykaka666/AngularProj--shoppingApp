import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome',
        'https://i.kinja-img.com/gawker-media/image/upload/s--m6hjGHRf--/c_scale,f_auto,fl_progressive,q_80,w_800/aapfqrjiromx7x1m6rgy.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
    new Recipe(
        'Big Fat Burger',
        'What else you need to say?',
        'https://i.kinja-img.com/gawker-media/image/upload/s--m6hjGHRf--/c_scale,f_auto,fl_progressive,q_80,w_800/aapfqrjiromx7x1m6rgy.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slServe: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slServe.addIngredients(ingredients);
    }
}