var L='id',R=document.documentElement;try{L=localStorage.getItem('lg')||'id';var th=localStorage.getItem('th');th&&(R.dataset.theme=th)}catch(e){}
function sv(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function $(i){return document.getElementById(i)}
function rnd(a,b){return a+Math.random()*(b-a)}
function pet(k,rx,ry,cx,cy){var p='';for(var i=0;i<k;i++)p+='<ellipse cx="'+cx+'" cy="'+(cy-ry)+'" rx="'+rx+'" ry="'+ry+'" transform="rotate('+i*360/k+' '+cx+' '+cy+')"/>';return p}
(function(){var dc=$('deco'),n=innerWidth<600?12:22,C=['var(--fl)','var(--gd)','var(--ac)'];
var T=[function(){return '<path d="M50 150C45 110 55 80 50 40" stroke="currentColor" stroke-width="3" fill="none"/><g class="pt">'+pet(6,8,17,50,36)+'<circle cx="50" cy="36" r="7" fill="var(--bg)"/></g>'},
function(){return '<path d="M50 150C55 110 45 70 50 20" stroke="currentColor" stroke-width="3" fill="none"/><path d="M50 100Q15 85 12 55Q45 62 50 100ZM50 70Q85 55 88 25Q55 32 50 70Z"/>'},
function(){return '<g class="rt">'+pet(8,9,28,50,80)+'</g><circle cx="50" cy="80" r="9" fill="var(--bg)"/>'},
function(){return '<path d="M10 100Q50 150 90 100Z"/><path d="M50 100V30M30 100V55M70 100V45" stroke="currentColor" stroke-width="3"/><path d="M50 30L80 40L50 50ZM30 55L10 62L30 70Z"/>'}];
for(var i=0;i<n;i++){var e=document.createElement('div'),s=rnd(44,92);e.className='fl';e.style.cssText='width:'+s+'px;height:'+s*1.6+'px;top:'+rnd(0,88)+'%;'+(i%2?'left:':'right:')+rnd(-2,8)+'%;color:'+C[i%3]+';--d:'+rnd(3,7)+'s;--e:'+rnd(2.5,5.5)+'s;';e.innerHTML='<svg viewBox="0 0 100 160">'+T[i%4]()+'</svg>';e.firstChild.style.animationDelay='-'+rnd(0,5)+'s';var g=e.querySelector('.pt');g&&(g.style.animationDelay='-'+rnd(0,4)+'s');dc.appendChild(e)}$('wv').style.setProperty('--d','16s')})();
