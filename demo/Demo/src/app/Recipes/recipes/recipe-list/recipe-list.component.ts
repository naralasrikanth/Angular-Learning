import { Component } from '@angular/core';

import { recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: recipe[] =[
     new recipe('Dal', 'simple to prepare','https://th.bing.com/th/id/OIP.4ihPWq0yuERvxEfGSQglnwHaEK?rs=1&pid=ImgDetMain')
  ];

}
