const cacheName = 'cacheAssets';
const files = [
    '/',
    './css/main.css',
    './js/main.js',
    './images/pizza.png',
    './images/pizzeria.jpg'
];
self.addEventListener('install', async () => {
    //console.log('> service worker Installed..'); event.waitUntil
    const cache = await caches.open(cacheName);
    cache.addAll(files);
});

self.addEventListener('activate', e => {
    console.log('> service worker Activated..');
    e.waitUntil(
        caches.keys().then(() => Promise.all(files.map(c => {
            if (c !== cacheName) {
                console.warn('removing cache files');
                return caches.delete(c)
            }
        })))
    );
});

self.addEventListener("fetch", event => {
    const req = event.request;
    // Prevent the default, and handle the request ourselves.
    event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(req);
    // Return it if we found one.
    return cachedResponse || fetch(req);
}