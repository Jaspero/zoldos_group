import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-test-block',
  templateUrl: './test-block.component.html',
  styleUrls: ['./test-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
