import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'exo-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent {
  data: {
    title?: string;
    content?: string;
  };
}
