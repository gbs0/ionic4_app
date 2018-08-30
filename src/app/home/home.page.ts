import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
	// Noticias que serão exibidas
	data: any;
	page = 1;

	constructor(private newsService:NewsService) { }

	ngOnInit(){
	  this.newsService.getData('top-headlines?country=br')
	  .subscribe(data => {console.log(data);
	  	this.data = data;
	  })
	}

	loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
      .getData(
        `top-headlines?country=us&category=business&pageSize=5&page=${
          this.page
        }`
      )
      .subscribe(data => {
        // console.log(data);
        // this.data = data;
        for (const article of data['articles']) {
          this.data.articles.push(article);
        }
	        event.target.complete();
	        console.log(this.data);
      });
  }
}
