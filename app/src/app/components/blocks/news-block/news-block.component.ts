import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'zg-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsBlockComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}

  data: any;
  news$: Observable<any[]>;

  ngOnInit() {
    this.news$ = this.scully.available$.pipe(
      map(items =>
        items
          .filter(it => it.route.includes('/news/') && it.featured)
          .slice(0, this.data.count || 2)
      )
    );
  }
}
