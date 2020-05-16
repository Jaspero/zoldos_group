import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zg-portfolio-block',
  templateUrl: './portfolio-block.component.html',
  styleUrls: ['./portfolio-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioBlockComponent {
  data: any;
}
