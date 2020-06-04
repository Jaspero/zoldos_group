import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-images-block',
  templateUrl: './images-block.component.html',
  styleUrls: ['./images-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesBlockComponent {
  data: any;
}
