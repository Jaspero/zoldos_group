import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockRendererComponent } from './components/blocks/block-renderer/block-renderer.component';
import { TextBlockComponent } from './components/blocks/text-block/text-block.component';
import { PageComponent } from './components/page/page.component';
import { MarkdownToHtmlPipe } from './pipes/markdown-to-html/markdown-to-html.pipe';
import { TextPipe } from './pipes/text/text.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [

    /**
     * Components
     */
    AppComponent,
    PageComponent,

    /**
     * Blocks
     */
    BlockRendererComponent,

    TextBlockComponent,

    /**
     * Pipes
     */
    MarkdownToHtmlPipe,
    TextPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
  ],
  providers: [],
  exports: [
    TextPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
