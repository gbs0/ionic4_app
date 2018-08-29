import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  constructor (private newsService:NewsService) { }

  ngOnInit(){
  	this.newsService.getData('top-headlines?country=br&category=technology')
  	.subscribe(data => {console.log(data)
	;})
  }

}

