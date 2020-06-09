import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-members-block',
  templateUrl: './members-block.component.html',
  styleUrls: ['./members-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
