import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockRendererComponent } from './components/blocks/block-renderer/block-renderer.component';
import { TextBlockComponent } from './components/blocks/text-block/text-block.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageComponent } from './components/page/page.component';
import { BASE_TITLE } from './consts/base-title.const';
import { MarkdownToHtmlPipe } from './pipes/markdown-to-html/markdown-to-html.pipe';
import { TextPipe } from './pipes/text/text.pipe';

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

    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    /**
     * Angular
     */
    BrowserModule,
    HttpClientModule,

    /**
     * Local
     */
    AppRoutingModule,
  ],
  providers: [
    {
      provide: BASE_TITLE,
      useValue: 'Zoldos Group'
    }
  ],
  exports: [
    TextPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
