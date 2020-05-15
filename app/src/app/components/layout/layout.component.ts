import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zg-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  settings: {
    links: Array<{
      title: string,
      link: string
    }>
  };

  ngOnInit() {
    this.settings = this.activatedRoute.snapshot.data.settings;
  }
}
