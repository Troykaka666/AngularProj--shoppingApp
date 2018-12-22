import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Testing','Simply a test','https://i.kinja-img.com/gawker-media/image/upload/s--m6hjGHRf--/c_scale,f_auto,fl_progressive,q_80,w_800/aapfqrjiromx7x1m6rgy.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
