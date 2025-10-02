
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/annafijorek/breath_app_AngularProject',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/annafijorek/breath_app_AngularProject"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 545, hash: '9498ffb9c69912c8eb071d2d2a3a25cdc7b29a79a0e846b3b97f01b9bbcb0945', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '92b7cff3f00df0e69630d0b5999a43b0696c998e63d2b9a926ea26da0628773f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4258, hash: 'df6d83107a70b85df039628c34b22ea27e8ae44540223a1a8e647ddda6a0a762', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
