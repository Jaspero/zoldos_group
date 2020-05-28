import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
