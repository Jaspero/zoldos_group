import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RxDestroy} from '@jaspero/ng-helpers';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map, skip, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'zg-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchesComponent extends RxDestroy implements OnInit {
  constructor(
    private scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  items$: Observable<ScullyRoute[]>;
  page: any;

  ngOnInit() {
    this.items$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/researches/')))
    );

    this.page = this.activatedRoute.snapshot.data.page;

    this.activatedRoute.data
      .pipe(skip(1), takeUntil(this.destroyed$))
      .subscribe(({page}) => {
        this.page = page;
        this.cdr.markForCheck();
      });
  }
}
