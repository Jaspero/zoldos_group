import * as Http404 from '@gammastream/scully-plugin-http404';
import * as lazyImages from '@notiz/scully-plugin-lazy-images';
import * as Sitemap from '@gammastream/scully-plugin-sitemap';
import {registerPlugin, RouteTypes, ScullyConfig} from '@scullyio/scully';
import {MinifyHtml} from 'scully-plugin-minify-html';
import {readdirSync} from 'fs';

async function pages(route, config: any = {}) {
  const {folder} = config;

  return readdirSync('../public/collections/' + folder).map(file => ({
    route: '/' + file.split('.')[0]
  }));
}
registerPlugin('router', 'cFiles', pages, async () => []);

const dynamicPages = [
  'researches',
  'news',
  'publications',
  'lab-members',
  'photo-gallery'
];

export const config = {
  projectRoot: './src',
  projectName: 'zg',
  outDir: './dist/static',
  sitemapOptions: {
    urlPrefix: 'https://zoldos-group.com',
    sitemapFilename: 'sitemap.xml',
    changeFreq: 'monthly',
    priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
    ignoredRoutes: ['/404']
  },
  defaultPostRenderers: [
    'seoHrefOptimise',
    Sitemap,
    Http404,
    lazyImages,
    MinifyHtml
  ],
  routes: {
    '/:id': {
      type: 'cFiles',
      folder: 'pages'
    },
    ...dynamicPages.reduce((acc, cur) => {
      acc[`/${cur}/:id`] = {
        type: RouteTypes.contentFolder,
        id: {
          folder: '../public/collections/' + cur
        }
      };

      return acc;
    }, {})
  }
};
