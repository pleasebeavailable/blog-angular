import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../article';
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';
import {Location} from "@angular/common";

/**
 * Must exist for cross http get
*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ArticleService {

  apiUrl = 'http://localhost:9090';

  constructor(private httpClient: HttpClient, private location: Location) { }

  public getArticles(): Observable<Article[]>{
      return this.httpClient.get<Article[]>(this.apiUrl + '/findall', httpOptions)
        .pipe(
          tap(_ => console.log('Fetch Articles'))
        );
  }

  public getArticle(id): Observable<Article> {
    return this.httpClient.get<Article>(this.apiUrl + '/findById/' + id, httpOptions)
      .pipe(
        tap(_ => console.log('Fetch Article: ' + id))
      );
  }

  goBack() {
    this.location.back();
  }
}
