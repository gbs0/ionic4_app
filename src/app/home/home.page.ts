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
	constructor(private newsService:NewsService) { }

	ngOnInit(){
	  this.newsService.getData('top-headlines?country=br')
	  .subscribe(data => {console.log(data);
	  	this.data = data;
	  })
	}
}
