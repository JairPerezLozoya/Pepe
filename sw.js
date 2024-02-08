// Asignar nombre y version de la cache
const CACHE_NAME='v1_cache_BCH_PWA';

//Configuracion de los ficheros a subir a la cache de la aplicacion
var urlsToCache = [
    './',

    './img/about.jpg',
    './balls-sports_16.png',
    './balls-sports_24.png',
    './balls-sports_32.png',
    './balls-sports_64.png',
    './balls-sports_128.png',
    './balls-sports_256.png',
    './balls-sports_512.png',
    './hero.jpg',
    './img-01-big.jpg',
    './img-02.jpg',
    './img-03.jpg',
    './img-04.jpg', 
    './img-05.jpg',
    './img-06.jpg',
    './img-07.jpg',
    './img-08.jpg',
    './img-09.jpg',
    './img-10.jpg',
    './img-11.jpg',
    './img-12.jpg',
    './img-13.jpg',
    './img-14.jpg',
    './img-15.jpg',
    './img-16.jpg',
    './people-1.jpg',
    './people-2.jpg',
    './people-3.jpg',
    './people-4.jpg',
    './pexels-mathias-reding-9845425.jpg',
    './pexels-yanni-shams-4122451.jpg',
    './select-arrow.png',
]

self.addEventListener('install',e => {
    // utilizamos la variable del evento
    e.waitUntil(
        caches.open(CACHE_NAME)
              .then(Cache => {
                //Le mandamos que tenemos en el array
                return caches.addAll(urlsToCache)
                             .then(()=>{
                                self.skipWaiting();
                             })
              }) 
              .catch(err=>caches.log('No se ha registrado el cache, err'))
    );
});

// Este evento permite que la aplicacion funcione offline
self.addEventListener('activate', e=> {
    const cacheWhilelist = [CACHE_NAME];

    // Que el evento espere a que termine de ejecutar
    e.waitUntil (
        caches.keys()
            .then(cacheNames=>{
                return Promise.all(
                    cacheNames.map(cacheNames => {
                        if(cacheWhilelist.indexOf(cacheNames)== -1)
                        {
                            // Borrar elementos que no se necesitan
                            return cache.delete(cacheName);
                        }
                    })
                );
            })
            .then(()=>{
                self.Clients.claim();
            })
    )
})

    self.addEventListener('fetch', e => {
        e.respondWith(
            caches.match(e.request)
                .then(res => {
                    if(res){
                        return res;
                    }
                    return fetch (e.request);
                })
        );
    });