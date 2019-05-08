import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TweetFeedComponent} from './tweet-feed/tweet-feed.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'twitter-feed', component: TweetFeedComponent },
  { path: 'app-recipes', component: RecipesComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
