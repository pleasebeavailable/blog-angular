import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './article-package/article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticlesComponent } from './article-package/articles/articles.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { ArticleFormComponent } from './article-package/article-form/article-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'articles/view/:id',
    component: ArticleComponent
  },
  {
    path: 'articles/edit/:id',
    component: ArticleFormComponent
  },
  {
    path: 'articles/create',
    component: ArticleFormComponent
  },
  {
    path: 'articles/delete/:id',
    component: ArticlesComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    ArticlesComponent,
    ArticleFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
