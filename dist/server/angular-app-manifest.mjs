
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 902, hash: '645bd594b1a3a777d64178667430fd84dcdd7ca4f1d64eab88dda655e9b227b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1017, hash: 'f30c4b08a502204b3f49508b4b744a364dabe2631d5a60f1946bb37423cf1a4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 3475, hash: '74518b3a30d05f00c1a9e307e78d58294dfe907a360f9fa69583ce2fb52f5640', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-CM5TEJOV.css', {size: 3504, hash: '6i2+KlySUP8', text: () => import('./assets-chunks/styles-CM5TEJOV_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
