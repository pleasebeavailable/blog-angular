import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../services/article.service';
import {Article} from '../article';
import {Location} from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(response => this.articles = response);
  }

  goBack() {
    this.articleService.goBack();
  }

}
