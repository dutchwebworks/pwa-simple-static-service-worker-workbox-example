importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

// Debugging on production
// workbox.setConfig({ debug: true });

// Pre-caching
// https://developer.chrome.com/docs/workbox/modules/workbox-precaching/

const revision = Math.floor(100000 + Math.random() * 900000);

workbox.precaching.precacheAndRoute([
  { url: "/assets/img/logo.svg", revision: revision },
  { url: "/assets/font/ubuntu/ubuntubold.woff2", revision: revision },
  { url: "/assets/font/ubuntu/ubuntu.woff2", revision: revision },
  { url: "/assets/font/ubuntu/ubuntumedium.woff2", revision: revision },
]);

// Runtime - caching
// https://developer.chrome.com/docs/workbox/modules/workbox-strategies/

workbox.routing.registerRoute(
  /\.(?:woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

workbox.routing.registerRoute( 
  /\.(?:js|css|webp|png|svg)$/, 
  new workbox.strategies.StaleWhileRevalidate({ 
    cacheName: "assets", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 20, 
        maxAgeSeconds: 60 * 60 * 24, 
      }), 
    ], 
  }) 
);

workbox.routing.registerRoute( 
  /\.(?:png|jpg|jpeg|gif|avif|webp)$/, 
  new workbox.strategies.CacheFirst({ 
    cacheName: "images", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 1000, 
        maxAgeSeconds: 1800, 
      }), 
    ], 
  }) 
);

/*
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);
*/

/*
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);
*/

/* 
workbox.routing.registerRoute( 
  /(\/|\.html)$/, 
  new workbox.strategies.NetworkFirst({ 
    cacheName: "html", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 20, 
        // maxAgeSeconds: 60 * 60 * 24 * 30, 
      }) 
    ] 
  }) 
); 
*/