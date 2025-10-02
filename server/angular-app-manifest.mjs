
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://annafijorek.github.io/breath_app_AngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/breath_app_AngularProject"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 545, hash: '42c3066b452eb466b66985ec8f5ae0cc5330a70e93f0f01ddc4efbc947b8b641', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '6048116689c739126f3559e49221445350b2488f8ecccb66046642f6b5718d0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4258, hash: '2476ae1b2a471d53d67868d5e5c827198e2ef0e61f9a45e6354fccce0e052af4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
