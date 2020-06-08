import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'zg-gallery-block',
  templateUrl: './gallery-block.component.html',
  styleUrls: ['./gallery-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
