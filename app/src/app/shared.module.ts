import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BlockRendererComponent} from './components/blocks/block-renderer/block-renderer.component';
import {LandingBlockComponent} from './components/blocks/landing-block/landing-block.component';
import {NewsBlockComponent} from './components/blocks/news-block/news-block.component';
import {TwoBlockTextComponent} from './components/blocks/two-block-text/two-block-text.component';
import {MarkdownToHtmlPipe} from './pipes/markdown-to-html/markdown-to-html.pipe';
import {TextPipe} from './pipes/text/text.pipe';
import {ResearchesBlockComponent} from './components/blocks/researches-block/researches-block.component';
import {GalleryBlockComponent} from './components/blocks/gallery-block/gallery-block.component';
import {MembersBlockComponent} from './components/blocks/members-block/members-block.component';
import {ContactBlockComponent} from './components/blocks/contact-block/contact-block.component';

const MODULES = [CommonModule, RouterModule];

const PIPES = [TextPipe, MarkdownToHtmlPipe];

const COMPONENTS = [
  /**
   * Blocks
   */
  BlockRendererComponent,

  TwoBlockTextComponent,
  LandingBlockComponent,
  NewsBlockComponent,
  ResearchesBlockComponent,
  GalleryBlockComponent,
  MembersBlockComponent,
  ContactBlockComponent
];

@NgModule({
  imports: [...MODULES],
  exports: [...PIPES, ...MODULES, ...COMPONENTS],
  declarations: [...PIPES, ...COMPONENTS]
})
export class SharedModule {}
