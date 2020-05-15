// import { Http404 } from '@gammastream/scully-plugin-http404';
import * as lazyImages from '@notiz/scully-plugin-lazy-images';
// import { Sitemap } from '@gammastream/scully-plugin-sitemap';
import { RouteTypes, ScullyConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'zg',
  outDir: './dist/static',
  // sitemapOptions: {
  //   urlPrefix: 'https://zoldos-group.com',
  //   sitemapFilename: 'sitemap.xml',
  //   changeFreq: 'monthly',
  //   priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  //   ignoredRoutes: ['/404']
  // },
  defaultPostRenderers: [
    'seoHrefOptimise',
    // Sitemap,
    // Http404,
    lazyImages,
    MinifyHtml
  ],
  routes: {
    '/:id': {
      type: RouteTypes.contentFolder,
      id: {
        folder: './dist/collections/pages'
      }
    }
  }
};
