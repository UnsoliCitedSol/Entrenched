/* Entrenched app shell. Relative URLs work at / and at /any-repository-name/. */
'use strict';
const ROOT = self.registration.scope;
const PREFIX = 'entrenched-pwa::' + ROOT + '::';
const CACHE = PREFIX + 'db9e9c4176731b';
const HOME = new URL('./', ROOT).href;
const INDEX = new URL('./index.html', ROOT).href;
const FILES = ["index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"].map(name => new URL(name, ROOT).href);
const ASSETS = new Set(FILES);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll([HOME, ...FILES]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const base = new URL(ROOT);
  if (request.method !== 'GET' || url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) return;
  const gamePage = url.pathname === base.pathname || url.pathname === new URL(INDEX).pathname;
  if (request.mode === 'navigate' && gamePage) {
    // Prefer a fresh page, but open the complete cached game when there is no connection.
    // Never reload an active run: updates take effect on the player's next page load.
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const response = await fetch(new Request(request, {cache: 'no-cache'}));
        if (response.ok) {
          await Promise.all([cache.put(HOME, response.clone()), cache.put(INDEX, response.clone())]);
        }
        return response;
      } catch (error) {
        return await cache.match(INDEX) || new Response('Open Entrenched online once to enable offline play.', {
          status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}
        });
      }
    })());
  } else if (ASSETS.has(url.origin + url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request, {ignoreSearch: true});
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
