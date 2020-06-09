import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-photo-gallery-list',
  templateUrl: './photo-gallery-list.component.html',
  styleUrls: ['./photo-gallery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryListComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}