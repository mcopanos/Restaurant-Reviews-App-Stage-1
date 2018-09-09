const staticWorker = 'restaurant-app-v1'
const urlsToCache = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
]
/* Install Cache */
 self.addEventListener('install', event => {
   event.waitUntil(
     caches.open(staticWorker).then(cache => {
       console.log('urls cached')
       return cache.addAll(urlsToCache);
     }).catch(error => {
       console.log('urls not cached')
     })
  );
 })

 /* Fetch Request */
 self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request)
    })
  )
});

