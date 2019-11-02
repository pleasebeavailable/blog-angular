import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArticleComponent,
    NotFoundComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
