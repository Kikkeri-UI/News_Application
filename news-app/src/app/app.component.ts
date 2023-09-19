import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { News } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  topicName:string='sports';
  // imageUrls:any;
  // imageUrl1:string='';
  newsData?:News;
  articleTitle:string='';
  imageUrl:Array<any>=[];
  title:Array<any>=[];
  constructor(private newsService:NewsService){}



  ngOnInit(): void {
    this.getLatestNewsByTopics(this.topicName);
    this.topicName='';
    
  }

  private getLatestNewsByTopics(topicName:string){
    this.newsService.getLatestNews(topicName).subscribe({
      next : (response) =>{
        
        console.log(response);
        this.newsData=response;
        response.results.forEach((item)=>{
          if(item.image_url!==null||undefined){
            this.imageUrl.push(item.image_url)
            //this.imageUrls =item.image_url;
          //console.log(this.imageUrls);
          //this.imageUrl1=this.imageUrls.image_url;
          }
          if(item.title!==null||undefined){
            this.title.push(item.title);
          }
          
        })
        console.log(this.imageUrl);
        console.log(this.title);
        
        
        //this.imageUrl=response.results[0].image_url;
      }
    })

  }


  
}
