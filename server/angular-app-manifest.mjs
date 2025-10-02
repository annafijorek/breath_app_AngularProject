
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://annafijorek.github.io/breath_app_AngularProject',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/breath_app_AngularProject"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 544, hash: 'f4a786f7b4fb51a0aac8c795df0ab45ddf46051420f86e54cfda9c846da9d15c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'f10a045f1a0ba353f426a34811fd2eaa783532a64e0c7b104ba3b6c972a43349', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4257, hash: '09a780e08b359977b40de3f0bd286cffd474db92d06e0633e6367b4674f982de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
