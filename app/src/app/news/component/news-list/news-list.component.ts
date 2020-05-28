import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
