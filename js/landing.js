var U={id:{kick:'Selamat datang',msg:'Ayo jelajahi pesona budaya Jambi: rumah adat, batik, tari, dan kuliner yang menunggu untuk ditemukan.',go:'Masuk ke infografis',tl:'EN',tt:'Mode'},en:{kick:'Welcome',msg:'Come and explore the charm of Jambi culture: traditional houses, batik, dance and food waiting to be discovered.',go:'Enter the infographic',tl:'ID',tt:'Mode'}};
function ui(){var u=U[L];R.lang=L;['kick','msg','go','tl','tt'].forEach(function(k){$(k).textContent=u[k]})}
$('tl').onclick=function(){L=L=='id'?'en':'id';sv('lg',L);ui()};
$('tt').onclick=function(){var dk=R.dataset.theme?R.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;R.dataset.theme=dk?'light':'dark';sv('th',R.dataset.theme)};
ui();
