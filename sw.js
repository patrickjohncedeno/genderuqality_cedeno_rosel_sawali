/* Ito yung Service Worker - Ang primary function nito siya yung nagsasave ng files ng nakadeclare para if ever offline ang app yung nakasave ang iloload and if ever na online ulit si SW ang magccheck sa server if may changes sa data and maguupdate */

/* Ito yung name ng Cache (mit502-pwa) kapag sinave yung data/files sa browser */
var cacheName = 'mit502-pwa';
/* Ito yung name mga files na iccache/ issave sa browser */
var filesToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/ways.html',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/js/common.js',
    '/js/materialize.min.js',
    '/js/app.js',
    '/img/icons/72.png',
    '/img/icons/96.png',
    '/img/icons/128.png',
    '/img/icons/144.png',
    '/img/icons/152.png',
    '/img/icons/192.png',
    '/img/icons/384.png',
    '/img/icons/512.png',
    '/img/bg.png',
    '/img/bg.jpg',
    '/img/home_g.png',
    '/img/home.png',
    '/img/INFOGRAPHIC.png',
    '/img/pic-1.jpg',
    '/img/pic-2.jpg',
    '/img/pic-3.jpg',
    '/img/pic-4.jpg',
    '/img/pic-5.jpg',
    '/img/pic-6.jpg',
    '/img/pic-7.jpg',
    '/img/pic-8.jpg',
    '/img/pic-9.jpg',
    '/img/pic-10.jpg',
    '/bg.jpg'
    
];

/* Once nagload ang page/file iccache lahat ng nakaedeclare na files sa taas filesToCache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Kapag nagoffline ang app mo ito yung mga iloload nya na nakacache doon sa var filesToCache */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});