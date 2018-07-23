import { Component, OnInit } from '@angular/core';
import { FeedService } from './components/rss/feed-service.service';
import { ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private feedUrl: string = 'https://sacode.co.uk/rss';
  private feeds: any;

  constructor (
    private feedService: FeedService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items.slice(0,6),
            error => console.log(error));
  }
  
  scroll(el) {
    // el.parentElement.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
    window.scroll({behavior: 'smooth', top: el.offsetTop-100});
  }

  goToPDF(pdfName){
    window.location.href= this.activatedRoute.snapshot.url + '\\assets\\pdfs\\' + pdfName;
  }
}


