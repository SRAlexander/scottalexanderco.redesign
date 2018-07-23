import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rss-feed-card',
  templateUrl: './feed-card.component.html',
  // styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

  goToPost(url){
    window.location.href = url;
  }

}