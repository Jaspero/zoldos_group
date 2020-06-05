import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zg-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
