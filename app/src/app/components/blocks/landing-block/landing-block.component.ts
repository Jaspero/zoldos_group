import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zg-landing-block',
  templateUrl: './landing-block.component.html',
  styleUrls: ['./landing-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
