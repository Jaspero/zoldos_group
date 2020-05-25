import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-two-block-text',
  templateUrl: './two-block-text.component.html',
  styleUrls: ['./two-block-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoBlockTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
