import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
