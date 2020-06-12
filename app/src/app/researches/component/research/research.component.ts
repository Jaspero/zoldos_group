import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
