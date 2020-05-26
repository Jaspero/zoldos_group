import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zg-landing-block',
  templateUrl: './landing-block.component.html',
  styleUrls: ['./landing-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingBlockComponent {
  data: any;
}
