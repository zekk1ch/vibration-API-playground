const CACHE_NAME = 'vibration-API-playground';
const STATIC_ASSET_URLS = [
    'index.html',
    'bundle.js',
    'manifest.json',
    'images/logo/favicon.ico',
    'images/logo/android-chrome-512x512.png',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSET_URLS))
            .catch(err => console.error(err))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request.clone())
            .then(response => {
                if (!response.ok) {
                    throw response;
                }

                if (e.request.method === 'GET' && STATIC_ASSET_URLS.includes(e.request.url)) {
                    caches
                        .open(CACHE_NAME)
                        .then(cache => cache.put(e.request, response))
                        .catch(err => console.error(err));
                }

                return response.clone();
            })
            .catch(err => {
                const response = err instanceof Response ? err : new Response(null, { status: 503 });

                return caches
                    .match(e.request)
                    .then(cachedResponse => cachedResponse ? cachedResponse : response)
                    .catch(err => {
                        console.error(err);
                        return response;
                    });
            })
    );
});
