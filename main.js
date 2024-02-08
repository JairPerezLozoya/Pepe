//Cargar service worker
if ('service worker' in navigator)
{
    console.log("Puedes usar el services worke");
    //configuracion del sw
    navigator.serviceWorker.register('./sw.js')
    .then(res=>console.log('sw cargado correctamente',res))
    .catch(err=> console.log('service worker no se ha podido registrar', err));

}
else
{
    console.log("No se puede usar el Service Worker");
}
