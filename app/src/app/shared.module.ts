import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlockRendererComponent} from './components/blocks/block-renderer/block-renderer.component';
import {ImagesBlockComponent} from './components/blocks/images-block/images-block.component';
import {LandingBlockComponent} from './components/blocks/landing-block/landing-block.component';
import {PortfolioBlockComponent} from './components/blocks/portfolio-block/portfolio-block.component';
import {TestBlockComponent} from './components/blocks/test-block/test-block.component';
import {TextBlockComponent} from './components/blocks/text-block/text-block.component';
import {TwoBlockTextComponent} from './components/blocks/two-block-text/two-block-text.component';
import {MarkdownToHtmlPipe} from './pipes/markdown-to-html/markdown-to-html.pipe';
import {TextPipe} from './pipes/text/text.pipe';

const MODULES = [
  CommonModule
];

const PIPES = [
  TextPipe,
  MarkdownToHtmlPipe
];

const COMPONENTS = [
  /**
   * Blocks
   */
  BlockRendererComponent,

  TextBlockComponent,
  PortfolioBlockComponent,
  TwoBlockTextComponent,
  TestBlockComponent,
  LandingBlockComponent,
  ImagesBlockComponent
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...PIPES,
    ...MODULES,
    ...COMPONENTS
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule {}