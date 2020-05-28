import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxDestroy } from '@jaspero/ng-helpers';
import { skip, takeUntil } from 'rxjs/operators';
import { Page } from '../../interfaces/page.interface';

@Component({
  selector: 'zg-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent extends RxDestroy implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  page: Page;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;

    this.activatedRoute.data
      .pipe(
        skip(1),
        takeUntil(this.destroyed$)
      )
      .subscribe(({page}) => {
        this.page = page;
        this.cdr.markForCheck();
      })
  }
}
