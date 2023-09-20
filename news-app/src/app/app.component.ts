import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { News } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  topicName: string = 'politics';
  topicSports: string = 'sports'
  newsData?: News;
  sportsData?: News;
  articleTitle: string = '';
  imageUrl: Array<any> = [];
  sportImageUrl: Array<any> = [];
  title: Array<string> = [];
  sportTitle: Array<string> = [];
  link: Array<any> = [];
  constructor(private newsService: NewsService) { }



  ngOnInit(): void {
    this.getLatestNewsByTopics(this.topicName);
    this.topicName = '';
    this.getSportsNews(this.topicSports);
    this.topicSports = '';


  }

  private getLatestNewsByTopics(topicName: string) {
    this.newsService.getLatestNews(topicName).subscribe({
      next: (response) => {

        console.log(response);
        this.newsData = response;
        response.results.forEach((item) => {
          if (item.image_url !== null || undefined) {
            this.imageUrl.push(item.image_url)

          }
          if (item.title !== null || undefined) {
            this.title.push(item.title);
          }
          this.link.push(item.link);

        })
        console.log(this.imageUrl);
        console.log(this.title);

      }
    })


  }
  private getSportsNews(topicSports: string) {
    this.newsService.getLatestSportNews(this.topicSports).subscribe({
      next: (response) => {
        console.log(response);
        this.sportsData = response;
        response.results.forEach((item) => {
          if (item.image_url !== null || undefined) {
            this.sportImageUrl.push(item.image_url);
          }
          if (item.title !== null || undefined && item.title['length']<200) {
            this.sportTitle.push(item.title);
          }
          console.log(this.sportTitle);
        })
      }
    })
  }
}
