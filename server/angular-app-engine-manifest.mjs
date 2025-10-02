
export default {
  basePath: 'https://annafijorek.github.io/breath_app_AngularProject',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
