(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var bar=$('arc-bar'),arc=document.querySelector('.tc-arc');if(bar&&arc){function ab(){var r=arc.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.5-r.top)/r.height));bar.style.height=(p*100)+'%';}addEventListener('scroll',ab,{passive:true});ab();}
var SG=[['Hook','#0C0D12','Spark curiosity'],['Recall','#5D5F6A','Retrieve prior learning'],['Model','#1F3BD1','Show and explain'],['Guided','#3550E8','Practise together'],['Practice','#7B8BF0','Work independently'],['Check','#0C0D12','Exit question'],['Review','#1F3BD1','Mixed questions'],['Make','#3550E8','Build or experiment']];
var PL=[[[0,.08],[1,.1],[2,.27],[3,.2],[4,.27],[5,.08]],[[1,.15],[3,.2],[4,.5],[5,.15]],[[1,.2],[6,.45],[4,.25],[5,.1]],[[0,.08],[2,.15],[7,.6],[5,.17]]];
var ld=$('lp-d');if(ld){var lt=$('lp-t');function lp(){var d=+ld.value,p=PL[+lt.value],acc=0,bh='',lh='';p.forEach(function(s){var g=SG[s[0]],m=Math.round(d*s[1]);acc+=m;bh+='<div style="flex-grow:'+s[1]+';background:'+g[1]+'">'+g[0]+'</div>';lh+='<li style="--c:'+g[1]+'"><b>'+g[0]+'</b><small>'+m+' min</small><p>'+g[2]+'</p></li>';});$('lp-bar').innerHTML=bh;$('lp-o').innerHTML=lh;}
 ld.addEventListener('change',lp);lt.addEventListener('change',lp);lp();}
var Q=[['Remember',['What is&hellip;?','Can you list&hellip;?','When did&hellip;?','Who was&hellip;?']],['Understand',['Explain in your own words&hellip;','What is the main idea of&hellip;?','How would you summarise&hellip;?','Can you give an example of&hellip;?']],['Apply',['How would you use&hellip; to solve&hellip;?','What would happen if&hellip;?','Can you show me how&hellip;?','Where else could this work?']],['Analyse',['Why do you think&hellip;?','What is the difference between&hellip;?','What evidence supports&hellip;?','How is&hellip; connected to&hellip;?']],['Evaluate',['Which is the better option, and why?','Do you agree that&hellip;?','How would you judge&hellip;?','What would you change?']],['Create',['How could you design&hellip;?','What would you propose instead?','Can you invent a new&hellip;?','How would you combine&hellip;?']]];
var rb=[].slice.call(document.querySelectorAll('.tc-rungs button'));if(rb.length){function qs(k){rb.forEach(function(b){var on=+b.getAttribute('data-q')===k;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false');});$('qs-o').innerHTML='<h3>'+Q[k][0]+'</h3><ul>'+Q[k][1].map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul>';}
 rb.forEach(function(b){b.addEventListener('click',function(){qs(+b.getAttribute('data-q'));});});qs(0);}
var wg=$('wt-go');if(wg){var r=$('wt-r'),n=$('wt-n'),m=$('wt-m'),run=false;wg.addEventListener('click',function(){if(run)return;run=true;var t0=performance.now();m.textContent='think time';(function f(t){var e=(t-t0)/1000,left=Math.max(0,5-e);n.textContent=Math.ceil(left);r.setAttribute('stroke-dashoffset',(603.2*(1-Math.min(1,e/5))).toFixed(1));if(e<5)requestAnimationFrame(f);else{n.textContent='Go';m.textContent='take answers';setTimeout(function(){run=false;n.textContent='5';m.textContent='seconds';r.setAttribute('stroke-dashoffset','603.2');},2600);}})(t0);});}
})();
