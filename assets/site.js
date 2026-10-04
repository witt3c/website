document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'關閉選單':'選單';});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='選單';toggle.focus();}});}
const extras=[...document.querySelectorAll('[data-price]')],total=document.querySelector('#estimate-total');
function update(){if(total)total.textContent='NT$'+(3800+extras.reduce((sum,el)=>sum+(el.checked?Number(el.dataset.price):0),0)).toLocaleString('zh-TW');}
extras.forEach(el=>el.addEventListener('change',update));update();
