import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Block } from '../block.enum';
import { TextBlockComponent } from '../text-block/text-block.component';

const BLOCKS_MAP: {[key: string]: any} = {
  [Block.TextBlock]: TextBlockComponent,
};

@Component({
  selector: 'exo-block-renderer',
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
      if (BLOCKS_MAP[block.type]) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          BLOCKS_MAP[block.type]
        );
        const componentRef = this.vcr.createComponent(componentFactory);
        (componentRef.instance as any).data = block;
      }
    }
  }
}
