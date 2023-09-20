import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private Http: HttpClient) { }

  getLatestNews(topicName:string):Observable<News>{
    return this.Http.get<News>(environment.newsAPIbaseUrl,{
      
      params:new HttpParams()
      .set(environment.newsAPIKey,environment.newsAPIKeyValue)
      .set('q',topicName)
      .set('country','gb')
    })

  }

  getLatestSportNews(topicSports:string):Observable<News>{
    return this.Http.get<News>(environment.newsAPIbaseUrl,{
      
      params:new HttpParams()
      .set(environment.newsAPIKey,environment.newsAPIKeyValue)
      .set('q',topicSports)
    })

  }

}
