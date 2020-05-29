import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {RxDestroy} from '@jaspero/ng-helpers';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, skip, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'zg-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationsComponent extends RxDestroy implements OnInit {
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
      map(items => items.filter(it => it.route.includes('/publications/')))
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
