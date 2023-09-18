import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  topicName:string='sports';
  constructor(private newsService:NewsService){}



  ngOnInit(): void {
    //this.getLatestNewsByTopics(this.topicName);
    this.topicName='';
    
  }

  // private getLatestNewsByTopics(topicName:string){
  //   this.newsService.getLatestNews(topicName).subscribe({
  //     next : (response) =>{
  //       console.log(response);
  //     }
  //   })

  // }


  
}
