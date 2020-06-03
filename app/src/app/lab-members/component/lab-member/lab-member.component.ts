import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-lab-member',
  templateUrl: './lab-member.component.html',
  styleUrls: ['./lab-member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabMemberComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
