import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {RxDestroy} from '@jaspero/ng-helpers';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'zg-lab-members',
  templateUrl: './lab-members.component.html',
  styleUrls: ['./lab-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabMembersComponent extends RxDestroy implements OnInit {
  constructor(
    private scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {}
}
