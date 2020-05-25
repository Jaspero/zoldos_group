import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {PortfolioBlockComponent} from '../portfolio-block/portfolio-block.component';
import {TextBlockComponent} from '../text-block/text-block.component';
import {TwoBlockTextComponent} from '../two-block-text/two-block-text.component';
import {TestBlockComponent} from '../test-block/test-block.component';

const BLOCKS = {
  textBlock: TextBlockComponent,
  portfolioBlock: PortfolioBlockComponent,
  twoBlockText: TwoBlockTextComponent,
  testBlock: TestBlockComponent,
};

@Component({
  selector: 'zg-block-renderer',
  templateUrl: './block-renderer.component.html',
  styleUrls: ['./block-renderer.component.scss']
})
export class BlockRendererComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}

  @Input()
  blocks: any[];

  ngOnInit() {
    for (const block of this.blocks) {
      if (BLOCKS[block.type]) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          BLOCKS[block.type]
        );
        const componentRef = this.vcr.createComponent(componentFactory);
        (componentRef.instance as any).data = block;
      }
    }
  }
}
