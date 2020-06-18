import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  HostListener
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'zg-photo-gallery-list',
  templateUrl: './photo-gallery-list.component.html',
  styleUrls: ['./photo-gallery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryListComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute
  ) {}
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.gallery) {
      this.gallery = '';
    }
  }

  item: any;
  gallery: string;

  toggleGallery(fullImg?: string) {
    this.gallery = fullImg;
    this.document.body.classList.toggle('of-hidden');
  }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
