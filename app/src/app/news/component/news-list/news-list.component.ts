import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
