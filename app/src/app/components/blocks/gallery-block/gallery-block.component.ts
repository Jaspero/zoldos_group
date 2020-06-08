import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-gallery-block',
  templateUrl: './gallery-block.component.html',
  styleUrls: ['./gallery-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryBlockComponent {
  constructor() {}

  data: any;
}
