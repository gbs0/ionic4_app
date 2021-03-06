"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("../news.service");
var HomePage = /** @class */ (function () {
    function HomePage(newsService) {
        this.newsService = newsService;
        this.page = 1;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getData('top-headlines?country=br')
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    HomePage.prototype.loadMoreNews = function (event) {
        var _this = this;
        this.page++;
        console.log(event);
        this.newsService
            .getData("top-headlines?country=us&category=business&pageSize=5&page=" + this.page)
            .subscribe(function (data) {
            // console.log(data);
            // this.data = data;
            for (var _i = 0, _a = data['articles']; _i < _a.length; _i++) {
                var article = _a[_i];
                _this.data.articles.push(article);
            }
            event.target.complete();
            console.log(_this.data);
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map