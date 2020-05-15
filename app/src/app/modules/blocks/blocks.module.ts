import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { BlockRendererComponent } from './block-renderer/block-renderer.component';
import {TextBlockComponent} from './text-block/text-block.component';

@NgModule({
  declarations: [
    TextBlockComponent,

    BlockRendererComponent
  ],
  exports: [BlockRendererComponent],
  imports: [CommonModule, RouterModule]
})
export class BlocksModule {}
