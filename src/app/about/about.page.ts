import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})

export class AboutPage implements OnInit {
  data: any;

  constructor (private newsService:NewsService) { }

  ngOnInit(){
  	this.newsService.getData('top-headlines?country=br&category=technology')
  // 	.subscribe(data => {console.log(data);
  // 		this.data = data;
		// })

	  .subscribe(data => {
	  	for (const article of data ['articles']) {
	  		this.data.articles.push(article);
	  	}
	  	// event.target.complete();
	  	console.log(this.data);

	  });
	}
}


