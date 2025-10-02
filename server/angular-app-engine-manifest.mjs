
export default {
  basePath: 'https://github.com/annafijorek/breath_app_AngularProject',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
