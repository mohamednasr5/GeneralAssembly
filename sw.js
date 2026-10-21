/* عامل خدمة بسيط: يسمح بتثبيت الصفحة كتطبيق، ولا يخزّن شيئاً (البيانات دائماً مباشرة) */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
