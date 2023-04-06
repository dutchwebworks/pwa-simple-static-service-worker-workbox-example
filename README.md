# PWA Simple Static Service-Worker Workbox example

*By Dennis Burger, April 2023*

## App manifest and generating icons

* https://tools.crawlink.com/tools/pwa-icon-generator/
* https://app-manifest.firebaseapp.com/
* https://www.simicart.com/manifest-generator.html/

## Caching strategies

There are several Google Workbox caching strategies available: https://developer.chrome.com/docs/workbox/caching-strategies-overview/#caching-strategies

### Pre-caching

https://developer.chrome.com/docs/workbox/modules/workbox-precaching/

A good idea is to pre-cache certain files that are guarantee to keep working for a long time:
* Fonts
* Logo
* Some big fixed hero images on (blog / news) detail pages

### Runtime-caching

* https://developer.chrome.com/docs/workbox/modules/workbox-strategies/

## PWA install prompt

* https://web.dev/customize-install/#in-app-flow
* https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event