import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PageComponent} from './components/page/page.component';
import {BASE_TITLE} from './consts/base-title.const';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    /**
     * Components
     */
    AppComponent,
    PageComponent,

    PageNotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    /**
     * Angular
     */
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),

    /**
     * Local
     */
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: BASE_TITLE,
      useValue: 'Zoldos Group'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
