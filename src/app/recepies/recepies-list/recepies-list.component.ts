import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Testing','Simply a test','https://i.kinja-img.com/gawker-media/image/upload/s--m6hjGHRf--/c_scale,f_auto,fl_progressive,q_80,w_800/aapfqrjiromx7x1m6rgy.jpg'),
    new Recipe('hahahaha','Simply a teasdf ads st','https://i.kinja-img.com/gawker-media/image/upload/s--m6hjGHRf--/c_scale,f_auto,fl_progressive,q_80,w_800/aapfqrjiromx7x1m6rgy.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
  }

}
