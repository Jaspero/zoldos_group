import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'zg-researches-block',
  templateUrl: './researches-block.component.html',
  styleUrls: ['./researches-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchesBlockComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}

  data: any;
  researches$: Observable<any[]>;

  ngOnInit() {
    this.researches$ = this.scully.available$.pipe(
      map(items =>
        items
          .filter(it => it.route.includes('/researches/') && it.featured)
          .slice(0, this.data.count || 4)
      )
    );
  }
}
