/* 
  SERVICE WORKER - Offline Support & Caching
  Endless Electricals - Progressive Web App
*/

const CACHE_NAME = 'endless-v2';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event - Network First Strategy
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Clone and cache successful responses
                if (!response || response.status !== 200) {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            })
            .catch(() => {
                // Return cached version on failure
                return caches.match(event.request)
                    .then(response => {
                        return response || new Response(
                            'Offline - Please check your internet connection',
                            { status: 503, statusText: 'Service Unavailable' }
                        );
                    });
            })
    );
});
