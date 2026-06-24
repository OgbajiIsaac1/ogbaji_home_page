const CACHE = 'ogbaji-cache-v1';

const ASSETS = [
  '/ogbaji_home_page/',
  '/ogbaji_home_page/index.html',
  '/ogbaji_home_page/about.html',
  '/ogbaji_home_page/services.html',
  '/ogbaji_home_page/blog.html',
  '/ogbaji_home_page/contact.html',
  '/ogbaji_home_page/about-ceo.html',
  '/ogbaji_home_page/follow-us.html',
  '/ogbaji_home_page/404.html',
  '/ogbaji_home_page/assets/css/main.css',
  '/ogbaji_home_page/assets/css/tailwind-build.css',
  '/ogbaji_home_page/main.js',
  '/ogbaji_home_page/favicon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
