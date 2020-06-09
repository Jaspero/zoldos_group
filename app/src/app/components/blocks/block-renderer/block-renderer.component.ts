import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {ImagesBlockComponent} from '../images-block/images-block.component';
import {LandingBlockComponent} from '../landing-block/landing-block.component';
import {NewsBlockComponent} from '../news-block/news-block.component';
import {PortfolioBlockComponent} from '../portfolio-block/portfolio-block.component';
import {ResearchesBlockComponent} from '../researches-block/researches-block.component';
import {TestBlockComponent} from '../test-block/test-block.component';
import {TextBlockComponent} from '../text-block/text-block.component';
import {TwoBlockTextComponent} from '../two-block-text/two-block-text.component';
import {GalleryBlockComponent} from '../gallery-block/gallery-block.component';
import {MembersBlockComponent} from '../members-block/members-block.component';
import {ContactBlockComponent} from '../contact-block/contact-block.component';

const BLOCKS = {
  textBlock: TextBlockComponent,
  portfolioBlock: PortfolioBlockComponent,
  twoBlockText: TwoBlockTextComponent,
  testBlock: TestBlockComponent,
  landingBlock: LandingBlockComponent,
  imagesBlock: ImagesBlockComponent,
  newsBlock: NewsBlockComponent,
  researchesBlock: ResearchesBlockComponent,
  galleryBlock: GalleryBlockComponent,
  membersBlock: MembersBlockComponent,
  contactBlock: ContactBlockComponent
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
