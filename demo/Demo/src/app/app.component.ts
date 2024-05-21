import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WarningComponent } from './status/warning/warning.component';
import { NormalComponent } from './status/normal/normal.component';
import { AlarmComponent } from './status/alarm/alarm.component';
import { RecipesComponent } from './Recipes/recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import bootstrap from '../main.server';
import { HeaderComponent } from './Header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,WarningComponent,NormalComponent,AlarmComponent,RecipesComponent,ShopingListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
}
