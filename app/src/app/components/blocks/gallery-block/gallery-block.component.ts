import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {ScullyRoute} from '@scullyio/ng-lib';

@Component({
  selector: 'zg-gallery-block',
  templateUrl: './gallery-block.component.html',
  styleUrls: ['./gallery-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryBlockComponent {
  constructor() {}
  items$: Observable<ScullyRoute[]>;
  data: any;
}
